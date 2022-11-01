i18next.init(
  {
    lng: selectedLanguage ? selectedLanguage : "ko",
    debug: false,
    resources: {
      ko: {
        translation: {
          text01_1: "&#10004; 본사(강남본점)",
          text01_2: "오디오시 요거트<br>서울 강남구 역삼로 133",
          text01_3: "&#10004; 운영시간",
          text01_4: "매일 10:00 - 21:30",
          text02_1: "&#10004; 왕십리점",
          text02_3: "오디오시 요거트<br>서울 왕십리로 21길 4, 2층",
          text02_4: "&#10004; 운영시간",
          text02_5: "매일 10:00 - 22:00",
        },
      },
      en: {
        translation: {
          text01_1: "&#10004; Head Office",
          text01_2:
            "ODOC Yogurt<br>133, Yeoksam-ro, Gangnam-gu, <br>Seoul, Republic of Korea<br>06244",
          text01_3: "&#10004; Shop Hours",
          text01_4: "Everyday 10:00 - 21:30",
          text02_1: "&#10004; Wangsipri Branch",
          text02_3:
            "ODOC Yogurt<br>2nd flr, 4, Wangsimni-ro 21-gil,<br>Seongdong-gu,<br>Seoul, Republic of Korea<br>04715",
          text02_4: "&#10004; Shop Hours",
          text02_5: "Everyday 10:00 - 22:00",
        },
      },
    },
  },
  function (err, t) {
    if (err) {
      console.error(err);
    } else {
      updateContent();
    }
  }
);

function updateContent() {
  document.getElementById("text01_1").innerHTML = i18next.t("text01_1");
  document.getElementById("text01_2").innerHTML = i18next.t("text01_2");
  document.getElementById("text01_3").innerHTML = i18next.t("text01_3");
  document.getElementById("text01_4").innerHTML = i18next.t("text01_4");
  document.getElementById("text02_1").innerHTML = i18next.t("text02_1");
  document.getElementById("text02_3").innerHTML = i18next.t("text02_3");
  document.getElementById("text02_4").innerHTML = i18next.t("text02_4");
  document.getElementById("text02_5").innerHTML = i18next.t("text02_5");
}
