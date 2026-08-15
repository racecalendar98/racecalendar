/* ==========================================================================
   F1（Formula 1） のデータ
   --------------------------------------------------------------------------
   このファイル1つで「Formula 1」に関する全データ（レース日程・
   セッションのひな形・順位表）を持つ。読み込まれると window.SERIES_DATA
   という配列にこのシリーズの情報を1つ追加する。
   index.html で他のシリーズのファイルと一緒に、script.js より先に読み込む。

   sessionTemplate … 各レースに sessions（個別の正確な日時）が無い場合に
                      使う汎用スケジュールのひな形。無ければ null。
   standings       … 順位表のサンプルデータ。
   races           … レース本体の配列。
   ========================================================================== */
window.SERIES_DATA = window.SERIES_DATA || [];
window.SERIES_DATA.push({
  "id": "f1",
  "name": "Formula 1",
  "color": "--red",
  "carType": "openwheel",
  "carImage": "../images/f1.png",
  "standings": [
    {
      "pos": 1,
      "name": "M. コスタ",
      "team": "Team Apex",
      "points": 284
    },
    {
      "pos": 2,
      "name": "L. ヴァレンティン",
      "team": "Nova Racing",
      "points": 261
    },
    {
      "pos": 3,
      "name": "R. 岡部",
      "team": "Zenith GP",
      "points": 233
    },
    {
      "pos": 4,
      "name": "K. シュミット",
      "team": "Team Apex",
      "points": 198
    },
    {
      "pos": 5,
      "name": "A. モラレス",
      "team": "Vector Motorsport",
      "points": 171
    }
  ],
  "races": [
    {
      "round": 1,
      "name": "オーストラリアGP",
      "circuit": "アルバート・パーク・サーキット",
      "country": "AU",
      "trackImage":"../maps/australia.png",
      "date": "2027-03-08",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-03-06",
          "time": "10:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-03-06", 
          "time": "14:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-03-07",
          "time": "10:30"
        },
        {
          "label": "予選",
          "date": "2027-03-07",
          "time": "14:00"
        },
        {
          "label": "決勝",
          "date": "2027-03-08",
          "time": "13:00"
        }
      ]
    },
    {
      "round": 2,
      "name": "中国GP",
      "circuit": "上海・インターナショナル・サーキット",
      "country": "CN",
      "trackImage":"../maps/china.png",
      "date": "2027-03-15",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-03-13",
          "time": "12:30"
        },
        {
          "label": "スプリント予選",
          "date": "2027-03-13",
          "time": "16:30"
        },
        {
          "label": "スプリント決勝",
          "date": "2027-03-14",
          "time": "12:00"
        },
        {
          "label": "予選",
          "date": "2027-03-14",
          "time": "16:00"
        },
        {
          "label": "決勝",
          "date": "2027-03-15",
          "time": "16:00"
        }
      ]
    },
    {
      "round": 3,
      "name": "日本GP",
      "circuit": "鈴鹿サーキット",
      "country": "JP",
      "trackImage":"../maps/suzuka.png",
      "date": "2027-03-29",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-03-27",
          "time": "11:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-03-27",
          "time": "15:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-03-28",
          "time": "11:30"
        },
        {
          "label": "予選",
          "date": "2027-03-28",
          "time": "15:00"
        },
        {
          "label": "決勝",
          "date": "2027-03-29",
          "time": "14:00"
        }
      ]
    },
    {
      "round": 4,
      "name": "マイアミGP",
      "circuit": "マイアミ・インターナショナル・オートドローム",
      "country": "US",
      "trackImage":"../maps/miami.png",
      "date": "2027-05-04",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-05-02",
          "time": "1:00"
        },
        {
          "label": "スプリント予選",
          "date": "2027-05-02",
          "time": "5:30"
        },
        {
          "label": "スプリント決勝",
          "date": "2027-05-03",
          "time": "1:00"
        },
        {
          "label": "予選",
          "date": "2027-05-03",
          "time": "5:00"
        },
        {
          "label": "決勝",
          "date": "2027-05-04",
          "time": "2:00"
        }
      ]
    },
    {
      "round": 5,
      "name": "カナダGP",
      "circuit": "ジル・ヴィルヌーヴ・サーキット",
      "country": "CA",
      "trackImage":"../maps/canada.png",
      "date": "2027-05-25",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-05-23",
          "time": "1:30"
        },
        {
          "label": "スプリント予選",
          "date": "2027-05-23",
          "time": "5:30"
        },
        {
          "label": "スプリント決勝",
          "date": "2027-05-24",
          "time": "1:00"
        },
        {
          "label": "予選",
          "date": "2027-05-24",
          "time": "5:00"
        },
        {
          "label": "決勝",
          "date": "2027-05-25",
          "time": "5:00"
        }
      ]
    },
    {
      "round": 6,
      "name": "モナコGP",
      "circuit": "モンテカルロ市街地コース",
      "country": "MC",
      "trackImage":"../maps/monaco.png",
      "date": "2027-06-07",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-06-05",
          "time": "20:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-06-06",
          "time": "0:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-06-06",
          "time": "19:30"
        },
        {
          "label": "予選",
          "date": "2027-06-06",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-06-07",
          "time": "22:00"
        }
      ]
    },
    {
      "round": 7,
      "name": "カタルーニャ GP",
      "circuit": "カタルーニャ・サーキット",
      "country": "ES",
      "trackImage":"../maps/spain.png",
      "date": "2027-06-14",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-06-12",
          "time": "13:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-06-12",
          "time": "17:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-06-13",
          "time": "12:30"
        },
        {
          "label": "予選",
          "date": "2027-06-13",
          "time": "16:00"
        },
        {
          "label": "決勝",
          "date": "2027-06-14",
          "time": "15:00"
        }
      ]
    },
    {
      "round": 8,
      "name": "オーストリアGP",
      "circuit": "レッドブルリンク",
      "country": "AT",
      "trackImage":"../maps/austria.png",
      "date": "2027-06-28",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-06-26",
          "time": "20:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-06-27",
          "time": "0:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-06-27",
          "time": "19:30"
        },
        {
          "label": "予選",
          "date": "2027-06-27",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-06-28",
          "time": "22:00"
        }
      ]
    },
    {
      "round": 9,
      "name": "イギリスGP",
      "circuit": "シルバーストーン・サーキット",
      "country": "GB",
      "trackImage":"../maps/silverstone.png",
      "date": "2027-07-05",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-07-03",
          "time": "20:30"
        },
        {
          "label": "スプリント予選",
          "date": "2027-07-04",
          "time": "0:30"
        },
        {
          "label": "スプリント決勝",
          "date": "2027-07-04",
          "time": "20:00"
        },
        {
          "label": "予選",
          "date": "2027-07-05",
          "time": "0:00"
        },
        {
          "label": "決勝",
          "date": "2027-07-05",
          "time": "23:00"
        }
      ]
    },
    {
      "round": 10,
      "name": "ベルギーGP",
      "circuit": "スパ・フランコルシャン",
      "country": "BE",
      "trackImage":"../maps/spa.png",
      "date": "2027-07-19",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-07-17",
          "time": "20:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-07-18",
          "time": "0:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-07-18",
          "time": "19:30"
        },
        {
          "label": "予選",
          "date": "2027-07-18",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-07-19",
          "time": "22:00"
        }
      ]
    },
    {
      "round": 11,
      "name": "ハンガリーGP",
      "circuit": "ハンガロリンク",
      "country": "HU",
      "trackImage":"../maps/hungary.png",
      "date": "2027-07-26",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-07-24",
          "time": "20:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-07-25",
          "time": "0:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-07-25",
          "time": "19:30"
        },
        {
          "label": "予選",
          "date": "2027-07-25",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-07-26",
          "time": "22:00"
        }
      ]
    },
    {
      "round": 12,
      "name": "オランダGP",
      "circuit": "ザントフォールト・サーキット",
      "country": "NL",
      "trackImage":"../maps/netherlands.png",
      "date": "2027-08-23",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-08-21",
          "time": "19:30"
        },
        {
          "label": "スプリント予選",
          "date": "2027-08-21",
          "time": "23:30"
        },
        {
          "label": "スプリント決勝",
          "date": "2027-08-22",
          "time": "19:00"
        },
        {
          "label": "予選",
          "date": "2027-08-22",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-08-23",
          "time": "22:00"
        }
      ]
    },
    {
      "round": 13,
      "name": "イタリアGP",
      "circuit": "モンツァ・サーキット",
      "country": "IT",
      "trackImage":"../maps/monza.png",
      "date": "2027-09-06",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-09-04",
          "time": "19:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-09-04",
          "time": "23:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-09-05",
          "time": "19:30"
        },
        {
          "label": "予選",
          "date": "2027-09-05",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-09-06",
          "time": "22:00"
        }
      ]
    },
    {
      "round": 14,
      "name": "スペインGP",
      "circuit": "サーキット・デ・マドリンク",
      "country": "ES",
      "trackImage":"../maps/madrid.png",
      "date": "2027-09-13",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-09-11",
          "time": "20:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-09-12",
          "time": "0:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-09-12",
          "time": "19:30"
        },
        {
          "label": "予選",
          "date": "2027-09-12",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-09-13",
          "time": "22:00"
        }
      ]
    },
    {
      "round": 15,
      "name": "アゼルバイジャンGP",
      "circuit": "バクー市街地サーキット",
      "country": "AZ",
      "trackImage":"../maps/baku.png",
      "date": "2027-09-26",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-09-24",
          "time": "17:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-09-24",
          "time": "21:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-09-25",
          "time": "17:30"
        },
        {
          "label": "予選",
          "date": "2027-09-25",
          "time": "21:00"
        },
        {
          "label": "決勝",
          "date": "2027-09-26",
          "time": "20:00"
        }
      ]
    },
    {
      "round": 16,
      "name": "バーレーンGP",
      "circuit": "セパン・サーキット",
      "country": "MY",
      "trackImage":"../maps/sepang.png",
      "date": "2027-10-04",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-10-02",
          "time": "13:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-10-02",
          "time": "17:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-10-03",
          "time": "13:30"
        },
        {
          "label": "予選",
          "date": "2027-10-03",
          "time": "17:00"
        },
        {
          "label": "決勝",
          "date": "2027-10-04",
          "time": "16:00"
        }
      ]
    },    
    {
      "round": 17,
      "name": "シンガポールGP",
      "circuit": "マリーナ・ベイ・ストリートサーキット",
      "country": "SG",
      "trackImage":"../maps/singapore.png",
      "date": "2027-10-11",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-10-09",
          "time": "17:30"
        },
        {
          "label": "スプリント予選",
          "date": "2027-10-09",
          "time": "21:30"
        },
        {
          "label": "スプリント決勝",
          "date": "2027-10-10",
          "time": "18:00"
        },
        {
          "label": "予選",
          "date": "2027-10-10",
          "time": "22:00"
        },
        {
          "label": "決勝",
          "date": "2027-10-11",
          "time": "21:00"
        }
      ]
    },
    {
      "round": 18,
      "name": "アメリカGP",
      "circuit": "サーキット・オブ・ジ・アメリカズ",
      "country": "US",
      "trackImage":"../maps/austin.png",
      "date": "2027-10-26",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-10-24",
          "time": "2:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-10-24",
          "time": "6:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-10-25",
          "time": "2:00"
        },
        {
          "label": "予選",
          "date": "2027-10-25",
          "time": "6:30"
        },
        {
          "label": "決勝",
          "date": "2027-10-26",
          "time": "4:00"
        }
      ]
    },
    {
      "round": 19,
      "name": "メキシコGP",
      "circuit": "エルマノス・ロドリゲス・サーキット",
      "country": "MX",
      "trackImage":"../maps/mexico.png",
      "date": "2027-11-02",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-10-31",
          "time": "3:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-10-31",
          "time": "7:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-11-01",
          "time": "2:30"
        },
        {
          "label": "予選",
          "date": "2027-11-01",
          "time": "6:00"
        },
        {
          "label": "決勝",
          "date": "2027-11-02",
          "time": "5:00"
        }
      ]
    },
    {
      "round": 20,
      "name": "ブラジルGP",
      "circuit": "インテルラゴス・サーキット",
      "country": "BR",
      "trackImage":"../maps/brazil.png",
      "date": "2027-11-09",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-11-06",
          "time": "23:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-11-07",
          "time": "3:30"
        },
        {
          "label": "フリー走行3",
          "date": "2027-11-07",
          "time": "23:00"
        },
        {
          "label": "予選",
          "date": "2027-11-08",
          "time": "3:00"
        },
        {
          "label": "決勝",
          "date": "2027-11-09",
          "time": "2:00"
        }
      ]
    },
    {
      "round": 21,
      "name": "ラスベガスGP",
      "circuit": "ラスベガス・ストリップ・サーキット",
      "country": "US",
      "trackImage":"../maps/lasvegas.png",
      "date": "2027-11-22",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-11-20",
          "time": "9:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-11-20",
          "time": "13:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-11-21",
          "time": "9:30"
        },
        {
          "label": "予選",
          "date": "2027-11-21",
          "time": "13:00"
        },
        {
          "label": "決勝",
          "date": "2027-11-22",
          "time": "13:00"
        }
      ]
    },
    {
      "round": 22,
      "name": "カタールGP",
      "circuit": "ルサイル・インターナショナル・サーキット",
      "country": "QA",
      "trackImage":"../maps/qatar.png",
      "date": "2027-11-30",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-11-27",
          "time": "22:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-11-28",
          "time": "2:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-11-28",
          "time": "23:30"
        },
        {
          "label": "予選",
          "date": "2027-11-29",
          "time": "3:00"
        },
        {
          "label": "決勝",
          "date": "2027-11-30",
          "time": "1:00"
        }
      ]
    },
    {
      "round": 23,
      "name": "アブダビGP",
      "circuit": "ヤス・マリーナ・サーキット",
      "country": "AE",
      "trackImage":"../maps/abu dhabi.png",
      "date": "2027-12-06",
      "sessions": [
        {
          "label": "フリー走行1",
          "date": "2027-12-04",
          "time": "18:30"
        },
        {
          "label": "フリー走行2",
          "date": "2027-12-04",
          "time": "22:00"
        },
        {
          "label": "フリー走行3",
          "date": "2027-12-05",
          "time": "19:30"
        },
        {
          "label": "予選",
          "date": "2027-12-05",
          "time": "23:00"
        },
        {
          "label": "決勝",
          "date": "2027-12-06",
          "time": "22:00"
        }
      ]
    }
  ]
});
