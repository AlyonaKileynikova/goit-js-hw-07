import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryTemplate = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryTemplate);
// galleryContainer.addEventListener("click", onItemClick);

// function onItemClick(evt) {
//   evt.preventDefault();
// }

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

// galleryContainer.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
// });
    
    
// const galleryTemplate = ({ preview, original, description }) =>
//   `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" 
//   src="${preview}" 
//   alt="${description}"/>
// </a>`;

// const galleryContainer = document.querySelector(".gallery");
// const galleryMarkup = galleryItems
//   .map((galleryItem) => galleryTemplate(galleryItem))
//   .join("");
// galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);




// galleryContainer.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }

  // const selectedImage = evt.target;

  // const instance = simpleLightbox.create(
  //   `<img src="${selectedImage}" width="600"/>`
  // );

  // instance.show();

  // galleryContainer.addEventListener("keydown", (evt) => {
  //   if (evt.key === "Escape") {
  //     instance.close();
  //   }
  // });
// });