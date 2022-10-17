import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const refs = {
//   gallery: document.querySelector(".js-gallery"),
//   image: document.createElement("img"),
//   lightbox: document.querySelector(".lightbox"),
//   btn: document.querySelector('[data-action="close-lightbox"]'),
//   modal: document.querySelector(".lightbox__content"),
//   lightbox__image: document.querySelector(".lightbox__image"),
// };


//   --- 1. Markup ------

const galleryTemplate = ({ preview, original, description }) =>
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(galleryItem => galleryTemplate(galleryItem)).join('');
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);


// ---2. Get Large Image 

// function onPreviewImageClick(evt) {
//     evt.preventDefault();

//     const isImage = evt.target.classList.contains ('gallery__image');
//     if (!isImage)  return;

//     const selectedImage = evt.target;

//     const instance = basicLightbox.create(`<div class="gallery__item"><img src="${selectedImage.dataset.source}" width="600"/></div>`)

//     instance.show();
// }

galleryContainer.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return
    }

    const selectedImage = evt.target.getAttribute('data-source');

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="600"/>`);
    
    instance.show();

    galleryContainer.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            instance.close();
        }
    })
    galleryContainer.removeEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            instance.close();
       } 
    });
})


// galleryContainer.addEventListener('click', onImageClick);
// function onImageClick(evt) {
//     evt.pretendDefault();

//     const isImage = evt.target.classList.contains('gallery');
//     if (!isImage) { return };

//     const activeImage = evt.target;
// }


