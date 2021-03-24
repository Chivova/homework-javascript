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

const originalImgList = gallery.map((el) => el.original);
// console.log(originalImgList);
let imgDataIndexCount = 0;
let activeIndexImg = 0;

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
      data-index="${imgDataIndexCount++}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
const galleryContainer = makeItemGallery(gallery);
refs.galleryList.insertAdjacentHTML('beforeend', galleryContainer);

refs.galleryList.addEventListener('click', onImgOfGalleryClick);
refs.modalCloseBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onCloseModalOverlayClick);

function onImgOfGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) return;

  const imgRef = evt.target;
  const imgLargeSrc = imgRef.dataset.source;
  activeIndexImg = imgRef.dataset.index;

  openModal(imgLargeSrc, activeIndexImg);
}

function openModal(url, index) {
  refs.OpenModal.classList.add('is-open');
  refs.largeImg.src = url;
  refs.largeImg.dataset.index = index;
  activeIndexImg = Number(refs.largeImg.dataset.index);

  window.addEventListener('keydown', onCloseModalEscKeyPress);
  window.addEventListener('keydown', onScrollArrowRightKeyPress);
  window.addEventListener('keydown', onScrollArrowLeftKeyPress);
}

function onCloseModal() {
  window.removeEventListener('keydown', onCloseModalEscKeyPress);
  window.removeEventListener('keydown', onScrollArrowRightKeyPress);

  refs.OpenModal.classList.remove('is-open');
  refs.largeImg.src = '';
}

function onCloseModalOverlayClick(evt) {
  const isTargetClick = evt.target === evt.currentTarget;

  if (isTargetClick) onCloseModal();
}

function onCloseModalEscKeyPress(evt) {
  const isEscKey = evt.code === 'Escape';

  if (isEscKey) onCloseModal();
}

function onScrollArrowRightKeyPress(evt) {
  if (activeIndexImg < gallery.length - 1) {
    if (evt.code === 'ArrowRight') {
      refs.largeImg.src = gallery[activeIndexImg + 1].original;
      activeIndexImg += 1;
    }
  }
}

function onScrollArrowLeftKeyPress(evt) {
  console.log(evt.code);
  if (activeIndexImg <= 0) {
    if (evt.code === 'ArrowLeft') {
      refs.largeImg.src = gallery[activeIndexImg - 1].original;
      activeIndexImg -= 1;
    }
  }
}

function onScrollArrowRightKeyPress2(evt) {
  for (let i = 0; i < gallery.length; i += 1) {
    if (refs.largeImg.src === originalImgList[i]) {
      refs.largeImg.src = originalImgList[i + 1];
    }
  }
}

onScrollArrowRightKeyPress2();
