/* ホーム画面専用の表示処理 */
function upcomingRaces(){
  return SERIES.flatMap(series => series.races.map(race => {
    const dateObj = parseDate(race.date);
    return { ...race, series, dateObj, finalStart:raceFinalStart(series, race, dateObj) };
  })).filter(race => race.finalStart >= liveNow())
    .sort((a,b) => a.finalStart - b.finalStart);
}

function goToRace(seriesId, round){
  const series = SERIES.find(s => s.id === seriesId);
  const race = series?.races.find(r => String(r.round) === String(round));
  if(!race) return;
  viewYear = parseDate(race.date).getFullYear();
  viewMonth = parseDate(race.date).getMonth();
  showSeries(series);
  requestAnimationFrame(() => document.getElementById(`race-${series.id}-${race.round}`)?.scrollIntoView({behavior:'smooth', block:'center'}));
}

function homeCarVisual(series, className){
  if(series.carImage) return `<div class="${className}" aria-hidden="true"><img class="tinted-image" src="${series.carImage}" alt="" decoding="async" style="--image-filter:${imageFilter(series.color)};"></div>`;
  return `<div class="${className}" aria-hidden="true">${carSVG(series.carType, `var(${series.color})`)}</div>`;
}

function homeRaceUrl(item){
  return RaceSeo.urlFor(item.series.id, item.round, 2026);
}

function homeCountdownParts(item){
  const diff = Math.max(0, item.finalStart - liveNow());
  return [
    Math.floor(diff / 86400000),
    Math.floor((diff % 86400000) / 3600000),
    Math.floor((diff % 3600000) / 60000),
    Math.floor((diff % 60000) / 1000)
  ];
}

function homeRaceMarkup(item, featured){
  const days = Math.max(0, Math.ceil((item.finalStart - liveNow()) / 86400000));
  const style = `--home-color:var(${item.series.color})`;
  if(featured){
    const parts = homeCountdownParts(item);
    const labels = ['DAYS','HOURS','MINUTES','SECONDS'];
    const lights = Array.from({length:5}, (_, i) => `<div class="light${i < lightsForDays(days) ? ' on' : ''}"></div>`).join('');
    const sessions = buildSessions(item.series, item, item.dateObj);
    const sessionMarkup = `<div class="hero-sessions home-sessions" aria-label="タイムスケジュール"><span class="hero-sessions-title">TIME SCHEDULE</span>${sessions.map(session => `<div class="hero-session"><span>${session.label.replace('フリープラクティス', 'フリー走行')}</span><strong>${fmtDateJP(session.date)} ${String(session.time || '未定').replace(/\s*JST$/, '')}</strong></div>`).join('')}</div>`;
    return `<div class="home-featured-content" style="${style}"><div class="hero-eyebrow">NEXT UP — 次のレース</div><h2 class="hero-title">${countryFlag(item.country)} ${item.name}</h2><div class="hero-meta"><span class="series-tag">${item.series.name}</span> · Round ${item.round} · ${item.circuit} · ${fmtDateJP(item.dateObj)}</div><div class="lights" aria-hidden="true">${lights}</div><div class="countdown home-countdown">${parts.map((part, i) => `<div class="cd-block"><span data-home-countdown="${i}">${String(part).padStart(2,'0')}</span><label>${labels[i]}</label></div>`).join('')}</div>${sessionMarkup}<a class="race-link-btn featured-race-link" href="${homeRaceUrl(item)}" style="${style}">レースへ移動</a></div><div class="home-featured-track">${trackVisual(item, `var(${item.series.color})`, 760, item.series.color)}</div>${homeCarVisual(item.series, 'home-featured-car')}`;
  }
  return `<article class="upcoming-card" style="${style}"><div class="upcoming-when"><strong class="upcoming-days">${days}<small>日後</small></strong><span class="upcoming-date">${fmtDateJP(item.dateObj)}</span></div><div class="upcoming-track">${trackVisual(item, `var(${item.series.color})`, 56, item.series.color)}</div><div class="upcoming-series">${item.series.name} · Round ${item.round}</div><h3>${countryFlag(item.country)} ${item.name}</h3><p class="upcoming-circuit">${item.circuit}</p><a class="race-link-btn" href="${homeRaceUrl(item)}" style="${style}">レースへ移動</a>${homeCarVisual(item.series, 'upcoming-car')}</article>`;
}

function updateHomeCountdown(item){
  if(item.finalStart < liveNow()){
    renderHome();
    return;
  }
  homeCountdownParts(item).forEach((part, index) => {
    const element = document.querySelector(`[data-home-countdown="${index}"]`);
    if(element) element.textContent = String(part).padStart(2, '0');
  });
  const days = Math.max(0, Math.ceil((item.finalStart - liveNow()) / 86400000));
  paintLights('#homeFeatured', lightsForDays(days), item.series.color);
}

function renderHome(){
  document.body.classList.remove('series-active');
  if(countdownTimer){ clearInterval(countdownTimer); countdownTimer = null; }
  const races = upcomingRaces();
  const featured = document.getElementById('homeFeatured');
  const upcoming = document.getElementById('homeUpcoming');
  if(!races.length){ featured.innerHTML = '<div class="home-featured-content"><h2>シーズン終了</h2><p class="hero-meta">このシーズンの予定レースはありません。</p></div>'; upcoming.innerHTML = ''; return; }
  const followingRaces = races.slice(1, 6);
  featured.style.setProperty('--home-color', `var(${races[0].series.color})`);
  featured.innerHTML = homeRaceMarkup(races[0], true);
  upcoming.innerHTML = followingRaces.map(race => homeRaceMarkup(race, false)).join('');
  document.querySelector('.home-upcoming-section').hidden = followingRaces.length === 0;
  updateHomeCountdown(races[0]);
  countdownTimer = setInterval(() => updateHomeCountdown(races[0]), 1000);
}
