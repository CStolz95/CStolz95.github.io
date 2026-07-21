const photoFrames = document.querySelectorAll(".photo-frame");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".lightbox-close");

const captionTitle = document.querySelector(".lightbox-title");
const captionLocation = document.querySelector(".lightbox-location");
const captionDate = document.querySelector(".lightbox-date");
const captionFilm = document.querySelector(".lightbox-film");
const captionCredit = document.querySelector(".lightbox-credit");

function setCaption(element, value) {
    const text = value.trim();

    element.textContent = text;
    element.hidden = text === "";
}

function openLightbox(frame) {
    const image = frame.querySelector("img");

    if (!image) {
        return;
    }

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    setCaption(captionTitle, frame.dataset.title || "");
    setCaption(captionLocation, frame.dataset.location || "");
    setCaption(captionDate, frame.dataset.date || "");
    setCaption(captionFilm, frame.dataset.film || "");
    setCaption(captionCredit, frame.dataset.credit || "");

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
        openLightbox(frame);
    });
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        lightbox.classList.contains("is-open")
    ) {
        closeLightbox();
    }
});