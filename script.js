let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const translateX = -index * 100;
    carouselInner.style.transform = `translateX(${translateX}%)`;
    currentIndex = index;
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % totalItems;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(prevIndex);
}

function autoPlay() {
    nextSlide();
    setTimeout(autoPlay, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    autoPlay();
});
