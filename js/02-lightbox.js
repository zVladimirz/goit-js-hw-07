import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);






const imgItems = galleryItems
.map (({preview,original,description}) => {
return `

<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="Beautiful Image"/>
</a>

`;
})
.join('');






const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = imgItems;


let lightbox = new SimpleLightbox('.gallery a', {captions=true; captionSelector="alt"; captionDelay=250});

console.log(lightbox.captions)