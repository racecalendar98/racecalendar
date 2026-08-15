/* ==========================================================================
   コースダイアグラム自動生成
   --------------------------------------------------------------------------
   実際のサーキット図面ではなく「サーキット名から機械的に作った、
   それっぽい抽象的なループ形状」を毎回同じ形で描くための仕組み。
   同じサーキット名なら何度描いても同じ形になる（＝名前が「種」になっている）。
   流れ： サーキット名 → hashStr()で数値化 → mulberry32()で疑似乱数生成器を作る
         → trackPoints()でループ上の点を作る → catmullRomPath()で滑らかな
         曲線につなぐ → trackSVG()でSVG文字列として組み立てる
   ========================================================================== */

/* 文字列を1つの整数値に変換する（同じ文字列なら常に同じ値になる簡易ハッシュ関数） */
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++){ h = (h*31 + s.charCodeAt(i)) | 0; } return h; }

/* 整数の種(seed)から、0〜1の疑似乱数を返す関数を作る（mulberry32という軽量アルゴリズム）。
   同じseedを渡せば、呼び出すたびに同じ乱数列が再現される＝サーキットごとに形が固定される */
function mulberry32(seed){
  return function(){
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* サーキット名(seed)を元に、中心(cx,cy)の周りにランダムな半径でループ状の点を7〜9個並べる */
function trackPoints(seed, cx, cy, baseR){
  const rand = mulberry32(hashStr(seed));
  const n = 7 + Math.floor(rand()*3);
  const pts = [];
  for(let i=0;i<n;i++){
    const angle = (i/n) * Math.PI*2;
    const r = baseR * (0.55 + rand()*0.45);
    pts.push([cx + Math.cos(angle)*r, cy + Math.sin(angle)*r*0.72]);
  }
  return pts;
}

/* 点の並びを、カクカクな直線ではなく滑らかな曲線（Catmull-Rom曲線）でつないだ
   SVGのpath用の "d" 属性文字列を作る */
function catmullRomPath(pts){
  const n = pts.length;
  const d = [`M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`];
  for(let i=0;i<n;i++){
    const p0 = pts[(i-1+n)%n], p1 = pts[i], p2 = pts[(i+1)%n], p3 = pts[(i+2)%n];
    const c1x = p1[0] + (p2[0]-p0[0])/6, c1y = p1[1] + (p2[1]-p0[1])/6;
    const c2x = p2[0] - (p3[0]-p1[0])/6, c2y = p2[1] - (p3[1]-p1[1])/6;
    d.push(`C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`);
  }
  d.push('Z');
  return d.join(' ');
}

/* コース図のSVGを1個の文字列として組み立てる（呼び出し側はこの関数だけ使えばOK）。
   seed: サーキット名（形を決める種）, color: 線の色, size: 表示サイズ(px) */
function trackSVG(seed, color, size){
  size = size || 44;
  const pts = trackPoints(seed, size/2, size/2, size*0.38);
  const path = catmullRomPath(pts);
  const start = pts[0]; /* スタート/フィニッシュ地点として最初の点に丸印を打つ */
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true">
    <path d="${path}" fill="none" stroke="${color}" stroke-width="${(size*0.045).toFixed(1)}" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${start[0].toFixed(1)}" cy="${start[1].toFixed(1)}" r="${(size*0.05).toFixed(1)}" fill="${color}"/>
  </svg>`;
}

/* コース図の表示を1つに決める窓口関数。
   レースデータに trackImage（画像ファイルへのパス）が指定されていれば、
   自動生成のコース図の代わりに、その画像をテーマカラーで表示する。
   指定が無ければ、これまで通り trackSVG() で自動生成する。
   race: レースオブジェクト（trackImageの有無を見る）, color: 色, size: 表示サイズ(px) */
/* 黒いPNGを各シリーズのテーマカラーに近い色へ変換するフィルター。
   CSSマスクではなく通常の<img>を使うため、file:// で開いたChromeでも表示できる。 */
const IMAGE_FILTERS = {
  '--red':    'brightness(0) saturate(100%) invert(42%) sepia(97%) saturate(3459%) hue-rotate(344deg) brightness(103%) contrast(102%)',
  '--blue':   'brightness(0) saturate(100%) invert(62%) sepia(92%) saturate(1673%) hue-rotate(172deg) brightness(103%) contrast(101%)',
  '--amber':  'brightness(0) saturate(100%) invert(75%) sepia(87%) saturate(719%) hue-rotate(351deg) brightness(104%) contrast(101%)',
  '--orange': 'brightness(0) saturate(100%) invert(66%) sepia(82%) saturate(772%) hue-rotate(330deg) brightness(104%) contrast(101%)',
  '--teal':   'brightness(0) saturate(100%) invert(75%) sepia(33%) saturate(1105%) hue-rotate(123deg) brightness(91%) contrast(101%)',
  '--lime':   'brightness(0) saturate(100%) invert(91%) sepia(95%) saturate(730%) hue-rotate(28deg) brightness(109%) contrast(103%)'
};

function imageFilter(colorVariable){
  return IMAGE_FILTERS[colorVariable] || 'none';
}

function trackVisual(race, color, size, colorVariable){
  size = size || 44;
  if(race.trackImage){
    const alt = `${race.circuit} コース図`.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    const loading = size >= 500 ? 'eager' : 'lazy';
    const priority = size >= 500 ? ' fetchpriority="high"' : '';
    return `<img class="track-icon-img tinted-image" src="${race.trackImage}" alt="${alt}" width="${size}" height="${size}" loading="${loading}" decoding="async"${priority} style="width:${size}px; height:${size}px; --image-filter:${imageFilter(colorVariable || activeSeries.color)};">`;
  }
  return trackSVG(race.circuit, color, size);
}

/* ==========================================================================
   車シルエット生成（ヒーロー背景に薄く表示するイラスト）
   --------------------------------------------------------------------------
   実際の車の写真やチームのロゴは使わず、著作権に配慮したオリジナルの
   線画シルエットを type ごとに3種類だけ用意している。
     'openwheel' … F1／SUPER FORMULA／Formula E などの単座レーシングカー
     'rally'     … WRC のラリーカー（ルーフのスクープ・スポットライト付き）
     それ以外      … WEC／SUPER GT などの耐久・GTカー（既定値）
   どのシリーズがどの type を使うかは、SERIES データの carType で指定する。
   ========================================================================== */
function carSVG(type, color){
  if(type === 'openwheel'){
    return `<svg viewBox="0 0 420 160" aria-hidden="true">
      <g fill="${color}" stroke="none">
        <path d="M20 68 L70 58 L70 48 L20 54 Z"/>
        <path d="M46 68 L46 96 L52 96 L52 68 Z"/>
        <path d="M46 100 C 62 82, 95 80, 125 84 C 165 90, 195 62, 235 60 C 268 58, 288 72, 308 80 C 330 87, 355 92, 382 97 L382 110 C 342 114, 300 114, 258 114 C 210 114, 155 110, 100 110 C 76 110, 55 106, 46 100 Z"/>
        <path d="M372 120 L402 124 L402 132 L372 128 Z"/>
      </g>
      <path d="M196 60 C 202 40, 228 38, 234 58" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="96" cy="124" r="30" fill="none" stroke="${color}" stroke-width="7"/>
      <circle cx="96" cy="124" r="9" fill="${color}"/>
      <circle cx="340" cy="124" r="26" fill="none" stroke="${color}" stroke-width="7"/>
      <circle cx="340" cy="124" r="8" fill="${color}"/>
    </svg>`;
  }
  if(type === 'rally'){
    return `<svg viewBox="0 0 420 160" aria-hidden="true">
      <g fill="${color}" stroke="none">
        <path d="M58 106 C 63 76, 88 60, 118 58 L158 58 C 173 44, 204 39, 230 42 L262 58 L340 60 C 360 63, 375 76, 380 96 L380 112 C 340 118, 300 118, 260 118 L140 118 C 100 118, 68 115, 58 106 Z"/>
        <rect x="184" y="44" width="28" height="11" rx="2"/>
        <circle cx="347" cy="72" r="6"/>
        <circle cx="364" cy="77" r="6"/>
        <rect x="52" y="112" width="22" height="15"/>
        <rect x="362" y="112" width="22" height="15"/>
      </g>
      <circle cx="118" cy="124" r="31" fill="none" stroke="${color}" stroke-width="8"/>
      <circle cx="332" cy="124" r="31" fill="none" stroke="${color}" stroke-width="8"/>
    </svg>`;
  }
  /* endurance / GT / prototype (default) */
  return `<svg viewBox="0 0 420 160" aria-hidden="true">
    <g fill="${color}" stroke="none">
      <path d="M50 100 C 60 70, 100 55, 150 52 C 190 50, 210 40, 240 40 C 270 40, 285 55, 310 60 C 340 66, 370 78, 390 96 L390 112 C 350 118, 300 120, 250 120 C 190 120, 130 120, 80 118 C 65 116, 55 110, 50 100 Z"/>
      <path d="M30 55 L72 55 L72 45 L35 45 Z"/>
      <rect x="48" y="56" width="6" height="36"/>
    </g>
    <path d="M64 92 C 92 74, 130 68, 168 70 C 188 71, 200 58, 220 56" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="112" cy="124" r="28" fill="none" stroke="${color}" stroke-width="7"/>
    <circle cx="330" cy="124" r="28" fill="none" stroke="${color}" stroke-width="7"/>
  </svg>`;
}

/* ==========================================================================
   データ本体：SERIES
   --------------------------------------------------------------------------
   レースシリーズごとのデータ（レース日程・セッションのひな形・順位表）は
   series-f1.js, series-wec.js, series-supergt.js, series-superformula.js,
   series-formulae.js のようにシリーズ単位でファイルを
   分割してあり、index.html でこの script.js より先に読み込まれる。
   各データファイルは読み込まれると window.SERIES_DATA 配列に自分のシリーズを
   push する。ここではその配列をそのまま SERIES として使う。

   新しいシリーズを追加/削除したい時は series-◯◯.js を1つ追加/削除し、
   index.html の <script> 読み込み順にも追加/削除すればよい。

   各シリーズの持ち物:
     id             … 内部で使う識別子
     name           … サイドバーや見出しに表示される正式名称
     color          … テーマカラー（:root で定義したCSS変数名）
     carType        … ヒーロー背景の車シルエットの種類（'openwheel'/'rally'/その他）
                      carImageが指定されていればcarTypeより優先される
     carImage       … （任意）ヒーロー背景に使う実際の画像ファイル名。
                      指定があれば carSVG() の自動生成シルエットの代わりに
                      この画像をそのまま（元の色・透明部分そのままで）表示する
     sessionTemplate… レースに sessions が無い場合に使う汎用スケジュールのひな形
                      （無いシリーズは null。buildSessions()が参照する）
     standings      … 順位表データ（renderStandings()が参照する）
     races[]        … レースの配列。各レースは以下を持つ:
       round    … 第◯戦（表示用の番号）
       name     … レース名
       circuit  … サーキット名（コース図の形を決める種にも使う）
       country  … 国旗の絵文字
       date     … 開催日 "YYYY-MM-DD"
       trackImage … （任意）コース図に使う実際の画像ファイルへのパス。
                  指定があれば trackSVG() の自動生成コース図の代わりに
                  この画像をそのまま（元の色・透明部分そのままで）表示する
       sessions … （任意）練習走行〜決勝までの正確な日時を個別指定する配列。
                  指定が無ければ sessionTemplate から自動生成される。
   ========================================================================== */
const SERIES = window.SERIES_DATA || [];

/* もしSERIESが空（＝series-◯◯.jsのどれかが読み込めていない）なら、
   画面を「読み込み中...」のまま固まらせず、原因が分かるメッセージを表示する。
   （よくある原因：series-◯◯.js のファイル名を変えてしまった／
   　index.htmlと同じフォルダに置かれていない） */
if(SERIES.length === 0){
  console.error('レースデータが読み込まれていません。series-f1.js などが index.html と同じフォルダにあるか確認してください。');
  document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('heroRaceName');
    if(hero) hero.textContent = 'データを読み込めませんでした';
    const meta = document.getElementById('heroMeta');
    if(meta) meta.textContent = 'series-f1.js などのデータファイルが index.html と同じフォルダにあるか確認してください。';
  });
}

/* ==========================================================================
   アプリの「現在の状態」を持つ変数
   ========================================================================== */
let activeSeries = SERIES[0];      // 現在サイドバーで選択中のシリーズ（初期値はF1）
let standingsMode = 'drivers';
let viewYear = new Date().getFullYear(), viewMonth = new Date().getMonth(); // 初期表示はアクセス時点の現在月
let currentView = 'home';           // 'home' または 'series'
let selectedSeason = Number(new URLSearchParams(window.location.search).get('season')) || 2027;

/* このアプリ上での「今日」を固定値として扱う（2026年7月12日）。
   本物の現在時刻と紐づけつつ、常にこの日付を基準に日数計算やカウントダウンを行う */
const TODAY = new Date();
const bootReal = new Date(); // ページを開いた瞬間の本物の時刻（liveNow()の基準点）

/* 「アプリ内の現在時刻」を返す＝ TODAY を起点に、ページを開いてからの
   経過時間をそのまま足した時刻。時計表示やカウントダウンの秒針を動かすのに使う */
function liveNow(){ return new Date(TODAY.getTime() + (new Date() - bootReal)); }

/* ==========================================================================
   サイドバーのシリーズ切替ボタンを描画する
   SERIES配列の中身を1つずつボタンにして #seriesNav に流し込む。
   ボタンをクリックすると activeSeries を切り替え、テーマカラー(--accent)を
   更新した上で、ヒーロー／カレンダー／一覧／順位表をすべて再描画する。
   ========================================================================== */
const seriesNav = document.getElementById('seriesNav');
const seasonSelect = document.getElementById('seasonSelect');

function availableSeasons(){
  return [2027, 2026];
}

function isRaceInSelectedSeason(race){
  const raceDate = parseDate(race.date);
  if(activeSeries?.id === 'formulae'){
    const seasonStart = new Date(selectedSeason - 1, 10, 1);
    const nextSeasonStart = new Date(selectedSeason, 10, 1);
    return raceDate >= seasonStart && raceDate < nextSeasonStart;
  }
  return raceDate.getFullYear() === selectedSeason;
}

function renderSeasonPicker(){
  const seasons = availableSeasons();
  if(!seasons.includes(selectedSeason)) selectedSeason = seasons[0] || TODAY.getFullYear();
  viewYear = selectedSeason;
  const seasonLabel = year => activeSeries?.id === 'formulae'
    ? `${year - 1}-${String(year).slice(-2)}年`
    : `${year}年`;
  seasonSelect.innerHTML = seasons.map(year => `<option value="${year}">${seasonLabel(year)}</option>`).join('');
  seasonSelect.value = String(selectedSeason);
}

seasonSelect.addEventListener('change', () => {
  selectedSeason = Number(seasonSelect.value);
  if(selectedSeason === 2026){
    location.href = new URL(`../index.html?season=2026&series=${encodeURIComponent(activeSeries.id)}`, location.href).href;
    return;
  }
  viewYear = selectedSeason;
  viewMonth = 0;
  if(currentView === 'home') renderHome();
  else { renderHero(); renderCalendar(); renderList(); renderStandings(); }
});

function renderNav(){
  seriesNav.innerHTML = '';
  const homeBtn = document.createElement('a');
  homeBtn.className = 'series-btn home-nav-btn' + (currentView === 'home' ? ' active' : '');
  homeBtn.href = new URL('../index.html', location.href).href;
  homeBtn.style.setProperty('--dot-color', 'var(--text)');
  homeBtn.innerHTML = '<span class="dot"></span><span>ホーム</span>';
  homeBtn.addEventListener('click', event=>{
    if(event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    showHome();
    closeSidebar();
  });
  seriesNav.appendChild(homeBtn);
  SERIES.forEach(s=>{
    const btn = document.createElement('a');
    btn.className = 'series-btn' + (currentView === 'series' && s.id === activeSeries.id ? ' active' : '');
    btn.href = RaceSeo.urlFor(s.id, null, selectedSeason);
    btn.style.setProperty('--dot-color', `var(${s.color})`);
    btn.innerHTML = `<span class="dot"></span><span>${s.name}</span><span class="count">${s.races.length}</span>`;
    btn.addEventListener('click', event=>{
      if(event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      history.pushState({}, '', btn.href);
      showSeries(s);
      closeSidebar();
    });
    seriesNav.appendChild(btn);
  });
}

/* ==========================================================================
   ヒーローセクション（次のレース情報＋カウントダウン）
   ========================================================================== */

/* "2026-03-08" のような文字列をDateオブジェクトに変換する */
function parseDate(str){ const [y,m,d] = str.split('-').map(Number); return new Date(y, m-1, d); }
/* Dateオブジェクトを「2026年3月8日」のような日本語表記の文字列にする */
function fmtDateJP(d){ return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`; }
/* ISO形式の国コード（BE / JPなど）を国旗へ変換する。すでに国旗ならそのまま返す。 */
function countryFlag(country){
  const code = String(country || '').trim().toUpperCase();
  if(!/^[A-Z]{2}$/.test(code)) return country || '';
  return String.fromCodePoint(...[...code].map(letter => 0x1F1E6 + letter.charCodeAt(0) - 65));
}
function raceRoundText(race){
  return typeof race.round === 'number' ? `Round ${race.round}` : String(race.round);
}

/* カウントダウンは開催日ではなく、決勝のスタート時刻を終点にする。
   時刻がまだ発表されていない場合だけ、従来どおり開催日の開始時刻を使う。 */
function raceFinalStart(series, race, raceDateObj = parseDate(race.date)){
  const sessions = buildSessions(series, race, raceDateObj);
  const finalSession = [...sessions].reverse().find(session => /決勝|race/i.test(session.label || ''));
  if(!finalSession) return raceDateObj;
  const finalStart = new Date(finalSession.date);
  const time = String(finalSession.time || '').match(/(\d{1,2}):(\d{2})/);
  if(!time) return raceDateObj;
  finalStart.setHours(Number(time[1]), Number(time[2]), 0, 0);
  return finalStart;
}

/* 選択中シリーズの中から「TODAY以降で最も近いレース」を1つ探して返す。
   該当が無ければ（シーズン終了していれば）null を返す */
function nextRace(){
  return activeSeries.races.map(r=>{
    const dateObj = parseDate(r.date);
    return {...r, dateObj, finalStart:raceFinalStart(activeSeries, r, dateObj)};
  }).filter(r=>r.finalStart >= liveNow() && isRaceInSelectedSeason(r)).sort((a,b)=>a.finalStart - b.finalStart)[0] || null;
}

function showSeries(series){
  activeSeries = series;
  currentView = 'series';
  document.body.classList.add('series-active');
  document.documentElement.style.setProperty('--accent', `var(${series.color})`);
  document.getElementById('homeView').hidden = true;
  document.getElementById('seriesView').hidden = false;
  renderSeasonPicker(); renderNav(); renderHero(); renderCalendar(); renderList(); renderStandings();
  RaceSeo.update(series);
  window.scrollTo({top:0, behavior:'smooth'});
}

function showHome(){
  /* ホームは年度ごとに分けず、常に共通トップで直近レースを表示する。 */
  location.href = new URL('../index.html', location.href).href;
}

/* スタートランプはレース7日前から5灯すべて点灯。
   以降は1週間離れるごとに1灯ずつ減らし、5週間以上前は1灯だけ点灯する。 */
function lightsForDays(days){
  if(days <= 7) return 5;
  if(days <= 14) return 4;
  if(days <= 21) return 3;
  if(days <= 28) return 2;
  return 1;
}
let countdownTimer = null; // setInterval のIDを保持（シリーズ切替のたびに前のタイマーを止めるため）

/* 選択中シリーズの次レースのスタートランプを点灯する。 */
function setLights(count){
  paintLights('#hero', count, activeSeries.color);
}

/* 指定エリアのランプを、各シリーズのテーマカラーで確実に点灯させる。
   7日前から5灯すべてを点灯状態にし、レース当日も消えない。 */
function paintLights(selector, count, colorVariable){
  document.querySelectorAll(`${selector} .light`).forEach((l,i)=>{
    l.classList.remove('on','go');
    l.style.removeProperty('background-color');
    l.style.removeProperty('box-shadow');
    if(i < count){
      l.classList.add('on');
      l.style.backgroundColor = `var(${colorVariable})`;
      l.style.boxShadow = `0 0 18px 2px var(${colorVariable})`;
    }
  });
}

/* ヒーロー背景の車シルエットを、選択中シリーズのcarTypeで描き直す。
   carImage が指定されているシリーズ（例: F1）は、自動生成のSVGシルエットの
   代わりに、その画像をテーマカラーで表示する。
   透明部分をマスクとして使うため、透明PNGが最もきれいに表示される。 */
function renderHeroCar(){
  const car = document.getElementById('heroCar');
  const colorVar = `var(${activeSeries.color})`;
  if(activeSeries.carImage){
    car.innerHTML = `<img class="hero-car-img tinted-image" src="${activeSeries.carImage}" alt="" style="--image-filter:${imageFilter(activeSeries.color)};">`;
  } else {
    car.innerHTML = carSVG(activeSeries.carType, colorVar);
  }
}

/* 次のレースのコース図を、文字の背後にテーマカラーで重ねる。 */
function renderHeroTrack(race){
  const track = document.getElementById('heroTrack');
  track.innerHTML = race ? trackVisual(race, `var(${activeSeries.color})`, 760, activeSeries.color) : '';
}

/* ヒーローセクション全体を再描画する（シリーズ切替のたびに呼ばれる）。
   ・次のレースが無ければ「シーズン終了」表示にする
   ・あれば、レース名・開催情報を表示し、1秒ごとに残り時間を
     更新するカウントダウン(tick)を開始する */
function renderHero(){
  renderHeroCar();
  const race = nextRace();
  renderHeroTrack(race);
  const nameEl = document.getElementById('heroRaceName');
  const metaEl = document.getElementById('heroMeta');
  const sessionsEl = document.getElementById('heroSessions');
  if(!race){
    nameEl.textContent = 'シーズン終了';
    metaEl.textContent = `${activeSeries.name} — 今シーズンの残りレースはありません`;
    sessionsEl.innerHTML = '';
    setLights(0);
    ['cdDays','cdHours','cdMins','cdSecs'].forEach(id=>document.getElementById(id).textContent='--');
    if(countdownTimer) clearInterval(countdownTimer);
    return;
  }
  nameEl.textContent = `${countryFlag(race.country)} ${race.name}`;
  metaEl.innerHTML = `<span class="series-tag">${activeSeries.name}</span> · ${raceRoundText(race)} · ${race.circuit} · ${race.dateLabel || fmtDateJP(race.dateObj)}`;
  const sessions = buildSessions(activeSeries, race, race.dateObj);
  sessionsEl.innerHTML = `<span class="hero-sessions-title">TIME SCHEDULE</span>${sessions.map(session => `<div class="hero-session"><span>${session.label}</span><strong>${fmtDateJP(session.date)} ${session.time || '未定'}</strong></div>`).join('')}`;
  if(countdownTimer) clearInterval(countdownTimer);
  function tick(){
    const diff = race.finalStart - liveNow();
    const d = Math.max(0, Math.floor(diff / 86400000));
    const h = Math.max(0, Math.floor((diff % 86400000) / 3600000));
    const m = Math.max(0, Math.floor((diff % 3600000) / 60000));
    const s = Math.max(0, Math.floor((diff % 60000) / 1000));
    document.getElementById('cdDays').textContent = String(d).padStart(2,'0');
    document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cdMins').textContent = String(m).padStart(2,'0');
    document.getElementById('cdSecs').textContent = String(s).padStart(2,'0');
    setLights(lightsForDays(d));
  }
  tick();
  countdownTimer = setInterval(tick, 1000);
}

/* ==========================================================================
   月間カレンダー
   ========================================================================== */
const DOW = ['月','火','水','木','金','土','日']; // カレンダーの曜日見出し（月曜始まり）

/* 指定した年月日(y,m,d)に、選択中シリーズのレースがあればそのレース情報を返す */
function raceForDate(y,m,d){
  const key = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  return activeSeries.races.find(r=>r.date === key && isRaceInSelectedSeason(r));
}

/* viewYear/viewMonth の月のカレンダーを丸ごと作り直して #calGrid に流し込む。
   開催日のマスだけ .race-day クラスを付けてクリック可能にし、
   クリック（またはEnterキー）でそのレースの詳細モーダルを開く */
function renderCalendar(){
  document.getElementById('monthLabel').textContent = `${viewYear}年${viewMonth+1}月`;
  const grid = document.getElementById('calGrid');
  grid.innerHTML = '';
  DOW.forEach(d=>{ const el = document.createElement('div'); el.className='cal-dow'; el.textContent=d; grid.appendChild(el); });
  const firstDay = new Date(viewYear, viewMonth, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(viewYear, viewMonth+1, 0).getDate();
  for(let i=0;i<startOffset;i++){ const el=document.createElement('div'); el.className='cal-day empty'; grid.appendChild(el); }
  for(let d=1; d<=daysInMonth; d++){
    const el = document.createElement('div');
    const race = raceForDate(viewYear, viewMonth, d);
    el.className = 'cal-day' + (race ? ' race-day' : '');
    const isToday = viewYear===TODAY.getFullYear() && viewMonth===TODAY.getMonth() && d===TODAY.getDate();
    if(isToday) el.classList.add('today');
    el.textContent = d;
    if(race){
      el.tabIndex = 0;
      el.setAttribute('role','button');
      el.setAttribute('aria-label', `${race.name} — ${race.circuit}`);
      el.addEventListener('click', ()=>openRaceModal(race));
      el.addEventListener('keydown', e=>{ if(e.key==='Enter') openRaceModal(race); });
    }
    grid.appendChild(el);
  }
}
/* 前月／次月ボタン：viewMonth を増減させ、12を超えたら年を繰り上げ/繰り下げてから再描画 */
document.getElementById('prevMonth').addEventListener('click', ()=>{ viewMonth--; if(viewMonth<0){viewMonth=11; viewYear--;} renderCalendar(); });
document.getElementById('nextMonth').addEventListener('click', ()=>{ viewMonth++; if(viewMonth>11){viewMonth=0; viewYear++;} renderCalendar(); });

/* ==========================================================================
   シーズンスケジュール一覧（レースカード）
   選択中シリーズの全レースをカード形式で並べる。
   各カードには「第◯戦ラベル」「コース図」「レース名/サーキット名」
   「開催日」を表示し、クリックで詳細モーダルを開く。
   決勝開始時刻が現在時刻より前のレースは .past クラスで薄く表示する。
   ========================================================================== */
function renderList(){
  document.getElementById('listTitle').textContent = `${activeSeries.name} シーズンスケジュール`;
  const list = document.getElementById('raceList');
  list.innerHTML = '';
  activeSeries.races.filter(isRaceInSelectedSeason).forEach(r=>{
    const d = parseDate(r.date);
    const isPast = raceFinalStart(activeSeries, r, d) < liveNow();
    const card = document.createElement('a');
    card.id = `race-${activeSeries.id}-${r.round}`;
    card.className = 'race-card' + (isPast ? ' past' : '');
    card.href = RaceSeo.urlFor(activeSeries.id, r.round, selectedSeason);
    card.setAttribute('aria-label', `${r.name} の詳細を見る`);
    card.innerHTML = `
      <div class="race-round"><strong>${typeof r.round === 'number' ? String(r.round).padStart(2,'0') : r.round}</strong>${typeof r.round === 'number' ? 'ROUND' : 'EVENT'}</div>
      <div class="race-track">${trackVisual(r, `var(${activeSeries.color})`, 40)}</div>
      <div class="race-info">
        <h3>${countryFlag(r.country)} ${r.name}</h3>
        <div class="circuit">${r.circuit}</div>
      </div>
      <div class="race-date">${r.dateLabel || fmtDateJP(d)}</div>
    `;
    card.addEventListener('click', event=>{
      if(event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openRaceModal(r);
    });
    list.appendChild(card);
  });
}

/* ==========================================================================
   順位表
   STANDINGSデータから選択中シリーズ分だけ取り出し、順位・名前・チーム・
   ポイントの行として並べる。1位の行だけゴールドカラーで強調する。
   ========================================================================== */
function renderStandings(){
  const isTeamMode = standingsMode === 'teams';
  const isManufacturerMode = isTeamMode && Array.isArray(activeSeries.manufacturerStandings);
  const modeLabel = isManufacturerMode ? 'マニュファクチャラーズ / チーム' : (isTeamMode ? 'チーム' : 'ドライバーズ');
  document.querySelector('[data-standings-mode="teams"]').textContent = activeSeries.manufacturerStandings ? 'マニュファクチャラーズ / チーム' : 'チーム';
  document.getElementById('standingsTitle').textContent = `${activeSeries.name} ${modeLabel}ランキング`;
  document.getElementById('standingsNote').textContent = isManufacturerMode
    ? activeSeries.manufacturerStandingsNote
    : (isTeamMode ? '2027年シーズンのランキングは、開幕後に掲載します。' : (activeSeries.standingsNote || '2027年シーズンのランキングは、開幕後に掲載します。'));
  const table = document.getElementById('standingsTable');
  table.innerHTML = '';
  if(selectedSeason === 2027){
    document.getElementById('standingsNote').textContent = '2027年シーズンのランキングは、開幕後に掲載します。';
    return;
  }
  const groups = new Map();
  const sourceRows = isTeamMode ? (activeSeries.teamStandings || buildTeamStandings(activeSeries.standings || [])) : (activeSeries.standings || []);
  sourceRows.forEach(row => {
    const className = row.class || ((row.team || '').match(/([A-Za-z0-9-]+\s*クラス)/)?.[1]) || '総合';
    if(!groups.has(className)) groups.set(className, []);
    groups.get(className).push(row);
  });
  groups.forEach((rows, className) => {
    const section = document.createElement('section');
    section.className = 'standings-class';
    section.innerHTML = `<h3>${className}</h3>`;
    combineCrewStandings(rows).sort((a,b)=>(b.points-a.points) || (a.pos-b.pos)).forEach((row, index)=>{
      const el = document.createElement('div');
      el.className = 'standings-row' + (index===0 ? ' top1' : '');
      const drivers = isTeamMode ? row.name : (row.drivers || row.name);
      const secondary = isTeamMode && activeSeries.teamStandings ? getTeamDrivers(row) : row.team;
      el.innerHTML = `<span class="pos">${index + 1}</span><div><div class="driver"><span>${drivers}</span></div><div class="team">${secondary || ''}</div></div><span class="pts">${row.points} pts</span>`;
      section.appendChild(el);
    });
    table.appendChild(section);
  });
}

function getTeamDrivers(teamRow){
  if(!teamRow.car) return '';
  const drivers = [teamRow.teamDrivers, ...(activeSeries.standings || [])
    .filter(row => row.class === teamRow.class && row.car === teamRow.car)
    .map(row => row.drivers || row.name)
  ].filter(Boolean);
  return [...new Set(drivers)].join(' / ');
}

function buildTeamStandings(rows){
  const teams = new Map();
  combineCrewStandings(rows).forEach(row => {
    const className = row.class || ((row.team || '').match(/([A-Za-z0-9-]+\s*クラス)/)?.[1]) || '総合';
    const key = `${className}-${row.team}`;
    const current = teams.get(key) || { class: className, name: row.team, team: '', points: 0, _drivers: [] };
    current.points += Number(row.points) || 0;
    const drivers = row.drivers || row.name;
    if(drivers) current._drivers.push(drivers);
    teams.set(key, current);
  });
  return [...teams.values()].map(({_drivers, ...team}) => ({
    ...team,
    team: [...new Set(_drivers)].join(' / ')
  }));
}

function combineCrewStandings(rows){
  const grouped = new Map();
  rows.forEach(row => {
    const key = row.car ? `${row.class || ''}-${row.car}-${row.pos}-${row.points}` : `single-${row.name}`;
    const existing = grouped.get(key);
    if(!existing){
      grouped.set(key, {...row, drivers: row.drivers || row.name});
      return;
    }
    const names = `${existing.drivers} / ${row.drivers || row.name}`.split(' / ');
    existing.drivers = [...new Set(names)].join(' / ');
    existing.points = Math.max(existing.points, row.points);
    existing.pos = Math.min(existing.pos, row.pos);
  });
  return [...grouped.values()];
}

document.querySelectorAll('[data-standings-mode]').forEach(button => {
  button.addEventListener('click', () => {
    standingsMode = button.dataset.standingsMode;
    document.querySelectorAll('[data-standings-mode]').forEach(item => item.classList.toggle('active', item === button));
    renderStandings();
  });
});


/* ==========================================================================
   レース詳細モーダル
   ========================================================================== */
let lastFocusedEl = null; // モーダルを開く直前にフォーカスされていた要素（閉じた時に戻す用）

/* そのレースの「練習走行〜決勝」までのセッション一覧を組み立てる。
   優先順位：
     1. レースデータ自身に sessions（個別の正確な日時）があればそれを使う（例: F1）
     2. 無ければ series.sessionTemplate（/data/series-*.js 内で定義）から、
        決勝日(raceDateObj)を基準にした日数ズレ(dayOffset)で日付を計算する */
function buildSessions(series, race, raceDateObj){
  if(race.sessions){
    return race.sessions.map(s=>({ label:s.label, date:parseDate(s.date), time:s.time }));
  }
  const tmpl = series.sessionTemplate || [{label:'決勝（Race）', dayOffset:0, time:'14:00'}];
  return tmpl.map(t=>{
    const d = new Date(raceDateObj);
    d.setDate(d.getDate() + t.dayOffset);
    return { label:t.label, date:d, time:t.time };
  });
}

/* モーダルを開いて、指定したレースの詳細（コース図・レース名・セッション日程）を表示する。
   カレンダーの開催日クリック／スケジュールカードクリックの両方から呼ばれる */
function openRaceModal(race){
  const raceUrl = RaceSeo.urlFor(activeSeries.id, race.round, selectedSeason);
  if(new URLSearchParams(location.search).get('round') !== String(race.round)) history.pushState({}, '', raceUrl);
  RaceSeo.update(activeSeries);
  lastFocusedEl = document.activeElement;
  const d = parseDate(race.date);
  const sessions = buildSessions(activeSeries, race, d);
  document.getElementById('modalTrack').innerHTML = trackVisual(race, `var(${activeSeries.color})`, 88);
  document.getElementById('modalRaceName').textContent = `${countryFlag(race.country)} ${race.name}`;
  document.getElementById('modalSub').textContent = `${activeSeries.name} · ${raceRoundText(race)} · ${race.circuit}`;
  const list = document.getElementById('modalSessions');
  list.innerHTML = '';
  sessions.forEach(s=>{
    const row = document.createElement('div');
    row.className = 'session-row';
    row.innerHTML = `<span class="label">${s.label}</span><span class="time">${fmtDateJP(s.date)} ${s.time}</span>`;
    list.appendChild(row);
  });
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('modalClose').focus();
}
/* モーダルを閉じて、開く前にフォーカスされていた要素にフォーカスを戻す（キーボード操作対応） */
function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  if(lastFocusedEl) lastFocusedEl.focus();
}
document.getElementById('modalClose').addEventListener('click', closeModal);      // ✕ボタン
document.getElementById('modalOverlay').addEventListener('click', e=>{ if(e.target.id === 'modalOverlay') closeModal(); }); // 背景クリックで閉じる
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeModal(); }); // Escキーで閉じる

/* ブラウザの「戻る／進む」でも、URLに対応するシリーズとレースを復元する。 */
window.addEventListener('popstate', ()=>{
  const params = new URLSearchParams(location.search);
  const season = Number(params.get('season'));
  if(season) selectedSeason = season;
  const series = SERIES.find(item => item.id === params.get('series'));
  closeModal();
  if(!series){
    showHome();
    return;
  }
  showSeries(series);
  const race = series.races.find(item => String(item.round) === params.get('round'));
  if(race) requestAnimationFrame(() => openRaceModal(race));
});

/* ================= Clock ================= */
/* サイドバー下部の現在時刻表示を1秒ごとに更新する */
function renderClock(){
  const n = liveNow();
  document.getElementById('clock').textContent = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
}
setInterval(renderClock, 1000);

/* ==========================================================================
   スマホ幅でのサイドバー開閉
   ハンバーガーボタンで .sidebar に .open を付け外しする。
   サイドバーの外側をタップした時も自動的に閉じるようにしている。
   ========================================================================== */
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
function setSidebarOpen(open){
  sidebar.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
}
menuToggle.setAttribute('aria-expanded', 'false');
menuToggle.addEventListener('click', ()=> setSidebarOpen(!sidebar.classList.contains('open')));
document.getElementById('sidebarCollapse').addEventListener('click', ()=>{
  const collapsed = sidebar.classList.toggle('collapsed');
  const button = document.getElementById('sidebarCollapse');
  button.setAttribute('aria-pressed', String(collapsed));
  button.setAttribute('aria-label', collapsed ? 'サイドバーを広げる' : 'サイドバーを折りたたむ');
});
document.getElementById('homeButton').addEventListener('click', event=>{
  event.preventDefault();
  showHome();
  closeSidebar();
});
function closeSidebar(){ setSidebarOpen(false); }
document.addEventListener('click', (e)=>{
  if(sidebar.classList.contains('open')){
    if(!sidebar.contains(e.target) && e.target.id !== 'menuToggle') closeSidebar();
  }
});

/* ==========================================================================
   初期表示
   ページを開いた瞬間に、各セクションを一度だけ描画しておく
   （以降はシリーズ切替やカレンダー月送りのたびに個別の関数が再描画する）
   SERIESが空の場合（データ読み込み失敗）は、上のエラーメッセージ表示だけを
   行い、以降の描画関数は呼ばない（activeSeriesがundefinedでエラーになるため）
   ========================================================================== */
if(SERIES.length > 0){
  renderSeasonPicker();
  renderNav();       // サイドバーのシリーズ一覧
  const seriesId = new URLSearchParams(window.location.search).get('series');
  const initialSeries = SERIES.find(series => series.id === seriesId);
  if(initialSeries){
    showSeries(initialSeries);
    const round = new URLSearchParams(window.location.search).get('round');
    const initialRace = initialSeries.races.find(race => String(race.round) === round);
    if(initialRace) requestAnimationFrame(() => openRaceModal(initialRace));
  }
  else showHome(); // 年度フォルダを直接開いた場合も共通ホームへ戻す
}
renderClock();     // 現在時刻表示（以降は setInterval で1秒ごとに更新。データ読み込みと無関係なので常に動かす）
