i18next.init(
  {
    lng: selectedLanguage ? selectedLanguage : "ko",
    debug: true,
    resources: {
      ko: {
        translation: {
          text1: "홈",
          text2: "브랜드",
          text3: "메뉴&주문",
          text4: "위치",
          text5: "문의하기",
        },
      },
      en: {
        translation: {
          text1: "Home",
          text2: "Our Story",
          text3: "Menu",
          text4: "Location",
          text5: "Contact"
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
  document.getElementById("text1").innerHTML = i18next.t("text1");
  document.getElementById("text2").innerHTML = i18next.t("text2");
  document.getElementById("text3").innerHTML = i18next.t("text3");
  document.getElementById("text4").innerHTML = i18next.t("text4");
  document.getElementById("text5").innerHTML = i18next.t("text5");
 
}
