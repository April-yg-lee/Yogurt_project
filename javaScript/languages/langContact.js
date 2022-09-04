i18next.init(
  {
      lng: selectedLanguage ? selectedLanguage : "ko",
      debug: false,
      resources: {
          ko: {
              translation: {
                text01_1: "문의사항을 남겨주시면<br>최대한 빠른시간내로 답변하겠습니다.",
                text01_2: "문의사항<span class='required_star'>*</span>",
                text01_3: "프랜차이즈/가맹점",
                text01_4: "일반문의",
                text01_5: "제품관련",
                text01_6: "성함<span class='required_star'>*</span>",
                text01_7: "이메일주소<span class='required_star'>*</span>",
                text01_8: "메세지<span class='required_star'>*</span>"
              }
          },
          en: {
              translation: {
                text01_1: "How can I help you &#10068;",
                text01_2: "Subject<span class='required_star'>*</span>",
                text01_3: "Franchise Inquiry",
                text01_4: "General Inquiry",
                text01_5: "Product Related",
                text01_6: "Name<span class='required_star'>*</span>",
                text01_7: "Email<span class='required_star'>*</span>",
                text01_8: "Message<span class='required_star'>*</span>"
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
  document.getElementById("text01_1").innerHTML = i18next.t("text01_1");
  document.getElementById("text01_2").innerHTML = i18next.t("text01_2");
  document.getElementById("text01_3").innerHTML = i18next.t("text01_3");
  document.getElementById("text01_4").innerHTML = i18next.t("text01_4");
  document.getElementById("text01_5").innerHTML = i18next.t("text01_5");
  document.getElementById("text01_6").innerHTML = i18next.t("text01_6");
  document.getElementById("text01_7").innerHTML = i18next.t("text01_7");
  document.getElementById("text01_8").innerHTML = i18next.t("text01_8");
  
 
}

