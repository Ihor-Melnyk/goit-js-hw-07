import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerGrig = document.querySelector('.gallery');
const markup = createImages(galleryItems);
containerGrig.insertAdjacentHTML('beforeend', markup);

function createImages(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="large-image.jpg"
                  alt="${description}"
                />
              </a>
            </div>
            `
    }).join('');
}

containerGrig.addEventListener('click', onImageClick);
function onImageClick(e) {
    if (!e.target.classList.containerGrig('gallery__image')) {
        return
    }
    console.log(e.target);
} 