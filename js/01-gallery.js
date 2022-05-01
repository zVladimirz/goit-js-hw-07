import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imgItems = galleryItems
.map (({preview,original,description}) => {
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

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = imgItems;


galleryEl.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(evt){
  event.preventDefault();

if (!evt.target.classList.contains('gallery__image')) {
return;
}
console.log(evt.target.dataset.source);

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
`)

instance.show();
instance.close();



}



document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
//ваша функция закрытия окна
instance.close();
}
}); 