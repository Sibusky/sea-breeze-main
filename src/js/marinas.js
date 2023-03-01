import '../css/marinas.css';
import { Carousel } from './utils/carousel.js';

// Карусель
const bottomSlider = new Carousel('carousel', 244);

// Меню
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu__container');
const menuOpenButton = document.querySelector('.header__open-menu-button');
const menuCloseButton = document.querySelector('.menu__close-btn');
const switchThumb = document.querySelector('.menu__lang-switch-front');
const menuRuLang = document.querySelector('.menu__lang-ru');
const menuEnLang = document.querySelector('.menu__lang-en');

//Карусель

bottomSlider._setEventListeners();
bottomSlider._slideToNext();
bottomSlider._slideToPrev();

// Меню

function openMenu() {
  menu.classList.add('menu_opened');
  menuContainer.classList.add('menu__container_opened');

  // Подключаю эти слушатели только после открытия меню
  menuCloseButton.addEventListener('click', closeMenu);
  menuRuLang.addEventListener('click', switchToRussian);
  menuEnLang.addEventListener('click', switchToEnglish);
  menuContainer.addEventListener('click', closeMenuByLinkClick);
  menu.addEventListener('click', closeMenu);
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenu() {
  menu.classList.remove('menu_opened');
  menuContainer.classList.remove('menu__container_opened');

  // После закрытия меню отключаю слушатели
  menuCloseButton.removeEventListener('click', closeMenu);
  menuRuLang.removeEventListener('click', switchToRussian);
  menuEnLang.removeEventListener('click', switchToEnglish);
  menuContainer.removeEventListener('click', closeMenuByLinkClick);
  menu.removeEventListener('click', closeMenu);
  document.removeEventListener('keydown', closeMenuByEsc);
}

function closeMenuByLinkClick(event) {
  event.stopPropagation();
  if (event.target.classList.value.includes('menu__navigation-btn')) {
    closeMenu();
  }
}

function closeMenuByEsc(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeMenu();
  }
}

function switchToEnglish() {
  switchThumb.classList.add('menu__lang-switch-front_right');
  menuEnLang.classList.add('menu__lang_active');
  menuRuLang.classList.remove('menu__lang_active');
}

function switchToRussian() {
  switchThumb.classList.remove('menu__lang-switch-front_right');
  menuRuLang.classList.add('menu__lang_active');
  menuEnLang.classList.remove('menu__lang_active');
}

// Слушатели
// Меню
menuOpenButton.addEventListener('click', openMenu);
