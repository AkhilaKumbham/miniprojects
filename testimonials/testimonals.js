let currentSlide = 0;
const slides = document.querySelectorAll('.unique-testimonial-slide');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
            slide.style.animation = 'slideAnimation 5s infinite';
        }
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 5000);
showSlide();
