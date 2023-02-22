import '../scss/styles.scss';

// Карусель
const carousel = document.querySelector('.carousel__container');
const list = carousel.querySelector('.carousel__galery-list');
const listElems = carousel.querySelectorAll('.carousel__galery-item');
const prevButton = carousel.querySelector('.carousel__btn-prev');
const nextButton = carousel.querySelector('.carousel__btn-next');

// Меню
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu__container');
const menuOpenButton = document.querySelector('.header__open-menu-button');
const menuCloseButton = document.querySelector('.menu__close-btn');
const switchThumb = document.querySelector('.menu__lang-switch-front');
const menuRuLang = document.querySelector('.menu__lang-ru');
const menuEnLang = document.querySelector('.menu__lang-en');

// этот код помечает картинки, для удобства разработки в карусели
// let i = 1;
// for (let li of carousel.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML(
//     'beforeend',
//     `<span style="position:absolute;left:0;top:0">${i}</span>`
//   );
//   i++;
// }

// конфигурация карусели
let width = 244; // ширина картинки
let count = 4; // видимое количество изображений
let position = 0; // положение ленты прокрутки

function slideToPrev() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
}

function slideToNext() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
}

// автоматическая прокрутка
function autoSlide() {
  if (position === -width * (listElems.length - count)) {
    position = width * count;
  }
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
}

setInterval(autoSlide, 6000);

// Меню

function openMenu() {
  menu.classList.add('menu_opened');
  menuContainer.classList.add('menu__container_opened');
}

function closeMenu() {
  menu.classList.remove('menu_opened');
  menuContainer.classList.remove('menu__container_opened');
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
// Карусель
prevButton.addEventListener('click', slideToPrev);
nextButton.addEventListener('click', slideToNext);
// Меню
menuOpenButton.addEventListener('click', openMenu);
menuCloseButton.addEventListener('click', closeMenu);
menuRuLang.addEventListener('click', switchToRussian);
menuEnLang.addEventListener('click', switchToEnglish);

// // Прячу или показываю элементы меню в зависимости от ширины окна
// function showOrHideMenu(windowSize) {
//   if (windowSize <= 1200) {
//     navigationLargeScreen && navigationLargeScreen.remove();
//     headerLinksLargeScreen && headerLinksLargeScreen.remove();
//     headerContainer.insertAdjacentElement('beforeend', menuOpenButton);
//   } else {
//     headerContainer.insertAdjacentElement('beforeend', navigationLargeScreen);
//     headerContainer.insertAdjacentElement('beforeend', headerLinksLargeScreen);
//     menuOpenButton && menuOpenButton.remove();
//   }
// }

// showOrHideMenu(window.innerWidth);

// function handleResize() {
//   showOrHideMenu(window.innerWidth);
// }
