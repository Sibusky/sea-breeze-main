import { Popup } from './popup.js';

export class Carousel {
  constructor(carouselSelector, cardWidth) {
    this._carousel = document.querySelector(`.${carouselSelector}`);
    this._list = this._carousel.querySelector(
      `.${carouselSelector}__galery-list`
    );
    this._listElems = this._carousel.querySelectorAll(
      `.${carouselSelector}__galery-item`
    );
    this._photoAbove = this._carousel.querySelector(
      `.${carouselSelector}__full-image`
    );
    this._prevButton = document.querySelector(`.${carouselSelector}__btn-prev`);
    this._nextButton = document.querySelector(`.${carouselSelector}__btn-next`);
    this._width = cardWidth; // ширина картинки
    this._position = 0; // положение ленты прокрутки

    // Количество карточек в зависимости от ширины окна
    this._countCards = () => {
      if (window.innerWidth > 1050) {
        return 4;
      }
      if (window.innerWidth <= 1050 && window.innerWidth > 750) {
        return 3;
      }
      if (window.innerWidth <= 750 && window.innerWidth > 650) {
        return 2;
      } else {
        return 1;
      }
    };
  }

  // этот метод помечает картинки, для удобства разработки в карусели
  _markCards() {
    let i = 1;
    this._listElems.forEach((li) => {
      li.style.position = 'relative';
      li.insertAdjacentHTML(
        'beforeend',
        `<span style="position:absolute;left:0;top:0">${i}</span>`
      );
      i++;
    });
  }

  // Слушатели событий общие
  _setEventListeners() {
    this._prevButton.addEventListener('click', () => this._slideToPrev());
    this._nextButton.addEventListener('click', () => this._slideToNext());
  }

  // Слушатель на открытие карточек

  _openPhotoInModal() {
    this._list.addEventListener('click', (e) => this._openModal(e));
  }

  _openModal(e) {
    const image = e.target.closest('li').querySelector('img');
    const openedImage = new Popup('.popup');
    openedImage.open(image);
  }

  _openPhotoAbove() {
    this._list.addEventListener('click', (e) => this._showPhotoAbove(e));
  }

  _showPhotoAbove(e) {
    const image = e.target.closest('li').querySelector('img');
    this._photoAbove.src = image.src;
    this._photoAbove.alt = image.alt;
  }

  _slideToPrev() {
    // сдвиг влево
    this._position += this._width * this._countCards();
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    this._position = Math.min(this._position, 0);
    this._list.style.marginLeft = this._position + 'px';
  }

  _slideToNext() {
    // сдвиг вправо
    this._position -= this._width * this._countCards();
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    this._position = Math.max(
      this._position,
      -this._width * (this._listElems.length - this._countCards())
    );
    this._list.style.marginLeft = this._position + 'px';
  }
}
