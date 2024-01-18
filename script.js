let currentIndex = 0;
const items = document.querySelector('.carousel');
const totalItems = items.children.length;

function nextSlide() {
    if (currentIndex < totalItems - 4) {
        currentIndex++;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentIndex * (150 + 10); // Adjust the width and margin of book covers
    items.style.transform = `translateX(${translateValue}px)`;
}
