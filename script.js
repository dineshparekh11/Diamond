// let slideIndex = 0;
// showSlide(slideIndex);

// function changeSlide(n) {
//     showSlide(slideIndex += n);
// }

// function showSlide(n) {
//     const slides = document.querySelectorAll(".slider img");
//     if (n >= slides.length) {
//         slideIndex = 0;
//     }
//     if (n < 0) {
//         slideIndex = slides.length - 1;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.transform = "translateX(-" + slideIndex + "00%)";
//     }
// }


// This JavaScript code ensures only one image is shown at a time in the slider.
// It hides the other images when transitioning between slides.

const slider = document.getElementById('imageSlider');
const carousel = new bootstrap.Carousel(slider, {
    interval: 2000, // Set the interval to change images (2 seconds in this example)
});

// Custom JavaScript to hide non-active slides
carousel._element.addEventListener('slide.bs.carousel', function () {
    const items = carousel._element.querySelectorAll('.carousel-item');
    items.forEach(item => item.style.display = 'none');
});

carousel._element.addEventListener('slid.bs.carousel', function () {
    const items = carousel._element.querySelectorAll('.carousel-item');
    items[carousel._activeIndex].style.display = 'block';
});


$(document).ready(function () {
    const textCarousel = new bootstrap.Carousel(document.getElementById('textCarousel'), {
        interval: 1000 // Change text every 1 second (1000 milliseconds)
    });
});