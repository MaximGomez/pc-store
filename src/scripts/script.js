console.log('2');

const menu = document.querySelector(".header__burger-menu");
const burger = document.querySelector(".header__burger-btn");
const body = document.body;


burger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("open");
  body.classList.toggle("noscroll");
  burger.classList.toggle("active");
  // nav.classList.toggle("background");
});

window.addEventListener('scroll', () => {
  let   scrolled = window.scrollY,
        nav      = document.querySelector('.header__nav-wrap');

  if (scrolled >= 20) { nav.style.background='rgba(0, 0, 0, 0.8)'; }
  else { nav.style.background='none'; }}
)

