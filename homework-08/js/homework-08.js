import gallery from './data/gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  largeImg: document.querySelector('.lightbox__image'),
  OpenModal: document.querySelector('.js-lightbox'),
  modalCloseBtn: document.querySelector('.lightbox__button'),
  overlay: document.querySelector('.lightbox__overlay'),
};

// function makeItemsGallery({ preview, original, description }) {
//   const itemGallery = document.createElement('li');
//   itemGallery.classList.add('gallery__item');

//   const linkGallery = document.createElement('a');
//   linkGallery.classList.add('gallery__link');
//   linkGallery.href = `${original}`;

//   const imgGallery = document.createElement('img');
//   imgGallery.classList.add('gallery__image');
//   imgGallery.src = `${preview}`;
//   imgGallery.alt = `${description}`;
//   imgGallery.dataset.source = `${original}`;

//   linkGallery.append(imgGallery);
//   itemGallery.append(linkGallery);

//   return itemGallery;
// }

// const elementsGallery = gallery.map(makeItemsGallery);
// refs.galleryList.append(...elementsGallery);

function makeItemGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class='gallery__item'>
  <a
    class='gallery__link'
    href='${original}'
  >
    <img
      class='gallery__image'
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

function markupRenderingGallery() {
  const galleryContainer = makeItemGallery(gallery);
  refs.galleryList.insertAdjacentHTML('beforeend', galleryContainer);
}
markupRenderingGallery();

refs.galleryList.addEventListener('click', onImgOfGalleryClick);
refs.modalCloseBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onCloseModalOverlayClick);

function onImgOfGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) return;

  const imgRef = evt.target;
  const imgLargeSrc = imgRef.dataset.source;

  openModal(imgLargeSrc);
}

function openModal(url) {
  window.addEventListener('keydown', onCloseModalEscKeyPress);

  refs.OpenModal.classList.add('is-open');
  refs.largeImg.src = url;
}

function onCloseModal() {
  window.removeEventListener('keydown', onCloseModalEscKeyPress);

  refs.OpenModal.classList.remove('is-open');
  refs.largeImg.src = '';
  console.log(refs.largeImg.src);
}

function onCloseModalOverlayClick(evt) {
  const isTargetClick = evt.target === evt.currentTarget;

  if (isTargetClick) onCloseModal();
}

function onCloseModalEscKeyPress(evt) {
  const isEscKey = evt.code === 'Escape';

  if (isEscKey) onCloseModal();
}
