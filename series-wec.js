/* ==========================================================================
   WEC（世界耐久選手権） のデータ
   --------------------------------------------------------------------------
   このファイル1つで「WEC 世界耐久選手権」に関する全データ（レース日程・
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
  "id": "wec",
  "name": "WEC 世界耐久選手権",
  "color": "--blue",
  "carType": "endurance",
  "carImage": "images/wec.png",
  "standingsNote": "ドライバーズランキング",
  "standings": [
    { "class": "Hypercar", "car": "#20", "pos": 1, "name": "ルネ・ラスト", "team": "BMW M Team WRT", "manufacturer": "BMW", "points": 75 },
    { "class": "Hypercar", "car": "#20", "pos": 1, "name": "ロビン・フラインス", "team": "BMW M Team WRT", "manufacturer": "BMW", "points": 75 },
    { "class": "Hypercar", "car": "#7", "pos": 2, "name": "小林 可夢偉", "team": "Toyota Gazoo Racing", "manufacturer": "Toyota", "points": 75 },
    { "class": "Hypercar", "car": "#7", "pos": 2, "name": "マイク・コンウェイ", "team": "Toyota Gazoo Racing", "manufacturer": "Toyota", "points": 75 },
    { "class": "Hypercar", "car": "#7", "pos": 2, "name": "ニック・デ・フリース", "team": "Toyota Gazoo Racing", "manufacturer": "Toyota", "points": 75 },
    { "class": "Hypercar", "car": "#20", "pos": 3, "name": "シェルドン・ファン・デル・リンデ", "team": "BMW M Team WRT", "manufacturer": "BMW", "points": 65 },
    { "class": "Hypercar", "car": "#51", "pos": 4, "name": "アレッサンドロ・ピエール・グイディ / アントニオ・ジョビナッツィ / ジェームス・カラド", "team": "Ferrari AF Corse", "manufacturer": "Ferrari", "points": 57 },
    { "class": "Hypercar", "car": "#8", "pos": 5, "name": "ブレンドン・ハートレー / 平川 亮 / セバスチャン・ブエミ", "team": "Toyota Gazoo Racing", "manufacturer": "Toyota", "points": 56 },
    { "class": "LMGT3", "car": "#33", "pos": 1, "name": "ジョニー・エドガー", "team": "TF Sport", "manufacturer": "Corvette", "points": 76 },
    { "class": "LMGT3", "car": "#33", "pos": 1, "name": "ニッキー・キャッツバーグ", "team": "TF Sport", "manufacturer": "Corvette", "points": 72 },
    { "class": "LMGT3", "car": "#33", "pos": 1, "name": "ベン・キーティング", "team": "TF Sport", "manufacturer": "Corvette", "points": 54 },
    { "class": "LMGT3", "car": "#92", "pos": 2, "name": "リカルド・ペラ / リヒャルト・リエツ / ヤッサー・シャヒン", "team": "Manthey 1st Phorm", "manufacturer": "Porsche", "points": 49 },
    { "class": "LMGT3", "car": "#69", "pos": 3, "name": "アンソニー・マッキントッシュ / ダニエル・ハーパー / パーカー・トンプソン", "team": "Team WRT", "manufacturer": "BMW", "points": 43 },
    { "class": "Hypercar", "car": "#15", "pos": 6, "name": "ケビン・マグヌッセン / ラファエレ・マルチェロ", "team": "BMW M Team WRT", "points": 50 },
    { "class": "Hypercar", "car": "#15", "pos": 7, "name": "ドリス・ヴァントール", "team": "BMW M Team WRT", "points": 44 },
    { "class": "Hypercar", "car": "#12", "pos": 8, "name": "ノーマン・ナト / ウィル・スティーブンス", "team": "Cadillac Hertz Team JOTA", "points": 42 },
    { "class": "Hypercar", "car": "#83", "pos": 9, "name": "フィル・ハンソン / ロバート・クビサ / イーフェイ・イェ", "team": "AF Corse", "points": 31 },
    { "class": "Hypercar", "car": "#007", "pos": 10, "name": "ハリー・ティンクネル / トム・ギャンブル", "team": "Aston Martin THOR Team", "points": 30 },
    { "class": "Hypercar", "car": "#50", "pos": 11, "name": "アントニオ・フォコ / ミゲル・モリーナ / ニクラス・ニールセン", "team": "Ferrari AF Corse", "points": 29 },
    { "class": "Hypercar", "car": "#35", "pos": 12, "name": "アントニオ・フェリックス・ダ・コスタ / シャルル・ミレッシ / フェルディナント・ハプスブルク", "team": "Alpine Endurance Team", "points": 29 },
    { "class": "Hypercar", "car": "#12", "pos": 13, "name": "ルイ・デレトラズ", "team": "Cadillac Hertz Team JOTA", "points": 26 },
    { "class": "Hypercar", "car": "#38", "pos": 14, "name": "アール・バンバー / セバスチャン・ブルデー", "team": "Cadillac Hertz Team JOTA", "points": 16 },
    { "class": "Hypercar", "car": "#38", "pos": 15, "name": "ジャック・エイトケン", "team": "Cadillac Hertz Team JOTA", "points": 12 },
    { "class": "Hypercar", "car": "#007", "pos": 16, "name": "ロス・ガン", "team": "Aston Martin THOR Team", "points": 8 },
    { "class": "Hypercar", "car": "#93", "pos": 17, "name": "ニック・キャシディ / ポール・ディ・レスタ / ストフェル・バンドーン", "team": "Peugeot TotalEnergies", "points": 6 },
    { "class": "Hypercar", "car": "#17", "pos": 18, "name": "アンドレ・ロッテラー / ルイス・フェリペ・デラニ / マシュー・ジャベール", "team": "Genesis Magma Racing", "points": 4 },
    { "class": "Hypercar", "car": "#36", "pos": 19, "name": "フレデリック・マコヴィエッキ / ジュール・グーノン / ビクター・マルティン", "team": "Alpine Endurance Team", "points": 4 },
    { "class": "Hypercar", "car": "#94", "pos": 20, "name": "ロイック・デュバル / マルテ・ヤコブセン / テオ・プルシェール", "team": "Peugeot TotalEnergies", "points": 3 },
    { "class": "Hypercar", "car": "#009", "pos": 21, "name": "アレックス・リベラス / マルコ・ソーレンセン", "team": "Aston Martin THOR Team", "points": 2 },
    { "class": "Hypercar", "car": "#19", "pos": 22, "name": "ダニ・ジュンカデラ / マチュー・ジャミネ / ポール・ルー・シャタン", "team": "Genesis Magma Racing", "points": 0 },
    { "class": "Hypercar", "car": "#009", "pos": 23, "name": "ローマン・デ・アンジェリス", "team": "Aston Martin THOR Team", "points": 0 },
    { "class": "LMGT3", "car": "#34", "pos": 4, "name": "チャーリー・イーストウッド / ピーター・デンプシー / サリフ・ヨルチュ", "team": "Racing Team Turkey by TF", "points": 43 },
    { "class": "LMGT3", "car": "#21", "pos": 5, "name": "アレッシオ・ロベラ / フランソワ・エリオー / サイモン・マン", "team": "Vista AF Corse", "points": 42 },
    { "class": "LMGT3", "car": "#87", "pos": 6, "name": "クレメンス・シュミット / ホセ・マリア・ロペス / ペトル・ウンブラレスク", "team": "Akkodis ASP Team", "points": 38 },
    { "class": "LMGT3", "car": "#78", "pos": 7, "name": "アドリアン・ダビド / トム・ファン・ロンプイ", "team": "Akkodis ASP Team", "points": 37 },
    { "class": "LMGT3", "car": "#78", "pos": 8, "name": "ジャック・ホークスワース", "team": "Akkodis ASP Team", "points": 36 },
    { "class": "LMGT3", "car": "#10", "pos": 9, "name": "アンタレス・アウ / マービン・キルヒヘーファー / トーマス・フレミング", "team": "Garage 59", "points": 34 },
    { "class": "LMGT3", "car": "#23", "pos": 10, "name": "グレイ・ニューウェル / ジョニー・アダム", "team": "Heart of Racing Team", "points": 33 },
    { "class": "LMGT3", "car": "#91", "pos": 11, "name": "アイハンジャン・ギュベン / ジェームス・コッティンガム / ティムール・ボグスラフスキー", "team": "Manthey DK Engineering", "points": 30 },
    { "class": "LMGT3", "car": "#23", "pos": 12, "name": "エドゥアルド・バリチェロ", "team": "Heart of Racing Team", "points": 30 },
    { "class": "LMGT3", "car": "#33", "pos": 13, "name": "ブレイク・マクドナルド", "team": "TF Sport", "points": 22 },
    { "class": "LMGT3", "car": "#32", "pos": 14, "name": "アウグスト・ファルフス / ダレン・レオン / ショーン・ゲラエル", "team": "Team WRT", "points": 22 },
    { "class": "LMGT3", "car": "#27", "pos": 15, "name": "イアン・ジェームス / マッティア・ドルディ / ザカリー・ロビション", "team": "Heart of Racing Team", "points": 19 },
    { "class": "LMGT3", "car": "#58", "pos": 16, "name": "アレクサンダー・ウエスト / ベンジャミン・ゲーテ / フィン・ゲールジッツ", "team": "Garage 59", "points": 18 },
    { "class": "LMGT3", "car": "#88", "pos": 17, "name": "ジャンマルコ・レボラート / ローガン・サージェント / ステファノ・ガットゥーゾ", "team": "Proton Competition", "points": 14 },
    { "class": "LMGT3", "car": "#61", "pos": 18, "name": "マルティン・ベリー / マキシム・マルタン / ルイ・アンドラーデ", "team": "Iron Lynx", "points": 9 },
    { "class": "LMGT3", "car": "#33", "pos": 19, "name": "ニコラス・バローネ", "team": "TF Sport", "points": 4 },
    { "class": "LMGT3", "car": "#23", "pos": 20, "name": "コビー・ポーウェルス", "team": "Heart of Racing Team", "points": 3 },
    { "class": "LMGT3", "car": "#77", "pos": 21, "name": "ベン・タック / エリック・パウエル / セバスチャン・プリオール", "team": "Proton Competition", "points": 2 },
    { "class": "LMGT3", "car": "#78", "pos": 22, "name": "エステバン・マッソン", "team": "Akkodis ASP Team", "points": 1 },
    { "class": "LMGT3", "car": "#54", "pos": 23, "name": "ダビデ・リゴン / フランチェスコ・カステラッチ / トーマス・フローア", "team": "Vista AF Corse", "points": 0 },
    { "class": "LMGT3", "car": "#79", "pos": 24, "name": "ヨハネス・ツェルガー / リン・ホデニウス / マッテオ・クレッソーニ", "team": "Iron Lynx", "points": 0 }
  ],
  "manufacturerStandingsNote": "Hypercarはマニュファクチャラーズ、LMGT3はチームランキング",
  "manufacturerStandings": [
    { "class": "Hypercar マニュファクチャラーズ", "pos": 1, "name": "TOYOTA", "points": 132 },
    { "class": "Hypercar マニュファクチャラーズ", "pos": 2, "name": "BMW", "points": 127 },
    { "class": "Hypercar マニュファクチャラーズ", "pos": 3, "name": "FERRARI", "points": 88 },
    { "class": "Hypercar マニュファクチャラーズ", "pos": 4, "name": "CADILLAC", "points": 60 },
    { "class": "Hypercar マニュファクチャラーズ", "pos": 5, "name": "ALPINE", "points": 41 },
    { "class": "Hypercar マニュファクチャラーズ", "pos": 6, "name": "ASTON MARTIN", "points": 40 },
    { "class": "Hypercar マニュファクチャラーズ", "pos": 7, "name": "PEUGEOT", "points": 15 },
    { "class": "Hypercar マニュファクチャラーズ", "pos": 8, "name": "GENESIS", "points": 6 },
    { "class": "LMGT3 チーム", "car": "#33", "pos": 1, "name": "TF SPORT", "team": "#33", "points": 76 },
    { "class": "LMGT3 チーム", "car": "#92", "pos": 2, "name": "THE BEND MANTHEY", "team": "#92", "points": 49 },
    { "class": "LMGT3 チーム", "car": "#69", "pos": 3, "name": "TEAM WRT", "team": "#69", "points": 43 },
    { "class": "LMGT3 チーム", "car": "#34", "pos": 4, "name": "RACING TEAM TURKEY BY TF", "team": "#34", "points": 43 },
    { "class": "LMGT3 チーム", "car": "#21", "pos": 5, "name": "VISTA AF CORSE", "team": "#21", "points": 42 },
    { "class": "LMGT3 チーム", "car": "#87", "pos": 6, "name": "AKKODIS ASP TEAM", "team": "#87", "points": 38 },
    { "class": "LMGT3 チーム", "car": "#78", "pos": 7, "name": "AKKODIS ASP TEAM", "team": "#78", "points": 37 },
    { "class": "LMGT3 チーム", "car": "#10", "pos": 8, "name": "GARAGE 59", "team": "#10", "points": 34 },
    { "class": "LMGT3 チーム", "car": "#23", "pos": 9, "name": "HEART OF RACING TEAM", "team": "#23", "points": 33 },
    { "class": "LMGT3 チーム", "car": "#91", "pos": 10, "name": "MANTHEY DK ENGINEERING", "team": "#91", "points": 30 },
    { "class": "LMGT3 チーム", "car": "#32", "pos": 11, "name": "TEAM WRT", "team": "#32", "points": 22 },
    { "class": "LMGT3 チーム", "car": "#27", "pos": 12, "name": "HEART OF RACING TEAM", "team": "#27", "points": 19 },
    { "class": "LMGT3 チーム", "car": "#58", "pos": 13, "name": "GARAGE 59", "team": "#58", "points": 18 },
    { "class": "LMGT3 チーム", "car": "#88", "pos": 14, "name": "PROTON COMPETITION", "team": "#88", "points": 14 },
    { "class": "LMGT3 チーム", "car": "#61", "pos": 15, "name": "IRON LYNX", "team": "#61", "points": 9 },
    { "class": "LMGT3 チーム", "car": "#77", "pos": 16, "name": "PROTON COMPETITION", "team": "#77", "points": 2 },
    { "class": "LMGT3 チーム", "car": "#54", "pos": 17, "name": "VISTA AF CORSE", "team": "#54", "points": 0 },
    { "class": "LMGT3 チーム", "car": "#79", "pos": 18, "name": "IRON LYNX", "team": "#79", "points": 0 }
  ],
  "races": [
    {
      "round": 1,
      "name": "イモラ6時間レース",
      "circuit": "イモラ・サーキット",
      "country": "IT",
      "trackImage":"maps/imola.png",
      "date": "2026-04-19",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-04-17",
          "time": "17:15"
        },
        {
          "label": "フリー走行2",
          "date": "2026-04-17",
          "time": "22:15"
        },
        {
          "label": "フリー走行3",
          "date": "2026-04-18",
          "time": "5:30"
        },
        {
          "label": "予選",
          "date": "2026-04-18",
          "time": "21:30"
        },
        {
          "label": "決勝",
          "date": "2026-04-19",
          "time": "20:00"
        }
      ]
    },
    {
      "round": 2,
      "name": "スパ・フランコルシャン6時間レース",
      "circuit": "スパ・フランコルシャン",
      "country": "BE",
      "trackImage":"maps/spa.png",
      "date": "2026-05-09",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-05-07",
          "time": "18:00"
        },
        {
          "label": "フリー走行2",
          "date": "2026-05-07",
          "time": "22:40"
        },
        {
          "label": "フリー走行3",
          "date": "2026-05-08",
          "time": "17:10"
        },
        {
          "label": "予選",
          "date": "2026-05-08",
          "time": "21:30"
        },
        {
          "label": "決勝",
          "date": "2026-05-09",
          "time": "21:00"
        }
      ]
    },
    {
      "round": 3,
      "name": "ル・マン24時間レース",
      "circuit": "サルト・サーキット",
      "country": "FR",
      "trackImage":"maps/leman.png",
      "date": "2026-06-13",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-06-10",
          "time": "21:00"
        },
        {
          "label": "予選",
          "date": "2026-06-11",
          "time": "1:45"
        },
        {
          "label": "フリー走行2",
          "date": "2026-06-11",
          "time": "5:00"
        },
        {
          "label": "フリー走行3",
          "date": "2026-06-11",
          "time": "21:45"
        },
        {
          "label": "ハイパーポール",
          "date": "2026-06-12",
          "time": "3:00"
        },
        {
          "label": "フリー走行4",
          "date": "2026-06-12",
          "time": "6:00"
        },
        {
          "label": "決勝",
          "date": "2026-06-13",
          "time": "23:00"
        }
      ]
    },
    {
      "round": 4,
      "name": "サンパウロ6時間レース",
      "circuit": "インテルラゴス・サーキット",
      "country": "BR",
      "trackImage":"maps/brazil.png",
      "date": "2026-07-12",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-07-10",
          "time": "23:00"
        },
        {
          "label": "フリー走行2",
          "date": "2026-07-11",
          "time": "3:50"
        },
        {
          "label": "フリー走行3",
          "date": "2026-07-11",
          "time": "22:10"
        },
        {
          "label": "予選",
          "date": "2026-07-12",
          "time": "2:30"
        },
        {
          "label": "決勝",
          "date": "2026-07-12",
          "time": "23:30"
        }
      ]
    },
    {
      "round": 5,
      "name": "ローンスター・ル・マン",
      "circuit": "サーキット・オブ・ジ・アメリカズ",
      "country": "US",
      "trackImage":"maps/austin.png",
      "date": "2026-09-06",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-09-06",
          "time": "未定"
        },
        {
          "label": "フリー走行2",
          "date": "2026-09-06",
          "time": "未定"
        },
        {
          "label": "フリー走行3",
          "date": "2026-09-07",
          "time": "未定"
        },
        {
          "label": "予選",
          "date": "2026-09-07",
          "time": "未定"
        },
        {
          "label": "決勝",
          "date": "2026-09-06",
          "time": "未定"
        }
      ]
    },
    {
      "round": 6,
      "name": "富士6時間レース",
      "circuit": "富士スピードウェイ",
      "country": "JP",
      "trackImage":"maps/fuji.png",
      "date": "2026-09-27",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-09-25",
          "time": "未定"
        },
        {
          "label": "フリー走行2",
          "date": "2026-09-25",
          "time": "未定"
        },
        {
          "label": "フリー走行3",
          "date": "2026-09-26",
          "time": "未定"
        },
        {
          "label": "予選",
          "date": "2026-09-26",
          "time": "未定"
        },
        {
          "label": "決勝",
          "date": "2026-09-27",
          "time": "未定"
        }
      ]
    },
    {
      "round": 7,
      "name": "バルセロナ6時間レース",
      "circuit": "カタロニア・サーキット",
      "country": "ES",
      "trackImage":"maps/spain.png",
      "date": "2026-10-18",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-10-16",
          "time": "未定"
        },
        {
          "label": "フリー走行2",
          "date": "2026-10-16",
          "time": "未定"
        },
        {
          "label": "フリー走行3",
          "date": "2026-10-17",
          "time": "未定"
        },
        {
          "label": "予選",
          "date": "2026-10-17",
          "time": "未定"
        },
        {
          "label": "決勝",
          "date": "2026-10-18",
          "time": "未定"
        }
      ]
    },
    {
      "round": 8,
      "name": "モンツァ6時間レース",
      "circuit": "モンツァ・サーキット",
      "country": "IT",
      "trackImage":"maps/monza.png",
      "date": "2026-11-08",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2026-11-06",
          "time": "未定"
        },
        {
          "label": "フリー走行2",
          "date": "2026-11-06",
          "time": "未定"
        },
        {
          "label": "フリー走行3",
          "date": "2026-11-07",
          "time": "未定"
        },
        {
          "label": "予選",
          "date": "2026-11-07",
          "time": "未定"
        },
        {
          "label": "決勝",
          "date": "2026-11-08",
          "time": "未定"
        }
      ]
    }
  ]
});
