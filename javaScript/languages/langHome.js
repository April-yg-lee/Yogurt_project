i18next.init(
  {
      lng: selectedLanguage ? selectedLanguage : "ko",
      debug: true,
      resources: {
          ko: {
              translation: {
                  text02_1: "하루 한입, 건강 한스푼",
                  text02_2: "ODOC YOGURT",
                  text02_3: "주문하기",
                  text03_1: "요거트의 여섯가지 효능",
                  text03_2: "중요한 영양소가 풍부하다.",
                  text03_3: "단백질함량이 높다.",
                  text03_4: "소화기능에 좋다.",
                  text03_5: "면역력을 증진시킨다.",
                  text03_6: "심혈관 질환을 예방한다.",
                  text03_7: "다이어트에 도움이 된다.",
                  text03_8: "관련 기사 읽어보기"
              }
          },
          en: {
              translation: {
                  text02_1: "BOOST YOUR BODY",
                  text02_2: "WITH ODOC YOGURT",
                  text02_3: "ORDER NOW",
                  text03_1: "Six health benefits of yogurt",
                  text03_2: "Rich in important nutrients.",
                  text03_3: "High in protein.",
                  text03_4: "Good for digestive health.",
                  text03_5: "Strengthen your immune system.",
                  text03_6: "Benefit healthy blood pressure.",
                  text03_7: "Promote weight management.",
                  text03_8: "Read News Article"
              }
          },
      }
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
  document.getElementById("text02_1").innerHTML = i18next.t("text02_1");
  document.getElementById("text02_2").innerHTML = i18next.t("text02_2");
  document.getElementById("text02_3").innerHTML = i18next.t("text02_3");
  document.getElementById("text03_1").innerHTML = i18next.t("text03_1");
  document.getElementById("text03_2").innerHTML = i18next.t("text03_2");
  document.getElementById("text03_3").innerHTML = i18next.t("text03_3");
  document.getElementById("text03_4").innerHTML = i18next.t("text03_4");
  document.getElementById("text03_5").innerHTML = i18next.t("text03_5");
  document.getElementById("text03_6").innerHTML = i18next.t("text03_6");
  document.getElementById("text03_7").innerHTML = i18next.t("text03_7");
  document.getElementById("text03_8").innerHTML = i18next.t("text03_8");
}

