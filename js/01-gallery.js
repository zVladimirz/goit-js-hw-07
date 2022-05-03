import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgItems = galleryItems
  .map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  })
  .join('');

function onEscape(event) {
  if (event.key === 'Escape') {
    //���� ������� �������� ����
    document.removeEventListener('keydown', onEscape);
    instance.close();
  }
}

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = imgItems;

galleryEl.addEventListener('click', onGalleryItemsClick);
let instance;

function onGalleryItemsClick(evt) {
  event.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
`);

  document.addEventListener('keydown', onEscape);

  instance.show();
}
