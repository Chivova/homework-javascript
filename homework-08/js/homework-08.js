import gallery from './data/gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
};
/*
<li class='gallery__item'>
  <a
    class='gallery__link'
    href='https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg'
  >
    <img
      class='gallery__image'
      src='https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg'
      data-source='https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg'
      alt='Tulips'
    />
  </a>
</li>;
 */
function createItemsGallery() {
  const itemGallery = document.createElement('li');
  itemGallery.classList(gallery__item);
  const linkGallery = document.createElement('a');
  linkGallery.classList('gallery__link');
  linkGallery.href =
    'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg';
  const imgGallery = document.createElement('img');
  imgGallery.classList('gallery__image');
  imgGallery.src =
    'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg';
  imgGallery.alt = 'Tulips';

  imgGallery.datasource =
    'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg';
}
