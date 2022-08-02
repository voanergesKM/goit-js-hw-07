import { galleryItems } from './gallery-items.js';

const galleryThumbEl = document.querySelector('.gallery');

galleryThumbEl.addEventListener('click', onGalleryItemOpen);

const galleryMarkup = galleryItems.map(galleryElMarkup).join('');

galleryThumbEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function galleryElMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a> 
  </div>`;
}

function onGalleryItemOpen(e) {
  e.preventDefault();

  window.addEventListener(
    'keydown',
    e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        instance.close();
      }
    },
    { once: true }
  );

  const instance = basicLightbox.create(`
<div class="modal">
    <img
    class="modal__image"
    src="${e.target.dataset.source}"
    />
</div>
`);

  instance.show();
}
