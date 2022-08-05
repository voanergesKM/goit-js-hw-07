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

  if (e.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(
    `
  <div class="modal">
    <img
    class="modal__image"
    src="${e.target.dataset.source}"
    />
  </div>
  `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscPress);
        instance.element().querySelector('img').onclick = instance.close;
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscPress);
      },
    }
  );

  function onEscPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
