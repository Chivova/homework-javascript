// Пример 2 - Попап
// Дан простой скрытый попап.
// При нажатии на кнопку, показать попап,
// при нажатии на ESC скрыть

const popupBtnRef = document.querySelector('.js-open-popup-btn');
const popupRef = document.querySelector('.js-popup');

popupBtnRef.addEventListener('click', onOpenPopup);

function onOpenPopup() {
  window.addEventListener('keydown', onCloseEscKeyPopup);
  popupRef.classList.add('popup_open');
}

function onClosePopup() {
  popupRef.classList.remove('popup_open');
}

function onCloseEscKeyPopup(event) {
  console.log(event);
  const isEsc = event.code === 'Escape';

  if (isEsc) {
    onClosePopup();

    window.removeEventListener('keydown', onCloseEscKeyPopup);
  }
}

// const openPopupBtnRef = document.querySelector('.js-open-popup-btn');
// const popupRef = document.querySelector('.js-popup');

// const handleClosePopup = (event) => {
//   console.log(event);

//   if (event.code === 'Escape') {
//     popupRef.classList.remove('popup_open');

//     document.removeEventListener('keydown', handleClosePopup);
//   }
// };

// openPopupBtnRef.addEventListener('click', () => {
//   popupRef.classList.add('popup_open');

//   document.addEventListener('keydown', handleClosePopup);
// });
