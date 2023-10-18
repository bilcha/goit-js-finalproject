import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  ).join("");
}

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
gallery.addEventListener("click", handlerClick);

const lightbox = new SimpleLightbox('.gallery .gallery__item .gallery__link', {captionsData: "alt", captionDelay: "300"});
function handlerClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  } 
  evt.preventDefault();
  lightbox.open(evt.currentTarget);
}
