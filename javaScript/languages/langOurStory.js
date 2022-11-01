i18next.init(
  {
    lng: selectedLanguage ? selectedLanguage : "ko",
    debug: false,
    resources: {
      ko: {
        translation: {
          text02_1:
            "ODOC는 우유와 특별한 인연이 있습니다. 10년간 우유회사에 근무한 경력과 집안 목장운영을 하면서 얻은 노하우로 설립되었습니다. <br><br> 매장손님들과 오랜기간 교감하고 테스트하면서 모든메뉴를 만들었습니다.",
          text02_2:
            "ODOC의 창업취지는 <span class='skyblue'>'제대로 된 그릭 요거트를 알리자'</span>는 것입니다. 수 많은 프렌차이즈에서 제공하는 요거트는 발효하여 만든 요거트가 아닌 파우더+우유로 요거트 향을 낸 것입니다. <br><br>ODOC는 <span class='skyblue'>무설탕, 무첨가제를 원칙</span>으로 세가지 요거트를 매장에서 직접 제조합니다. 매장에서 만드는 모든 메뉴에는 플레인요거트가 기본으로 200g씩 들어가있는 정통 발효 방식의 요거트입니다.",
          text03_1:
            "<span class='deepgreen'>1) 원가 상승이 있더라도 원재료를 정직하게 사용합니다.</span><br> ODOC 요거트에는 생우유, 동물성 생크림(국내산), 레몬즙(이태리), 천일염으로만 제조하며 멸균우유나 분유, 식물성생크림, 수입산 유크림을 쓰지 않습니다.",
          text03_2:
            "<span class='deepgreen'>2) 유청이 생기지 않도록 제대로 발효합니다.</span><br> 일반 리코타치즈 제조시간 보다 몇 배는 더 걸리더라도 그릭요거트 유청 제거 노하우를 적용하여 장시간 보관해도 유청이 생기지 않도록 만듭니다.",
          text03_3:
            "<span class='deepgreen'>3) ODOC 요거트만의 리코타치즈를 만듭니다.</span><br>리코타 맛이 다 비슷하리라고 생각하겠지만 그렇지만은 않습니다. ODOC 꾸덕리코타치즈는 처음에는 별맛이 없는 듯 하면서 2~3초 후에 풍부한 우유향의 고소함이 느껴지면서 끝맛은 담백하며 깔끔합니다.",
          text03_4:
            "<span class='deepgreen'>4) ODOC는 고객과의 커뮤니케이션을 우선으로 합니다.</span><br> 언제든 매장으로 오셔서 ODOC 요거트를 맛보실 수 있습니다. ODOC는 모두 함께 건강해지기 위해 고객의 의견에 항상 귀 기울이고, 연구합니다.",
        },
      },
      en: {
        translation: {
          text02_1:
            "ODOC has a special bond with milk based on 10 years experience working at a milk company and family-farm. <br><br>With this technical know-how, ODOC created its menu communicating and taste-testing with customers.",
          text02_2:
            "ODOC's main goal is <span class='skyblue'>'Let people feel REAL yogurt'.</span>Many franchise cafes imitate yogurt's flavor with yogurt powder and milk, not fermenting the yogurt.<br><br>ODOC makes authentic yogurt directly in-house with <span class='skyblue'>no sugar and no artificial additives.</span>",
          text03_1:
            "<span class='deepgreen'>1) ODOC always uses the same high quality ingredients, regardless of inflation.</span><br> ODOC makes Yogurt with raw milk, heavy cream made in Korea, Italian lemon juice, and sea salt. (No sterilizing milk. No imported vegetable whipped cream.)",
          text03_2:
            "<span class='deepgreen'>2)ODOC yogurt doesn't separate. </span><br> Using our secret technique, It can be stored for long periods of time without the whey separating out.",
          text03_3:
            "<span class='deepgreen'>3) ODOC invented one-of-a-kind Ricotta cheese.</span><br> When you put ODOC Ricotta cheese in your mouth, you can taste rich milk flavor after 2-3 seconds and the more you chew, the more nutty flavor you get. In the end, it tastes very light.",
          text03_4:
            " <span class='deepgreen'>4) ODOC communicates with customers everyday. </span><br> You can come by and try fresh yogurt anytime. Let's delve into the yogurt world for our health!",
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
  document.getElementById("text02_1").innerHTML = i18next.t("text02_1");
  document.getElementById("text02_2").innerHTML = i18next.t("text02_2");
  document.getElementById("text03_1").innerHTML = i18next.t("text03_1");
  document.getElementById("text03_2").innerHTML = i18next.t("text03_2");
  document.getElementById("text03_3").innerHTML = i18next.t("text03_3");
  document.getElementById("text03_4").innerHTML = i18next.t("text03_4");
}
