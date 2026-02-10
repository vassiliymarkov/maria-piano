'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let burgerBtn = document.querySelector('.burger');

  let menuOpenSound = new Audio('/sounds/do.mp3');
  let menuCloseSound = new Audio('/sounds/re.mp3');

  let burgerBar1 = document.getElementById('burger__bar-1');
  let burgerBar2 = document.getElementById('burger__bar-2');
  let burgerBar3 = document.getElementById('burger__bar-3');
  let mobileMenu = document.querySelector('.header__menu');
  let body = document.querySelector('.body');

  burgerBtn.addEventListener('click', () => {
    let isOpen = mobileMenu.classList.toggle('open');
    burgerBar1.classList.toggle('clicked');
    burgerBar2.classList.toggle('clicked');
    burgerBar3.classList.toggle('clicked');
    body.classList.toggle('body-fixed');

    if (isOpen) {
      menuOpenSound.currentTime = 0;
      menuOpenSound.play();
    } else {
      menuCloseSound.currentTime = 0;
      menuCloseSound.play();
    }
  });


});

document.querySelectorAll('.header__menu-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    blackKey.classList.remove('down');
  });
});



/*   burgerBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');

    if (isOpen) {
      blackKey.classList.add('down');
      menuOpenSound.currentTime = 0;
      menuOpenSound.play();
    } else {
      blackKey.classList.remove('down');
      menuCloseSound.currentTime = 0;
      menuCloseSound.play();
    } */