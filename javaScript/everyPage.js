let selectedLanguage = "";
if (sessionStorage.getItem("selectedLanguage")) {
  selectedLanguage = sessionStorage.getItem("selectedLanguage");
}

// const isKorean = navigator.language === "ko-KR";
// if (!selectedLanguage) {
//   selectedLanguage = isKorean ? "ko" : "en";
// }

i18next.on("languageChanged", () => {
  updateContent();
});

function settingForChangingLanguage() {
  const viewLanguage = document.querySelectorAll(".selectLanguage");

  if (viewLanguage[0].textContent === "English") {
    sessionStorage.setItem('selectedLanguage', 'en');
    selectedLanguage = "en";
    viewLanguage[0].innerHTML = "Korean";
    viewLanguage[1].innerHTML = "Korean";
  } else {
    sessionStorage.setItem('selectedLanguage', 'ko');
    selectedLanguage = "ko";
    viewLanguage[0].innerHTML = "English";
    viewLanguage[1].innerHTML = "English";

  }
  i18next.changeLanguage(selectedLanguage);
}

function settingForTextOnNavibar() {
  const viewLanguage1 = document.querySelectorAll(".selectLanguage");
  if (selectedLanguage === "en") {
    viewLanguage1[0].innerHTML = "Korean";
    viewLanguage1[1].innerHTML = "Korean";
  } else {
    viewLanguage1[0].innerHTML = "English";
    viewLanguage1[1].innerHTML = "English";
  }
}

window.onload = function () {
  const upArrow = document.querySelector(".up_arrow_mark");
  upArrow.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  (() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    let open = false;
  
    const change = () => {
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
      }
      open = !open;
    };
  
    hamburger.addEventListener("click", change);
  })();

  
  // 페이지 새로 로딩때마다 언어설정 텍스트(네비위치) 처리.
  settingForTextOnNavibar();
};

const items = document.querySelectorAll(".appear");

const active = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  });
};
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
  io2.observe(items[i]);
}
