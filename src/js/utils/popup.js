export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeButton = this._popup.querySelector('.popup__close-btn');
    this._image = this._popup.querySelector('.popup__photo');
  }

  open(image) {
    this._popup.classList.add('popup_opened');
    this._image.src = image.src;
    this._popup.addEventListener('mousedown', (evt) =>
      this.closeFromOverlay(evt)
    );
    document.addEventListener('keydown', this._handleEscClose); // Добавляю обработчик нажатия клавиши Esc
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose); // Удаляю обработчик нажатия клавиши Esc
    this._popup.removeEventListener('mousedown', this.closeFromOverlay);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  closeFromOverlay(evt) {
    // Закрываю из области overlay (при этом испльзую mousedown а не click), либо нажатием на крестик
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target === this._closeButton ||
      evt.target.tagName == "path"
    ) {
      this.close();
    }
  }
}
