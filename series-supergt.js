/* ==========================================================================
   SUPER GT のデータ
   --------------------------------------------------------------------------
   このファイル1つで「SUPER GT」に関する全データ（レース日程・
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
  "id": "supergt",
  "name": "SUPER GT",
  "color": "--amber",
  "carType": "endurance",
  "carImage": "images/supergt.png",
  "standingsNote": "ドライバーズランキング",
  "standings": [
    { "class": "GT500", "car": "#36", "pos": 1, "name": "山下 健太", "team": "TGR TEAM au TOM'S", "manufacturer": "Toyota", "points": 48 },
    { "class": "GT500", "car": "#36", "pos": 1, "name": "坪井 翔", "team": "TGR TEAM au TOM'S", "manufacturer": "Toyota", "points": 48 },
    { "class": "GT500", "car": "#14", "pos": 2, "name": "大嶋 和也", "team": "TGR TEAM ENEOS ROOKIE", "manufacturer": "Toyota", "points": 28 },
    { "class": "GT500", "car": "#14", "pos": 2, "name": "福住 仁嶺", "team": "TGR TEAM ENEOS ROOKIE", "manufacturer": "Toyota", "points": 28 },
    { "class": "GT500", "car": "#100", "pos": 3, "name": "山本 尚貴", "team": "STANLEY TEAM KUNIMITSU", "manufacturer": "Honda", "points": 27 },
    { "class": "GT500", "car": "#100", "pos": 3, "name": "牧野 任祐", "team": "STANLEY TEAM KUNIMITSU", "manufacturer": "Honda", "points": 27 },
    { "class": "GT300", "car": "#2", "pos": 2, "name": "堤 優威", "team": "HYPER WATER Racing INGING", "manufacturer": "Mercedes", "points": 40 },
    { "class": "GT300", "car": "#2", "pos": 2, "name": "卜部 和久", "team": "HYPER WATER Racing INGING", "manufacturer": "Mercedes", "points": 40 },
    { "class": "GT300", "car": "#52", "pos": 1, "name": "吉田 広樹", "team": "埼玉Green Brave", "manufacturer": "Toyota", "points": 40 },
    { "class": "GT300", "car": "#52", "pos": 1, "name": "野中 誠太", "team": "埼玉Green Brave", "manufacturer": "Toyota", "points": 40 },
    { "class": "GT300", "car": "#56", "pos": 3, "name": "J.P. デ・オリベイラ", "team": "KONDO RACING", "manufacturer": "Nissan", "points": 38 },
    { "class": "GT300", "car": "#56", "pos": 3, "name": "木村 偉織", "team": "KONDO RACING", "manufacturer": "Nissan", "points": 38 },
    { "class": "GT300", "car": "#65", "pos": 4, "name": "蒲生 尚弥 / 菅波 冬悟", "team": "K2 R&D LEON RACING", "manufacturer": "Mercedes", "points": 37 },
    { "class": "GT500", "car": "#38", "pos": 4, "name": "大湯 都史樹 / 小林 利徠斗", "team": "TGR TEAM KeePer CERUMO", "points": 21 },
    { "class": "GT500", "car": "#39", "pos": 5, "name": "関口 雄飛 / サッシャ・フェネストラズ", "team": "TGR TEAM SARD", "points": 17 },
    { "class": "GT500", "car": "#8", "pos": 6, "name": "太田 格之進 / 大津 弘樹", "team": "Team HRC ARTA MUGEN", "points": 16 },
    { "class": "GT500", "car": "#12", "pos": 7, "name": "平峰 一貴 / ベルトラン・バゲット", "team": "TEAM IMPUL", "points": 15 },
    { "class": "GT500", "car": "#23", "pos": 8, "name": "千代 勝正 / 高星 明誠", "team": "NISMO", "points": 14 },
    { "class": "GT500", "car": "#16", "pos": 9, "name": "野尻 智紀 / 佐藤 蓮", "team": "ARTA MUGEN", "points": 13 },
    { "class": "GT500", "car": "#37", "pos": 10, "name": "笹原 右京 / ジュリアーノ・アレジ", "team": "TGR TEAM Deloitte TOM'S", "points": 11 },
    { "class": "GT500", "car": "#17", "pos": 11, "name": "塚越 広大 / 野村 勇斗", "team": "Astemo REAL RACING", "points": 9 },
    { "class": "GT500", "car": "#24", "pos": 12, "name": "名取 鉄平 / 三宅 淳詞", "team": "KONDO RACING", "points": 7 },
    { "class": "GT500", "car": "#19", "pos": 13, "name": "国本 雄資 / 阪口 晴南", "team": "TGR TEAM WedsSport BANDOH", "points": 2 },
    { "class": "GT300", "car": "#777", "pos": 5, "name": "藤井 誠暢 / チャーリー・ファグ", "team": "D'station Racing", "points": 35 },
    { "class": "GT300", "car": "#31", "pos": 6, "name": "小高 一斗 / 小山 美姫", "team": "apr #31", "points": 34 },
    { "class": "GT300", "car": "#32", "pos": 7, "name": "石浦 宏明", "team": "TEAM ENEOS ROOKIE", "points": 30 },
    { "class": "GT300", "car": "#666", "pos": 8, "name": "スヴェン・ミューラー / 藤波 清斗", "team": "seven x seven Racing", "points": 27 },
    { "class": "GT300", "car": "#7", "pos": 9, "name": "ザック・オサリバン", "team": "CARGUY MKS RACING", "points": 24 },
    { "class": "GT300", "car": "#4", "pos": 10, "name": "谷口 信輝 / 片岡 龍也", "team": "GOODSMILE RACING & TeamUKYO", "points": 24 },
    { "class": "GT300", "car": "#7", "pos": 11, "name": "梅垣 清", "team": "CARGUY MKS RACING", "points": 21 },
    { "class": "GT300", "car": "#32", "pos": 12, "name": "鈴木 斗輝哉", "team": "TEAM ENEOS ROOKIE", "points": 20 },
    { "class": "GT300", "car": "#31", "pos": 13, "name": "チャーリー・ブルツ", "team": "apr #31", "points": 16 },
    { "class": "GT300", "car": "#96", "pos": 14, "name": "新田 守男 / 高木 真一", "team": "K-tunes Racing", "points": 16 },
    { "class": "GT300", "car": "#45", "pos": 15, "name": "篠原 拓朗 / 川端 伸太朗", "team": "PONOS RACING", "points": 14 },
    { "class": "GT300", "car": "#6", "pos": 16, "name": "片山 義章 / ニクラス・クルッテン", "team": "VELOREX", "points": 14 },
    { "class": "GT300", "car": "#62", "pos": 17, "name": "平木 湧也 / 平木 玲次", "team": "HELM MOTORSPORTS", "points": 11 },
    { "class": "GT300", "car": "#60", "pos": 18, "name": "吉本 大樹 / 河野 駿佑", "team": "LM corsa", "points": 11 },
    { "class": "GT300", "car": "#32", "pos": 19, "name": "小林 可夢偉", "team": "TEAM ENEOS ROOKIE", "points": 10 },
    { "class": "GT300", "car": "#88", "pos": 20, "name": "小暮 卓史 / ダニール・クビアト", "team": "JLOC #88", "points": 10 },
    { "class": "GT300", "car": "#7", "pos": 21, "name": "伊東 黎明", "team": "CARGUY MKS RACING", "points": 8 },
    { "class": "GT300", "car": "#5", "pos": 22, "name": "塩津 佑介 / 荒尾 創大", "team": "TEAM MACH", "points": 5 },
    { "class": "GT300", "car": "#87", "pos": 23, "name": "元嶋 佑弥 / 松浦 孝亮", "team": "JLOC #87", "points": 5 },
    { "class": "GT300", "car": "#18", "pos": 24, "name": "小林 崇志 / 新原 光太郎", "team": "TEAM UPGARAGE", "points": 4 },
    { "class": "GT300", "car": "#87", "pos": 25, "name": "川合 孝汰", "team": "JLOC #87", "points": 4 },
    { "class": "GT300", "car": "#11", "pos": 26, "name": "富田 竜一郎 / 大木 一輝", "team": "GAINER", "points": 2 },
    { "class": "GT300", "car": "#48", "pos": 27, "name": "井田 太陽 / ジェームス・プル / 藤原 大暉", "team": "NILZZ Racing", "points": 1 },
    { "class": "GT300", "car": "#61", "pos": 28, "name": "井口 卓人 / 山内 英輝", "team": "R&D SPORT", "points": 1 }
  ],
  "teamStandings": [
    { "class": "GT500", "car": "#36", "pos": 1, "name": "TGR TEAM au TOM'S", "points": 57 },
    { "class": "GT500", "car": "#100", "pos": 2, "name": "STANLEY TEAM KUNIMITSU", "points": 36 },
    { "class": "GT500", "car": "#14", "pos": 3, "name": "TGR TEAM ENEOS ROOKIE", "points": 36 },
    { "class": "GT500", "car": "#38", "pos": 4, "name": "TGR TEAM KeePer CERUMO", "points": 27 },
    { "class": "GT500", "car": "#39", "pos": 5, "name": "TGR TEAM SARD", "points": 26 },
    { "class": "GT500", "car": "#12", "pos": 6, "name": "TEAM IMPUL", "points": 23 },
    { "class": "GT500", "car": "#8", "pos": 7, "name": "Team HRC ARTA MUGEN", "points": 22 },
    { "class": "GT500", "car": "#16", "pos": 8, "name": "ARTA MUGEN", "points": 22 },
    { "class": "GT500", "car": "#23", "pos": 9, "name": "NISMO", "points": 20 },
    { "class": "GT500", "car": "#17", "pos": 10, "name": "Astemo REAL RACING", "points": 16 },
    { "class": "GT500", "car": "#24", "pos": 11, "name": "KONDO RACING", "points": 16 },
    { "class": "GT500", "car": "#37", "pos": 12, "name": "TGR TEAM Deloitte TOM'S", "points": 15 },
    { "class": "GT500", "car": "#19", "pos": 13, "name": "TGR TEAM WedsSport BANDOH", "points": 9 },
    { "class": "GT500", "car": "#64", "pos": 14, "name": "Modulo Nakajima Racing", "teamDrivers": "大草 りき / イゴール・オオムラ・フラガ", "points": 3 },
    { "class": "GT300", "car": "#52", "pos": 1, "name": "埼玉Green Brave", "points": 49 },
    { "class": "GT300", "car": "#2", "pos": 2, "name": "HYPER WATER Racing INGING", "points": 49 },
    { "class": "GT300", "car": "#56", "pos": 3, "name": "KONDO RACING", "points": 47 },
    { "class": "GT300", "car": "#65", "pos": 4, "name": "K2 R&D LEON RACING", "points": 46 },
    { "class": "GT300", "car": "#777", "pos": 5, "name": "D’station Racing", "points": 43 },
    { "class": "GT300", "car": "#31", "pos": 6, "name": "apr", "points": 43 },
    { "class": "GT300", "car": "#32", "pos": 7, "name": "TEAM ENEOS ROOKIE", "points": 39 },
    { "class": "GT300", "car": "#666", "pos": 8, "name": "seven x seven Racing", "points": 36 },
    { "class": "GT300", "car": "#4", "pos": 9, "name": "GOODSMILE RACING & TeamUKYO", "points": 33 },
    { "class": "GT300", "car": "#7", "pos": 10, "name": "CARGUY MKS RACING", "points": 32 },
    { "class": "GT300", "car": "#96", "pos": 11, "name": "K-tunes Racing", "points": 24 },
    { "class": "GT300", "car": "#6", "pos": 12, "name": "VELOREX", "points": 21 },
    { "class": "GT300", "car": "#60", "pos": 13, "name": "LM corsa", "points": 19 },
    { "class": "GT300", "car": "#45", "pos": 14, "name": "PONOS RACING", "points": 18 },
    { "class": "GT300", "car": "#62", "pos": 15, "name": "HELM MOTORSPORTS", "points": 18 },
    { "class": "GT300", "car": "#88", "pos": 16, "name": "JLOC #88", "points": 17 },
    { "class": "GT300", "car": "#5", "pos": 17, "name": "TEAM MACH", "points": 12 },
    { "class": "GT300", "car": "#87", "pos": 18, "name": "JLOC #87", "points": 12 },
    { "class": "GT300", "car": "#18", "pos": 19, "name": "TEAM UPGARAGE", "points": 11 },
    { "class": "GT300", "car": "#11", "pos": 20, "name": "GAINER", "points": 10 },
    { "class": "GT300", "car": "#48", "pos": 21, "name": "NILZZ Racing", "points": 7 },
    { "class": "GT300", "car": "#9", "pos": 22, "name": "PACIFIC RACING TEAM", "teamDrivers": "冨林 勇佑 / 藤原 優汰 / 久保 凜太郎", "points": 6 },
    { "class": "GT300", "car": "#61", "pos": 23, "name": "R&D SPORT", "points": 6 },
    { "class": "GT300", "car": "#25", "pos": 24, "name": "HOPPY team TSUCHIYA", "teamDrivers": "松井 孝允 / 洞地 遼大", "points": 6 },
    { "class": "GT300", "car": "#30", "pos": 25, "name": "apr #30", "teamDrivers": "永井 宏明 / 平良 響", "points": 6 },
    { "class": "GT300", "car": "#360", "pos": 26, "name": "TOMEI SPORTS", "teamDrivers": "荒川 麟 / 金丸 ユウ / 田中 篤", "points": 5 },
    { "class": "GT300", "car": "#22", "pos": 27, "name": "R’Qs MOTOR SPORTS", "teamDrivers": "和田 久 / 加納 政樹 / 城内 政樹", "points": 5 },
    { "class": "GT300", "car": "#20", "pos": 28, "name": "SHADE RACING", "teamDrivers": "平中 克幸 / 清水 英志郎", "points": 4 },
    { "class": "GT300", "car": "#26", "pos": 29, "name": "ANEST IWATA Racing", "teamDrivers": "安田 裕信 / リ・ジョンウ", "points": 4 }
  ],
  "races": [
    {
      "round": 1,
      "name": "OKAYAMA GT 300km RACE",
      "circuit": "岡山国際サーキット",
      "country": "JP",
      "trackImage":"maps/okayama.png",
      "date": "2026-04-12",
      "sessions": [
        {
          "label": "公式練習",
          "date": "2026-04-11",
          "time": "9:30"
        },
        {
          "label": "予選",
          "date": "2026-04-11",
          "time": "14:00"
        },
        {
          "label": "決勝",
          "date": "2026-04-19",
          "time": "13:20"
        }
      ]
    },
    {
      "round": 2,
      "name": "FUJI GT 3Hours RACE GW SPECIAL",
      "circuit": "富士スピードウェイ",
      "country": "JP",
      "trackImage":"maps/fuji.png",
      "date": "2026-05-04",
      "sessions": [
        {
          "label": "公式練習",
          "date": "2026-05-03",
          "time": "10:30"
        },
        {
          "label": "予選",
          "date": "2026-05-03",
          "time": "14:20"
        },
        {
          "label": "決勝",
          "date": "2026-05-04",
          "time": "14:00"
        }
      ]
    },
    {
      "round": 3,
      "name": "MALAYSIA GT 300km RACE driven by TOYOTA GAZOO RACING(2027年へ延期)",
      "circuit": "セパン・インターナショナル・サーキット",
      "country": "MY",
      "trackImage":"maps/sepang.png",
      "date": "2026-06-21",
      "sessions": [
        {
          "label": "公式練習",
          "date": "2026-06-20",
          "time": "2027年へ延期"
        },
        {
          "label": "予選",
          "date": "2026-06-20",
          "time": "2027年へ延期"
        },
        {
          "label": "決勝",
          "date": "2026-06-21",
          "time": "2027年へ延期"
        }
      ]
    },
    {
      "round": 4,
      "name": "FUJI GT 300km RACE",
      "circuit": "富士スピードウェイ",
      "country": "JP",
      "trackImage":"maps/fuji.png",
      "date": "2026-08-01",
      "sessions": [
        {
          "label": "公式練習",
          "date": "2026-08-01",
          "time": "10:30"
        },
        {
          "label": "予選",
          "date": "2026-08-01",
          "time": "14:20"
        },
        {
          "label": "決勝",
          "date": "2026-08-02",
          "time": "13:30"
        }
      ]
    },
    {
      "round": 5,
      "name": "SUZUKA GT 300km RACE",
      "circuit": "鈴鹿サーキット",
      "country": "JP",
      "trackImage":"maps/suzuka.png",
      "date": "2026-08-23",
      "sessions": [
        {
          "label": "公式練習",
          "date": "2026-08-22",
          "time": "9:45"
        },
        {
          "label": "予選",
          "date": "2026-08-22",
          "time": "15:30"
        },
        {
          "label": "決勝",
          "date": "2026-08-23",
          "time": "13:30"
        }
      ]
    },
    {
      "round": 6,
      "name": "SUGO GT 300km RACE",
      "circuit": "スポーツランドSUGO",
      "country": "JP",
      "trackImage":"maps/sugo.png",
      "date": "2026-09-20",
      "sessions": [
        {
          "label": "公式練習",
          "date": "2026-09-19",
          "time": "未定"
        },
        {
          "label": "予選",
          "date": "2026-09-19",
          "time": "未定"
        },
        {
          "label": "決勝",
          "date": "2026-09-20",
          "time": "未定"
        }
      ]
    },
    {
      "round": 7,
      "name": "AUTOPOLIS",
      "circuit": "オートポリス",
      "country": "JP",
      "trackImage":"maps/autopolis.png",
      "date": "2026-10-18",
      "sessions": [
        {
          "label": "公式練習",
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
      "name": "MOTEGI",
      "circuit": "モビリティリゾートもてぎ",
      "country": "JP",
      "trackImage":"maps/motegi.png",
      "date": "2026-11-08",
      "sessions": [
        {
          "label": "公式練習",
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
