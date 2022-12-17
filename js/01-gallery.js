import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const item of galleryItems) {
  const newGalleryItem = document.createElement("div");
  newGalleryItem.classList.add("gallery__item");
  const newGalleryLink = document.createElement("a");
  newGalleryLink.classList.add("gallery__link");
  newGalleryLink.href = item.original;
  const newGalleryImg = document.createElement("img");
  newGalleryImg.classList.add("gallery__image");
  newGalleryImg.src = item.preview;
  newGalleryImg.dataset.source = item.original;
  newGalleryImg.alt = item.description;
  gallery.appendChild(newGalleryItem);
  newGalleryItem.appendChild(newGalleryLink);
  newGalleryLink.appendChild(newGalleryImg);
}

const getOriginalImg = (e) => {
  e.preventDefault();
  const selectedImg = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src=${selectedImg}>`);
  instance.show();

  const visible = instance.visible();
  const closeWithEscKey = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };
  if (visible === true) {
    gallery.addEventListener("keydown", closeWithEscKey);
  } else {
    gallery.removeEventListener("keydown", closeWithEscKey);
  }
};

gallery.addEventListener("click", getOriginalImg);

console.log(galleryItems);
