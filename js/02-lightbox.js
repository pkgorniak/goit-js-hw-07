import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const item of galleryItems) {
  const newGalleryItem = document.createElement("a");
  newGalleryItem.classList.add("gallery__item");
  newGalleryItem.href = item.original;
  const newGalleryImg = document.createElement("img");
  newGalleryImg.classList.add("gallery__image");
  newGalleryImg.src = item.preview;
  newGalleryImg.alt = item.description;
  gallery.appendChild(newGalleryItem);
  newGalleryItem.appendChild(newGalleryImg);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
