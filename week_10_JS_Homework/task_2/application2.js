
// Variables
const sliderBox = document.querySelector('.slider-box');
const sliderLine = document.querySelector('.slider-line');
const sliderImg = document.querySelectorAll('.slider-img');

const btnPrev = document.querySelector('.btn-previous');
const btnNext = document.querySelector('.btn-next');

let offset = 0;
let sliderWidth = sliderBox.offsetWidth;

// offsets
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);


// Add function
function nextSlide() {
    offset++;

    if (offset >= sliderImg.lenght) {
        offset = 0;
    }
   
    rollSlider();
}

function prevSlide() {
    offset--;

    if (offset < 0) {
        offset = sliderImg.lenght - 1;
    }
   
    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-offset * sliderWidth}px)`;
}


