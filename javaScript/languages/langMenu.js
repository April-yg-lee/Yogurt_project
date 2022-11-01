i18next.init(
  {
    lng: selectedLanguage ? selectedLanguage : "ko",
    debug: false,
    resources: {
      ko: {
        translation: {
          text01_1: "&#10004; 리코타 치즈",
          text01_2: "&#10004; 리코타 크림치즈",
          text02_1: "&#10004; 그래놀라 요거트",
          text02_2: "&#10004; 그릭 요거트",
          text02_3: "&#10004; 플레인 요거트",
          text02_4: "&#10004; 똥 요거트",
          text02_5: "&#10004; 무화과잼 요거트",
          text02_6: "&#10004; 블루베리 요거트",
          text02_7: "&#10004; 스테비아 요거트",
        },
      },
      en: {
        translation: {
          text01_1: "&#10004; Ricotta Cheese",
          text01_2: "&#10004; Ricotta Cream Cheese",
          text02_1: "&#10004; Granola Yogurt",
          text02_2: "&#10004; Greek Yogurt",
          text02_3: "&#10004; Plain Yogurt",
          text02_4: "&#10004; Poop Yogurt",
          text02_5: "&#10004; Fig Jam Yogurt",
          text02_6: "&#10004; Blueberry Yogurt",
          text02_7: "&#10004; Stevia Yogurt Ice-cream",
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
  document.getElementById("text02_1").innerHTML = i18next.t("text02_1");
  document.getElementById("text02_2").innerHTML = i18next.t("text02_2");
  document.getElementById("text02_3").innerHTML = i18next.t("text02_3");
  document.getElementById("text02_4").innerHTML = i18next.t("text02_4");
  document.getElementById("text02_5").innerHTML = i18next.t("text02_5");
  document.getElementById("text02_6").innerHTML = i18next.t("text02_6");
  document.getElementById("text02_7").innerHTML = i18next.t("text02_7");
}
