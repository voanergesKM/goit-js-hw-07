import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(getGalleryMarkup).join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

gallery.addEventListener('click', onGalleryItemOpen);

function onGalleryItemOpen(e) {
  e.preventDefault();

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function getGalleryMarkup({ preview, original, description }) {
  return ` 
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `;
}
