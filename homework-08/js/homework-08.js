import gallery from './data/gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  largeImg: document.querySelector('.lightbox__image'),
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

function onImgOfGalleryClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) return;

  const imgRef = evt.target;
  setLargeImg(imgRef);
}

function setLargeImgSrcURL(url) {
  largeImg.src = url;
}
