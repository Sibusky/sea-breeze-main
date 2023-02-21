// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';

// Карусель
const carousel = document.querySelector('.carousel__container');
const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');
const prevButton = carousel.querySelector('.carousel__btn-prev');
const nextButton = carousel.querySelector('.carousel__btn-next');

// этот код помечает картинки, для удобства разработки
let i = 1;
for (let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML(
    'beforeend',
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

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

setInterval(autoSlide, 5000);
