// console.log('1')

const sr = ScrollReveal ({
  distance: '60px',
  duration: 1500, 
  delay: 400,
  reset: false
})

//

sr.reveal(`.header__logo, .header__menu, .header__btn, .header__burger-btn`, {delay: 1000, origin: 'top'})
sr.reveal(`.header__footer-wrap`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.header__caption-content`, {delay: 1000, origin: 'left'})

//

sr.reveal(`.about__us-image`, {delay: 1000, origin: 'left'})
sr.reveal(`.about__us-text `, {delay: 1000, origin: 'right'})

//

sr.reveal(`.caption`, {delay: 1000, origin: 'left'})

sr.reveal(`.road__container-first`, {delay: 1000, origin: 'left'})
sr.reveal(`.road__container-second`, {delay: 1200, origin: 'left'})
sr.reveal(`.road__container-third`, {delay: 1400, origin: 'left'})
sr.reveal(`.road__container-fourth`, {delay: 1600, origin: 'left'})

//

sr.reveal(`.ability__content-title`, {delay: 1000, origin: 'top'})

sr.reveal(`.ability__container`, {delay: 1000, origin: 'right'})

//

sr.reveal(`.parents__container-first`, {delay: 1000, origin: 'left'})
sr.reveal(`.parents__container-second`, {delay: 1200, origin: 'top'})
sr.reveal(`.parents__container-third`, {delay: 1000, origin: 'right'})
sr.reveal(`.parents__container-fourth`, {delay: 1200, origin: 'right'})
sr.reveal(`.parents__container-fifth`, {delay: 1400, origin: 'left'})
sr.reveal(`.parents__container-sixth`, {delay: 1000, origin: 'left'})
sr.reveal(`.parents__container-seventh`, {delay: 1200, origin: 'bottom'})
sr.reveal(`.parents__container-eighth`, {delay: 1000, origin: 'right'})

//

sr.reveal(`.system__content-caption`, {delay: 1000, origin: 'top'})

//

sr.reveal(`.system__line`, {delay: 2000, origin: 'bottom'})

sr.reveal(`.system__container-first`, {delay: 1100, origin: 'left'})
sr.reveal(`.system__container-second`, {delay: 1300, origin: 'left'})
sr.reveal(`.system__container-third`, {delay: 1500, origin: 'left'})
sr.reveal(`.system__container-fourth`, {delay: 1700, origin: 'left'})
sr.reveal(`.system__container-fifth`, {delay: 1200, origin: 'right'})
sr.reveal(`.system__container-sixth`, {delay: 1400, origin: 'right'})
sr.reveal(`.system__container-seventh`, {delay: 1600, origin: 'right'})

//

sr.reveal(`.col__content`, {delay: 1000, origin: 'left'})

//

sr.reveal(`.footer__content-title , .footer__content-description  , .footer__content-form , .footer__content-links`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.footer__author`, {delay: 1200, origin: 'top'})