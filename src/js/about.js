import '../css/about.css';

// Карусель
const carousel = document.querySelector('.carousel__container');
const list = carousel.querySelector('.carousel__galery-list');
const listElems = carousel.querySelectorAll('.carousel__galery-item');
const prevButton = carousel.querySelector('.carousel__btn-prev');
const nextButton = carousel.querySelector('.carousel__btn-next');

// Меню
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu__container');
const menuNavigation = document.querySelector('.menu__navigation');
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
// видимое количество изображений
const count = (windowSize) => {
  if (windowSize > 1050) {
    return 4;
  }
  if (windowSize <= 1050 && windowSize > 750) {
    return 3;
  }
  if (windowSize <= 750 && windowSize > 650) {
    return 2;
  } else {
    return 1;
  }
};

let width = 244; // ширина картинки
let position = 0; // положение ленты прокрутки

function slideToPrev() {
  // сдвиг влево
  position += width * count(window.innerWidth);
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
}

function slideToNext() {
  // сдвиг вправо
  position -= width * count(window.innerWidth);
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(
    position,
    -width * (listElems.length - count(window.innerWidth))
  );
  list.style.marginLeft = position + 'px';
}

// автоматическая прокрутка
// function autoSlide() {
//   if (position === -width * (listElems.length - count(window.innerWidth))) {
//     position = width * count(window.innerWidth);
//   }
//   position -= width * count(window.innerWidth);
//   position = Math.max(
//     position,
//     -width * (listElems.length - count(window.innerWidth))
//   );
//   list.style.marginLeft = position + 'px';
// }

// setInterval(autoSlide, 6000);

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
// Карусель
prevButton.addEventListener('click', slideToPrev);
nextButton.addEventListener('click', slideToNext);
// Меню
menuOpenButton.addEventListener('click', openMenu);
