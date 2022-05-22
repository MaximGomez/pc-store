// console.log('1')

// ScrollReveal().reveal('.header__title');

const sr = ScrollReveal ({
  distance: '60px',
  duration: 1500, 
  delay: 400,
  reset: false
})

sr.reveal(`.header__title , .header__menu`, {delay: 1000, interval: 500, origin: 'top'})
sr.reveal(`.header__logo , .header__footer-btn`, {delay: 1200, interval: 500, origin: 'left'})
sr.reveal(`.header__btn , .header__statistic-wrap`, {delay: 1200, interval: 500, origin: 'right'})
sr.reveal(`.header__participant-wrap , .header__timer`, {delay: 1200, interval: 500, origin: 'bottom'})

//

sr.reveal(`.about__us-image`, {delay: 1200, interval: 500, origin: 'left'})
sr.reveal(`.about__us-text`, {delay: 1200, interval: 500, origin: 'right'})

//

sr.reveal(`.quick__start-caption`, {delay: 1200, interval: 500, origin: 'top'})
sr.reveal(`.quick__start-road `, {delay: 1200, interval: 500, origin: 'bottom'})

//

sr.reveal(`.ability__content-title`, {delay: 1200, interval: 500, origin: 'top'})
sr.reveal(`.ability__container-first`, {delay: 1200, interval: 500, origin: 'left'})
sr.reveal(`.ability__container-third , .header__burger-btn`, {delay: 1200, interval: 500, origin: 'right'})
sr.reveal(`.ability__container-second`, {delay: 1200, interval: 500, origin: 'bottom'})

// partners

sr.reveal(`.partners__content-caption `, {delay: 1200, interval: 500, origin: 'left'})

sr.reveal(`.parents__container-first`, {delay: 1200, interval: 500, origin: 'left'})
sr.reveal(`.parents__container-second`, {delay: 1400, interval: 500, origin: 'top'})
sr.reveal(`.parents__container-third`, {delay: 1600, interval: 500, origin: 'right'})
sr.reveal(`.parents__container-fourth`, {delay: 1300, interval: 500, origin: 'right'})
sr.reveal(`.parents__container-fifth`, {delay: 1200, interval: 500, origin: 'left'})
sr.reveal(`.parents__container-sixth`, {delay: 1600, interval: 500, origin: 'left'})
sr.reveal(`.parents__container-seventh`, {delay: 1400, interval: 500, origin: 'bottom'})
sr.reveal(`.parents__container-eighth`, {delay: 1300, interval: 500, origin: 'right'})
