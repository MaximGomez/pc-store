console.log('3');

window.onload = function() {
  let preloader = document.getElementById('preloader');

  preloader.classList.add('hide-preloader');
  setTimeout(function() {
    preloader.classList.add('preloader-hidden')
  }, 950)
}