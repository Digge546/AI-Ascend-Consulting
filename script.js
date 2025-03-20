let currentIndex = 0;
const items = document.querySelectorAll(".carousel .service-item");

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex >= items.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = items.length - 1;
    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * 100}%)`;
}
