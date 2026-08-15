/* ==========================================================================
   SUPER FORMULA のデータ
   --------------------------------------------------------------------------
   このファイル1つで「SUPER FORMULA」に関する全データ（レース日程・
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
  "id": "superformula",
  "name": "SUPER FORMULA",
  "color": "--orange",
  "carType": "openwheel",
  "carImage":"images/sformula.png",
  "standingsNote": "ドライバーズランキング",
  "standings": [
    { "pos": 1, "name": "太田 格之進", "team": "DOCOMO TEAM DANDELION RACING", "manufacturer": "Honda", "points": 105 },
    { "pos": 2, "name": "岩佐 歩夢", "team": "TEAM MUGEN", "manufacturer": "Honda", "points": 59.5 },
    { "pos": 3, "name": "福住 仁嶺", "team": "NTT docomo business ROOKIE", "manufacturer": "Toyota", "points": 58 },
    { "pos": 4, "name": "イゴール・オオムラ・フラガ", "team": "PONOS NAKAJIMA RACING", "manufacturer": "Honda", "points": 51 },
    { "pos": 5, "name": "牧野 任祐", "team": "DOCOMO TEAM DANDELION RACING", "manufacturer": "Honda", "points": 41 },
    { "pos": 6, "name": "坪井 翔", "team": "VANTELIN TEAM TOM'S", "manufacturer": "Toyota", "points": 37 },
    { "pos": 7, "name": "サッシャ・フェネストラズ", "team": "VANTELIN TEAM TOM'S", "manufacturer": "Toyota", "points": 34.5 },
    { "pos": 8, "name": "大湯 都史樹", "team": "SANKI VERTEX PARTNERS CERUMO・INGING", "manufacturer": "Toyota", "points": 31 },
    { "pos": 9, "name": "野尻 智紀", "team": "TEAM MUGEN", "manufacturer": "Honda", "points": 30.5 },
    { "pos": 10, "name": "阪口 晴南", "team": "SANKI VERTEX PARTNERS CERUMO・INGING", "manufacturer": "Toyota", "points": 27 },
    { "pos": 11, "name": "ザック・オサリバン", "team": "TEAM IMPUL", "manufacturer": "Toyota", "points": 27 },
    { "pos": 12, "name": "ルーク・ブラウニング", "team": "REALIZE KONDO RACING", "manufacturer": "Toyota", "points": 20 },
    { "pos": 13, "name": "松下 信治", "team": "DELiGHTWORKS RACING", "manufacturer": "Toyota", "points": 16 },
    { "pos": 14, "name": "小出 峻", "team": "ThreeBond Racing", "manufacturer": "Honda", "points": 11 },
    { "pos": 15, "name": "佐藤 蓮", "team": "PONOS NAKAJIMA RACING", "manufacturer": "Honda", "points": 10.5 },
    { "pos": 16, "name": "チャーリー・ブルツ", "team": "TEAM GOH", "manufacturer": "Honda", "points": 6 },
    { "pos": 17, "name": "山下 健太", "team": "Kids com Team KCMG", "manufacturer": "Toyota", "points": 5 },
    { "pos": 18, "name": "野村 勇斗", "team": "San-Ei Gen with B-Max", "manufacturer": "Honda", "points": 5 },
    { "pos": 19, "name": "ロマン・スタネック", "team": "Buzz MK RACING", "manufacturer": "Honda", "points": 3.5 },
    { "pos": 20, "name": "小林 利徠斗", "team": "KDDI TGMGP TGR-DC", "manufacturer": "Toyota", "points": 3 },
    { "pos": 21, "name": "小林 可夢偉", "team": "KDDI TGMGP TGR-DC", "manufacturer": "Toyota", "points": 3 }
  ],
  "races": [
    {
      "round": 1,
      "name": "もてぎ",
      "circuit": "モビリティリゾートもてぎ",
      "country": "🇯🇵",
      "date": "2026-04-04",
      "trackImage": "maps/motegi.png",
      "sessions": [
        { "label": "フリー走行1", "date": "2026-04-03", "time": "10:10" },
        { "label": "フリー走行2", "date": "2026-04-03", "time": "14:30" },
        { "label": "予選", "date": "2026-04-04", "time": "09:30" },
        { "label": "決勝", "date": "2026-04-04", "time": "14:45" }
      ]
    },
    {
      "round": 2,
      "name": "もてぎ",
      "circuit": "モビリティリゾートもてぎ",
      "country": "🇯🇵",
      "date": "2026-04-05",
      "trackImage": "maps/motegi.png",
      "sessions": [
        { "label": "予選", "date": "2026-04-05", "time": "10:10" },
        { "label": "決勝", "date": "2026-04-05", "time": "14:45" }
      ]
    },
    {
      "round": 3,
      "name": "富士（代替開催）",
      "circuit": "富士スピードウェイ",
      "country": "🇯🇵",
      "date": "2026-07-19",
      "trackImage": "maps/fuji.png",
      "sessions": [
        { "label": "決勝", "date": "2026-07-19", "time": "10:05" }
      ]
    },
    {
      "round": 4,
      "name": "鈴鹿",
      "circuit": "鈴鹿サーキット",
      "country": "🇯🇵",
      "date": "2026-05-23",
      "trackImage": "maps/suzuka.png",
      "sessions": [
        { "label": "フリー走行1", "date": "2026-05-22", "time": "10:50" },
        { "label": "フリー走行2", "date": "2026-05-22", "time": "15:40" },
        { "label": "予選", "date": "2026-05-23", "time": "09:15" },
        { "label": "決勝", "date": "2026-05-23", "time": "14:45" }
      ]
    },
    {
      "round": 5,
      "name": "鈴鹿",
      "circuit": "鈴鹿サーキット",
      "country": "🇯🇵",
      "date": "2026-05-24",
      "trackImage": "maps/suzuka.png",
      "sessions": [
        { "label": "予選", "date": "2026-05-24", "time": "10:25" },
        { "label": "決勝", "date": "2026-05-24", "time": "14:45" }
      ]
    },
    {
      "round": 6,
      "name": "富士",
      "circuit": "富士スピードウェイ",
      "country": "🇯🇵",
      "date": "2026-07-18",
      "trackImage": "maps/fuji.png",
      "sessions": [
        { "label": "フリー走行1", "date": "2026-07-17", "time": "11:00" },
        { "label": "フリー走行2", "date": "2026-07-17", "time": "14:50" },
        { "label": "予選", "date": "2026-07-18", "time": "08:15" },
        { "label": "決勝", "date": "2026-07-18", "time": "16:15" }
      ]
    },
    {
      "round": 7,
      "name": "富士",
      "circuit": "富士スピードウェイ",
      "country": "🇯🇵",
      "date": "2026-07-19",
      "trackImage": "maps/fuji.png",
      "sessions": [
        { "label": "予選", "date": "2026-07-18", "time": "10:35" },
        { "label": "決勝", "date": "2026-07-19", "time": "15:35" }
      ]
    },
    {
      "round": 8,
      "name": "SUGO",
      "circuit": "スポーツランドSUGO",
      "country": "🇯🇵",
      "date": "2026-08-09",
      "trackImage": "maps/sugo.png",
      "sessions": [
        { "label": "フリー走行1", "date": "2026-08-08", "time": "09:00" },
        { "label": "予選", "date": "2026-08-08", "time": "14:20" },
        { "label": "フリー走行2", "date": "2026-08-09", "time": "09:30" },
        { "label": "決勝", "date": "2026-08-09", "time": "14:20" }
      ]
    },
    {
      "round": 9,
      "name": "富士",
      "circuit": "富士スピードウェイ",
      "country": "🇯🇵",
      "date": "2026-10-10",
      "trackImage": "maps/fuji.png",
      "sessions": [
        { "label": "フリー走行1", "date": "2026-10-09", "time": "未定" },
        { "label": "フリー走行2", "date": "2026-10-09", "time": "未定" },
        { "label": "予選", "date": "2026-10-10", "time": "未定" },
        { "label": "決勝", "date": "2026-10-10", "time": "未定" }
      ]
    },
    {
      "round": 10,
      "name": "富士",
      "circuit": "富士スピードウェイ",
      "country": "🇯🇵",
      "date": "2026-10-11",
      "trackImage": "maps/fuji.png",
      "sessions": [
        { "label": "予選", "date": "2026-10-11", "time": "未定" },
        { "label": "決勝", "date": "2026-10-11", "time": "未定" }
      ]
    },
    {
      "round": 11,
      "name": "鈴鹿",
      "circuit": "鈴鹿サーキット",
      "country": "🇯🇵",
      "date": "2026-11-21",
      "trackImage": "maps/suzuka.png",
      "sessions": [
        { "label": "フリー走行1", "date": "2026-11-20", "time": "未定" },
        { "label": "フリー走行2", "date": "2026-11-20", "time": "未定" },
        { "label": "予選", "date": "2026-11-21", "time": "未定" },
        { "label": "決勝", "date": "2026-11-21", "time": "未定" }
      ]
    },
    {
      "round": 12,
      "name": "鈴鹿",
      "circuit": "鈴鹿サーキット",
      "country": "🇯🇵",
      "date": "2026-11-22",
      "trackImage": "maps/suzuka.png",
      "sessions": [
        { "label": "予選", "date": "2026-11-22", "time": "未定" },
        { "label": "決勝", "date": "2026-11-22", "time": "未定" }
      ]
    }
  ]
});
