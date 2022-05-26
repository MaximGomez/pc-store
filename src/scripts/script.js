'use strict'

document.addEventListener('DOMContentLoaded', function(e) {

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

  // ==========  SHOW SCROLL UP ========== // 

  function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    const line = document.querySelector('.system__line');

    if(this.scrollY >= 200) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', scrollUp)

})
//

// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop + 150
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.header__menu  a[href*=' + sectionId + ']')
//         }else{
//             document.querySelector('.header__menu  a[href*=' + sectionId + ']')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)