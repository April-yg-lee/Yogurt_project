let selectedLanguage = "";
if (sessionStorage.getItem("selectedLanguage")) {
  selectedLanguage = sessionStorage.getItem("selectedLanguage");
}

i18next.on("languageChanged", () => {
  updateContent();
});

// When you click 'language', language's gonna toggle
function settingForChangingLanguage() {
  const viewLanguage = document.querySelectorAll(".selectLanguage");
  const selectHome = document.querySelectorAll(".selectHome");
  const selectOurStory = document.querySelectorAll(".selectOurStory");
  const selectMenu = document.querySelectorAll(".selectMenu");
  const selectLocation = document.querySelectorAll(".selectLocation");
  const selectContact = document.querySelectorAll(".selectContact");

  if (viewLanguage[0].textContent === "English") {
    sessionStorage.setItem("selectedLanguage", "en");
    selectedLanguage = "en";
    viewLanguage[0].innerHTML = "Korean";
    viewLanguage[1].innerHTML = "Korean";
    selectHome[0].innerHTML = "Home";
    selectHome[1].innerHTML = "Home";
    selectOurStory[0].innerHTML = "Our Story";
    selectOurStory[1].innerHTML = "Our Story";
    selectMenu[0].innerHTML = "Menu";
    selectMenu[1].innerHTML = "Menu";
    selectLocation[0].innerHTML = "Location";
    selectLocation[1].innerHTML = "Location";
    selectContact[0].innerHTML = "Contact";
    selectContact[1].innerHTML = "Contact";
  } else {
    sessionStorage.setItem("selectedLanguage", "ko");
    selectedLanguage = "ko";
    viewLanguage[0].innerHTML = "English";
    viewLanguage[1].innerHTML = "English";
    selectHome[0].innerHTML = "홈";
    selectHome[1].innerHTML = "홈";
    selectOurStory[0].innerHTML = "브랜드";
    selectOurStory[1].innerHTML = "브랜드";
    selectMenu[0].innerHTML = "메뉴&주문";
    selectMenu[1].innerHTML = "메뉴&주문";
    selectLocation[0].innerHTML = "위치";
    selectLocation[1].innerHTML = "위치";
    selectContact[0].innerHTML = "문의하기";
    selectContact[1].innerHTML = "문의하기";
  }
  i18next.changeLanguage(selectedLanguage);
}

// When you move to another tab, stay in same language
function settingForTextOnNavibar() {
  const viewLanguage = document.querySelectorAll(".selectLanguage");
  const selectHome = document.querySelectorAll(".selectHome");
  const selectOurStory = document.querySelectorAll(".selectOurStory");
  const selectMenu = document.querySelectorAll(".selectMenu");
  const selectLocation = document.querySelectorAll(".selectLocation");
  const selectContact = document.querySelectorAll(".selectContact");

  if (selectedLanguage === "en") {
    viewLanguage[0].innerHTML = "Korean";
    viewLanguage[1].innerHTML = "Korean";
    selectHome[0].innerHTML = "Home";
    selectHome[1].innerHTML = "Home";
    selectOurStory[0].innerHTML = "Our Story";
    selectOurStory[1].innerHTML = "Our Story";
    selectMenu[0].innerHTML = "Menu";
    selectMenu[1].innerHTML = "Menu";
    selectLocation[0].innerHTML = "Location";
    selectLocation[1].innerHTML = "Location";
    selectContact[0].innerHTML = "Contact";
    selectContact[1].innerHTML = "Contact";
  } else {
    viewLanguage[0].innerHTML = "English";
    viewLanguage[1].innerHTML = "English";
    selectHome[0].innerHTML = "홈";
    selectHome[1].innerHTML = "홈";
    selectOurStory[0].innerHTML = "브랜드";
    selectOurStory[1].innerHTML = "브랜드";
    selectMenu[0].innerHTML = "메뉴&주문";
    selectMenu[1].innerHTML = "메뉴&주문";
    selectLocation[0].innerHTML = "위치";
    selectLocation[1].innerHTML = "위치";
    selectContact[0].innerHTML = "문의하기";
    selectContact[1].innerHTML = "문의하기";
  }
}

// Language setting control whenever loading the page
window.onload = function () {
  const viewLanguage = document.querySelectorAll(".selectLanguage");
  if (viewLanguage) {
    setTimeout(settingForTextOnNavibar, 100);
  }
};

// Fade in-out whenever scroll up and down
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

// Top-up menu control
function toTop() {
  window.scrollTo(0, 0);
}

// Toggle hamburger menu
let open = false;
function toggleHamburger() {
  const menu = document.getElementById("overlay");

  if (!open) {
    hamburger.classList.add("open");
    menu.classList.add("menu");
  } else {
    hamburger.classList.remove("open");
    menu.classList.remove("menu");
  }
  open = !open;
}
