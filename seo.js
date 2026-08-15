/* 検索結果用メタ情報と、Googleが理解できるレース構造化データを管理する。 */
(function(){
  const SITE_NAME = 'RACE CALENDAR';
  const HOME_DESCRIPTION = 'F1、WEC、SUPER GT、SUPER FORMULA、Formula Eのレース日程、決勝開始時刻、サーキット、順位表を日本時間でまとめて確認できるモータースポーツカレンダーです。';

  function pageUrl(seriesId, round, season){
    const url = new URL(location.href);
    url.hash = '';
    url.search = '';
    if(seriesId) url.searchParams.set('series', seriesId);
    if(seriesId && season) url.searchParams.set('season', String(season));
    if(seriesId && round !== undefined && round !== null && round !== '') url.searchParams.set('round', String(round));
    return url;
  }

  function ensureMeta(selector, attributes){
    let element = document.head.querySelector(selector);
    if(!element){
      element = document.createElement('meta');
      document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    return element;
  }

  function setNameMeta(name, content){
    ensureMeta(`meta[name="${name}"]`, {name, content});
  }

  function setPropertyMeta(property, content){
    ensureMeta(`meta[property="${property}"]`, {property, content});
  }

  function setCanonical(url){
    let link = document.getElementById('canonicalLink') || document.head.querySelector('link[rel="canonical"]');
    if(!link){
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }

  function roundLabel(race){
    return typeof race.round === 'number' ? `第${race.round}戦` : String(race.round || '');
  }

  function seasonLabel(series, season){
    if(series?.id === 'formulae') return `${season - 1}-${String(season).slice(-2)}年シーズン`;
    return `${season}年シーズン`;
  }

  function countryCode(country){
    const raw = String(country || '').trim().toUpperCase();
    if(/^[A-Z]{2}$/.test(raw)) return raw;
    const points = Array.from(raw, char => char.codePointAt(0));
    if(points.length === 2 && points.every(point => point >= 0x1F1E6 && point <= 0x1F1FF)){
      return points.map(point => String.fromCharCode(65 + point - 0x1F1E6)).join('');
    }
    return raw || 'JP';
  }

  function dateISO(date){
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  function eventStart(series, race){
    const raceDate = parseDate(race.date);
    const sessions = buildSessions(series, race, raceDate);
    const finalSession = [...sessions].reverse().find(session => /決勝|race/i.test(session.label || ''));
    if(!finalSession) return race.date;
    const match = String(finalSession.time || '').match(/(\d{1,2}):(\d{2})/);
    if(!match) return dateISO(finalSession.date);
    return `${dateISO(finalSession.date)}T${String(match[1]).padStart(2, '0')}:${match[2]}:00+09:00`;
  }

  function eventData(series, race, season){
    const url = pageUrl(series.id, race.round, season).href;
    const data = {
      '@type': 'SportsEvent',
      '@id': `${url}#event`,
      name: `${series.name} ${race.name}`,
      startDate: eventStart(series, race),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      url,
      description: `${seasonLabel(series, season)} ${series.name} ${roundLabel(race)}「${race.name}」。開催地は${race.circuit}です。`,
      location: {
        '@type': 'Place',
        name: race.circuit,
        address: {
          '@type': 'PostalAddress',
          addressCountry: countryCode(race.country)
        }
      },
      organizer: {
        '@type': 'Organization',
        name: series.name
      }
    };
    if(race.trackImage) data.image = new URL(race.trackImage, location.href).href;
    return data;
  }

  function writeStructuredData(data){
    let script = document.getElementById('seoStructuredData');
    if(!script){
      script = document.createElement('script');
      script.id = 'seoStructuredData';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  function update(series){
    const season = Number(typeof selectedSeason === 'undefined' ? new URLSearchParams(location.search).get('season') : selectedSeason) || new Date().getFullYear();
    const requestedRound = new URLSearchParams(location.search).get('round');
    const race = series && requestedRound !== null
      ? series.races.find(item => String(item.round) === requestedRound)
      : null;

    let title;
    let description;
    let canonical;
    let structuredData;

    if(race){
      const date = race.dateLabel || fmtDateJP(parseDate(race.date));
      title = `${race.name} 日程・開始時刻 | ${series.name} ${seasonLabel(series, season)} | ${SITE_NAME}`;
      description = `${series.name} ${roundLabel(race)}「${race.name}」は${date}に${race.circuit}で開催。決勝開始時刻とタイムスケジュールを日本時間で確認できます。`;
      canonical = pageUrl(series.id, race.round, season).href;
      structuredData = {'@context':'https://schema.org', ...eventData(series, race, season)};
    }else if(series){
      title = `${series.name} ${seasonLabel(series, season)} 日程・順位表 | ${SITE_NAME}`;
      description = `${seasonLabel(series, season)}の${series.name}全戦日程、次戦の決勝開始時刻、開催サーキット、ドライバー・チーム順位表を日本時間で確認できます。`;
      canonical = pageUrl(series.id, null, season).href;
      const races = series.races.filter(item => {
        const year = parseDate(item.date).getFullYear();
        return series.id === 'formulae' ? (year === season || year === season - 1) : year === season;
      });
      structuredData = {
        '@context':'https://schema.org',
        '@graph':[
          {
            '@type':'CollectionPage',
            '@id':`${canonical}#page`,
            name:title,
            description,
            url:canonical,
            isPartOf:{'@type':'WebSite', name:SITE_NAME, url:pageUrl().href}
          },
          {
            '@type':'ItemList',
            name:`${series.name} ${seasonLabel(series, season)} レース一覧`,
            itemListElement:races.map((item, index) => ({
              '@type':'ListItem',
              position:index + 1,
              url:pageUrl(series.id, item.round, season).href,
              item:eventData(series, item, season)
            }))
          }
        ]
      };
    }else{
      title = `${SITE_NAME} — モータースポーツ観戦カレンダー`;
      description = HOME_DESCRIPTION;
      canonical = pageUrl().href;
      structuredData = {
        '@context':'https://schema.org',
        '@type':'WebSite',
        '@id':`${canonical}#website`,
        name:SITE_NAME,
        alternateName:'レースカレンダー',
        url:canonical,
        inLanguage:'ja',
        description
      };
    }

    document.title = title;
    setNameMeta('description', description);
    setNameMeta('robots', 'index, follow, max-image-preview:large');
    setNameMeta('twitter:card', 'summary');
    setNameMeta('twitter:title', title);
    setNameMeta('twitter:description', description);
    setPropertyMeta('og:locale', 'ja_JP');
    setPropertyMeta('og:type', race ? 'article' : 'website');
    setPropertyMeta('og:site_name', SITE_NAME);
    setPropertyMeta('og:title', title);
    setPropertyMeta('og:description', description);
    setPropertyMeta('og:url', canonical);
    setCanonical(canonical);
    writeStructuredData(structuredData);
  }

  window.RaceSeo = {update, urlFor:(seriesId, round, season) => pageUrl(seriesId, round, season).href};
})();
