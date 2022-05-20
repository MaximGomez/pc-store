console.log('2')

const menu = document.querySelector("#burger__menu");
const popup = document.querySelector("#header__menu-popup");
const field = document.querySelector("#burger__field");
const body = document.body;
const nav = document.querySelector('.header__nav-wrap');

menu.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("open");
  field.classList.toggle("active");
  body.classList.toggle("noscroll");
  nav.classList.toggle("background");
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled >= 50)
  {
    nav.style.background='rgba(0, 0, 0, 0.8)';
  }
  else {
    nav.style.background='none';
}})

