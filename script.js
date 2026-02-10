'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu');
  const burgerBtn = document.querySelector('.burger');
  const blackKey = document.querySelector('.burger__black-key');

  const menuOpenSound = new Audio('/sounds/do.mp3');
  const menuCloseSound = new Audio('/sounds/re.mp3');

  burgerBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');

    if (isOpen) {
      blackKey.classList.add('down');
      menuOpenSound.currentTime = 0;
      menuOpenSound.play();
    } else {
      blackKey.classList.remove('down');
      menuCloseSound.currentTime = 0;
      menuCloseSound.play();
    }
  });

  document.querySelectorAll('.header__menu-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    blackKey.classList.remove('down');
  });
});

});
