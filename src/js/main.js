import '../scss/styles.scss';

// Карусель

const carousel = document.querySelector('.carousel__container');
const list = carousel.querySelector('.carousel__galery-list');
const listElems = carousel.querySelectorAll('.carousel__galery-item');
const prevButton = carousel.querySelector('.carousel__btn-prev');
const nextButton = carousel.querySelector('.carousel__btn-next');

// этот код помечает картинки, для удобства разработки
// let i = 1;
// for (let li of carousel.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML(
//     'beforeend',
//     `<span style="position:absolute;left:0;top:0">${i}</span>`
//   );
//   i++;
// }

// конфигурация
let width = 244; // ширина картинки
let count = 4; // видимое количество изображений
let position = 0; // положение ленты прокрутки

prevButton.onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

nextButton.onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

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

const headerContainer = document.querySelector('.header__container');
const navigationLargeScreen = headerContainer.querySelector(
  '.header__phone-number-and-navigation'
);
const headerLinksLargeScreen = headerContainer.querySelector(
  '.header__youtube-and-lang-switch'
);
const menuOpenButton = headerContainer.querySelector(
  '.header__open-menu-button'
);

// Прячу или показываю элементы меню в зависимости от ширины окна
function showOrHideMenu(windowSize) {
  if (windowSize <= 1200) {
    navigationLargeScreen.remove();
    headerLinksLargeScreen.remove();
    headerContainer.insertAdjacentElement('beforeend', menuOpenButton);
  } else {
    headerContainer.insertAdjacentElement('beforeend', navigationLargeScreen);
    headerContainer.insertAdjacentElement('beforeend', headerLinksLargeScreen);
    menuOpenButton.remove();
  }
}

showOrHideMenu(window.innerWidth);

function handleResize() {
  showOrHideMenu(window.innerWidth);
}

window.addEventListener('resize', handleResize);
