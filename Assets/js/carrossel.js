const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const totalSlides = slides.length;

function moveSlide() {
    currentIndex++;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveSlide, 5000);
