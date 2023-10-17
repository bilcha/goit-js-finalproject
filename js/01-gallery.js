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
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  ).join("");
}


gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
gallery.addEventListener("click", handlerClick);

let instance;

function handlerClick(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  } 
  evt.preventDefault();
  const imgData = evt.target;
  instance = basicLightbox.create(`
    <div class="modal">
      <img
          class="gallery__image"
          src="${imgData.dataset.source}"
          alt="${imgData.alt}"
        />
    </div>
`)
  
instance.show()
}
function handlerKeyClick(evt) {
  if (evt.key === "Escape" && instance.visible()) {
    instance.close();
  }
}
window.addEventListener("keydown", handlerKeyClick);


