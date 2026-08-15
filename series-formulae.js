/* ==========================================================================
   Formula E のデータ
   --------------------------------------------------------------------------
   このファイル1つで「Formula E」に関する全データ（レース日程・
   セッションのひな形・順位表）を持つ。読み込まれると window.SERIES_DATA
   という配列にこのシリーズの情報を1つ追加する。
   index.html で他のシリーズのファイルと一緒に、script.js より先に読み込む。

   sessionTemplate … 各レースに sessions（個別の正確な日時）が無い場合に
                      使う汎用スケジュールのひな形。無ければ null。
   standings       … 公式ドライバーズ順位。
   races           … レース本体の配列。
   ========================================================================== */
window.SERIES_DATA = window.SERIES_DATA || [];
window.SERIES_DATA.push({
  "id": "formulae",
  "name": "Formula E",
  "color": "--lime",
  "carType": "openwheel",
  "carImage": "images/formulae.png",
  "standingsNote": "ドライバーズランキング（第15戦終了時点）",
  "standings": [
    { "pos": 1, "name": "ジェイク・デニス", "team": "Andretti Formula E", "points": 146 },
    { "pos": 2, "name": "ミッチ・エバンス", "team": "ジャガー・レーシング", "points": 144 },
    { "pos": 3, "name": "パスカル・ウェーレイン", "team": "ポルシェ・チーム", "points": 141 },
    { "pos": 4, "name": "オリバー・ローランド", "team": "日産", "points": 132 },
    { "pos": 5, "name": "エドアルド・モルタラ", "team": "マヒンドラ", "points": 116 },
    { "pos": 6, "name": "アントニオ・フェリックス・ダ・コスタ", "team": "ジャガー・レーシング", "points": 113 },
    { "pos": 7, "name": "ニック・キャシディ", "team": "Citroën Racing", "points": 104 },
    { "pos": 8, "name": "ニコ・ミュラー", "team": "ポルシェ・チーム", "points": 100 },
    { "pos": 9, "name": "ニック・デ・フリース", "team": "マヒンドラ", "points": 94 },
    { "pos": 10, "name": "セバスチャン・ブエミ", "team": "エンヴィジョン・レーシング", "points": 81 },
    { "pos": 11, "name": "フェリペ・ドルゴビッチ", "team": "Andretti Formula E", "points": 65 },
    { "pos": 12, "name": "ペペ・マルティ", "team": "Cupra Kiro", "points": 62 },
    { "pos": 13, "name": "ジャン＝エリック・ベルニュ", "team": "Citroën Racing", "points": 62 },
    { "pos": 14, "name": "ダン・ティクタム", "team": "Cupra Kiro", "points": 55 },
    { "pos": 15, "name": "ジョエル・エリクソン", "team": "エンヴィジョン・レーシング", "points": 55 },
    { "pos": 16, "name": "ルーカス・ディ・グラッシ", "team": "LOLA YAMAHA ABT FORMULA E TEAM", "points": 32 },
    { "pos": 17, "name": "テイラー・バーナード", "team": "DSペンスキー", "points": 31 },
    { "pos": 18, "name": "マキシミリアン・ギュンター", "team": "DSペンスキー", "points": 21 },
    { "pos": 19, "name": "ノーマン・ナトー", "team": "日産", "points": 19 },
    { "pos": 20, "name": "ゼイン・マローニ", "team": "LOLA YAMAHA ABT FORMULA E TEAM", "points": 2 }
  ],
  "races": [
    {
      "round": 1,
      "name": "サンパウロE-Prix",
      "circuit": "サンパウロ市街地サーキット",
      "country": "🇧🇷",
      "date": "2025-12-07",
      "trackImage": "maps/fe_brazil.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2025-12-06", "time": "04:00 JST" },
        { "label": "フリープラクティス2", "date": "2025-12-06", "time": "19:30 JST" },
        { "label": "予選", "date": "2025-12-06", "time": "21:40 JST" },
        { "label": "決勝", "date": "2025-12-07", "time": "02:05 JST" }
      ]
    },
    {
      "round": 2,
      "name": "メキシコシティE-Prix",
      "circuit": "エルマノス・ロドリゲス",
      "country": "🇲🇽",
      "date": "2026-01-11",
      "trackImage": "maps/fe_mexico.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-01-10", "time": "07:00 JST" },
        { "label": "フリープラクティス2", "date": "2026-01-10", "time": "22:30 JST" },
        { "label": "予選", "date": "2026-01-11", "time": "00:40 JST" },
        { "label": "決勝", "date": "2026-01-11", "time": "05:05 JST" }
      ]
    },
    {
      "round": 3,
      "name": "マイアミE-Prix",
      "circuit": "マイアミ・インターナショナル・オートドローム",
      "country": "🇺🇸",
      "date": "2026-02-01",
      "trackImage": "maps/fe_miami.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-01-31", "time": "07:00 JST" },
        { "label": "フリープラクティス2", "date": "2026-01-31", "time": "21:30 JST" },
        { "label": "予選", "date": "2026-01-31", "time": "23:40 JST" },
        { "label": "決勝", "date": "2026-02-01", "time": "04:05 JST" }
      ]
    },
    {
      "round": 4,
      "name": "ジェッダE-Prix R1",
      "circuit": "コーニッシュ市街地サーキット",
      "country": "🇸🇦",
      "date": "2026-02-14",
      "trackImage": "maps/fe_jeddah.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-02-13", "time": "02:00 JST" },
        { "label": "フリープラクティス2", "date": "2026-02-13", "time": "19:30 JST" },
        { "label": "予選", "date": "2026-02-13", "time": "21:40 JST" },
        { "label": "決勝", "date": "2026-02-14", "time": "02:05 JST" }
      ]
    },
    {
      "round": 5,
      "name": "ジェッダE-Prix R2",
      "circuit": "コーニッシュ市街地サーキット",
      "country": "🇸🇦",
      "date": "2026-02-15",
      "trackImage": "maps/fe_jeddah.png",
      "sessions": [
        { "label": "フリープラクティス3", "date": "2026-02-14", "time": "19:30 JST" },
        { "label": "予選", "date": "2026-02-14", "time": "21:40 JST" },
        { "label": "決勝", "date": "2026-02-15", "time": "02:05 JST" }
      ]
    },
    {
      "round": 6,
      "name": "マドリードE-Prix",
      "circuit": "マドリード・ハラマ・サーキット",
      "country": "🇪🇸",
      "date": "2026-03-21",
      "trackImage": "maps/fe_madrid.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-03-21", "time": "00:30 JST" },
        { "label": "フリープラクティス2", "date": "2026-03-21", "time": "16:30 JST" },
        { "label": "予選", "date": "2026-03-21", "time": "18:40 JST" },
        { "label": "決勝", "date": "2026-03-21", "time": "23:05 JST" }
      ]
    },
    {
      "round": 7,
      "name": "ベルリンE-Prix R1",
      "circuit": "テンペルホーフ市街地サーキット",
      "country": "🇩🇪",
      "date": "2026-05-02",
      "trackImage": "maps/fe_berlin.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-05-01", "time": "23:00 JST" },
        { "label": "フリープラクティス2", "date": "2026-05-02", "time": "16:30 JST" },
        { "label": "予選", "date": "2026-05-02", "time": "18:40 JST" },
        { "label": "決勝", "date": "2026-05-02", "time": "23:05 JST" }
      ]
    },
    {
      "round": 8,
      "name": "ベルリンE-Prix R2",
      "circuit": "テンペルホーフ市街地サーキット",
      "country": "🇩🇪",
      "date": "2026-05-03",
      "trackImage": "maps/fe_berlin.png",
      "sessions": [
        { "label": "フリープラクティス3", "date": "2026-05-03", "time": "16:30 JST" },
        { "label": "予選", "date": "2026-05-03", "time": "18:40 JST" },
        { "label": "決勝", "date": "2026-05-03", "time": "23:05 JST" }
      ]
    },
    {
      "round": 9,
      "name": "モナコE-Prix R1",
      "circuit": "モンテカルロ市街地サーキット",
      "country": "🇲🇨",
      "date": "2026-05-16",
      "trackImage": "maps/monaco.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-05-16", "time": "14:30 JST" },
        { "label": "フリープラクティス2", "date": "2026-05-16", "time": "16:10 JST" },
        { "label": "予選", "date": "2026-05-16", "time": "17:40 JST" },
        { "label": "決勝", "date": "2026-05-16", "time": "22:05 JST" }
      ]
    },
    {
      "round": 10,
      "name": "モナコE-Prix R2",
      "circuit": "モンテカルロ市街地サーキット",
      "country": "🇲🇨",
      "date": "2026-05-17",
      "trackImage": "maps/monaco.png",
      "sessions": [
        { "label": "フリープラクティス3", "date": "2026-05-17", "time": "15:30 JST" },
        { "label": "予選", "date": "2026-05-17", "time": "17:40 JST" },
        { "label": "決勝", "date": "2026-05-17", "time": "22:05 JST" }
      ]
    },
    {
      "round": 11,
      "name": "三亜E-Prix",
      "circuit": "三亜市街地サーキット",
      "country": "🇨🇳",
      "date": "2026-06-20",
      "trackImage": "maps/fe_sanya.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-06-19", "time": "17:30 JST" },
        { "label": "フリープラクティス2", "date": "2026-06-20", "time": "09:30 JST" },
        { "label": "予選", "date": "2026-06-20", "time": "11:40 JST" },
        { "label": "決勝", "date": "2026-06-20", "time": "16:05 JST" }
      ]
    },
    {
      "round": 12,
      "name": "上海E-Prix R1",
      "circuit": "上海市街地サーキット",
      "country": "🇨🇳",
      "date": "2026-07-04",
      "trackImage": "maps/fe_china.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-07-03", "time": "17:00 JST" },
        { "label": "フリープラクティス2", "date": "2026-07-04", "time": "07:00 JST" },
        { "label": "予選", "date": "2026-07-04", "time": "09:00 JST" },
        { "label": "決勝", "date": "2026-07-04", "time": "13:05 JST" }
      ]
    },
    {
      "round": 13,
      "name": "上海E-Prix R2",
      "circuit": "上海市街地サーキット",
      "country": "🇨🇳",
      "date": "2026-07-05",
      "trackImage": "maps/fe_china.png",
      "sessions": [
        { "label": "フリープラクティス3", "date": "2026-07-05", "time": "07:00 JST" },
        { "label": "予選", "date": "2026-07-05", "time": "09:00 JST" },
        { "label": "決勝", "date": "2026-07-05", "time": "13:05 JST" }
      ]
    },
    {
      "round": 14,
      "name": "東京E-Prix R1",
      "circuit": "東京ビッグサイト特設市街地コース",
      "country": "🇯🇵",
      "date": "2026-07-25",
      "trackImage": "maps/fe_tokyo.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-07-24", "time": "19:00 JST" },
        { "label": "フリープラクティス2", "date": "2026-07-25", "time": "13:30 JST" },
        { "label": "予選", "date": "2026-07-25", "time": "15:40 JST" },
        { "label": "決勝", "date": "2026-07-25", "time": "20:05 JST" }
      ]
    },
    {
      "round": 15,
      "name": "東京E-Prix R2",
      "circuit": "東京ビッグサイト特設市街地コース",
      "country": "🇯🇵",
      "date": "2026-07-26",
      "trackImage": "maps/fe_tokyo.png",
      "sessions": [
        { "label": "フリープラクティス3", "date": "2026-07-26", "time": "13:30 JST" },
        { "label": "予選", "date": "2026-07-26", "time": "15:40 JST" },
        { "label": "決勝", "date": "2026-07-26", "time": "20:05 JST" }
      ]
    },
    {
      "round": 16,
      "name": "ロンドンE-Prix R1",
      "circuit": "エクセル・ロンドン特設コース",
      "country": "🇬🇧",
      "date": "2026-08-15",
      "trackImage": "maps/fe_london.png",
      "sessions": [
        { "label": "フリープラクティス1", "date": "2026-08-15", "time": "00:00 JST" },
        { "label": "フリープラクティス2", "date": "2026-08-15", "time": "16:30 JST" },
        { "label": "予選", "date": "2026-08-15", "time": "18:40 JST" },
        { "label": "決勝", "date": "2026-08-15", "time": "23:05 JST" }
      ]
    },
    {
      "round": 17,
      "name": "ロンドンE-Prix R2",
      "circuit": "エクセル・ロンドン特設コース",
      "country": "🇬🇧",
      "date": "2026-08-16",
      "trackImage": "maps/fe_london.png",
      "sessions": [
        { "label": "フリープラクティス3", "date": "2026-08-16", "time": "16:30 JST" },
        { "label": "予選", "date": "2026-08-16", "time": "18:40 JST" },
        { "label": "決勝", "date": "2026-08-16", "time": "23:05 JST" }
      ]
    }
  ]
});
