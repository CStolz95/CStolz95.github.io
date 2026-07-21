const photoFrames = document.querySelectorAll(".photo-frame");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".lightbox-close");

function openLightbox(image) {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    lightboxImage.src = "";
    lightboxImage.alt = "";
}

photoFrames.forEach((frame) => {
    frame.addEventListener("click", () => {
        const image = frame.querySelector("img");

        if (image) {
            openLightbox(image);
        }
    });
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
    }
});