window.onload = function () {
  const upArrow = document.querySelector(".up_arrow");
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
