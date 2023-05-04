import '../css/piers.css';
import { Carousel } from './utils/carousel.js';

// Карусель с партнёрами
const bottomSlider = new Carousel('carousel-bottom', 244);

// Меню
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu__container');
const menuOpenButton = document.querySelector('.header__open-menu-button');
const menuCloseButton = document.querySelector('.menu__close-btn');
const switchThumb = document.querySelector('.menu__lang-switch-front');
const menuRuLang = document.querySelector('.menu__lang-ru');
const menuEnLang = document.querySelector('.menu__lang-en');
const sliders = document.querySelectorAll('.piers-photos');

// Карусель с партнёрами

bottomSlider._setEventListeners();
bottomSlider._slideToNext();
bottomSlider._slideToPrev();

// Слайдеры на странице
// Добавляю стили для индексирования слайдеров
sliders.forEach((slider, index) => {
  const list = slider.querySelector('.piers-photos__galery-list');
  const item = slider.querySelectorAll('.piers-photos__galery-item');
  const fullImage = slider.querySelector('.piers-photos__full-image');
  const prevButton = slider.querySelector('.piers-photos__btn-prev');
  const nextButton = slider.querySelector('.piers-photos__btn-next');
  const classPrefix = `piers-photos-${index}`;

  slider.classList.add(classPrefix);
  list.classList.add(`${classPrefix}__galery-list`);
  item.forEach((item) => item.classList.add(`${classPrefix}__galery-item`));
  fullImage.classList.add(`${classPrefix}__full-image`);
  prevButton.classList.add(`${classPrefix}__btn-prev`);
  nextButton.classList.add(`${classPrefix}__btn-next`);
});

// Создаю классы для каждого слайдера
function createSlider(selector) {
  const piersSlider = new Carousel(selector, 244);
  piersSlider._setEventListeners();
  piersSlider._openPhotoAbove();
  piersSlider._slideToNext();
  piersSlider._slideToPrev();
}

sliders.forEach((slider, index) => createSlider(`piers-photos-${index}`));

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
