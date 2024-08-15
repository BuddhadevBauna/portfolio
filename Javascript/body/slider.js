const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.carousel-container > i');

const cardWidth = carousel.querySelector('.card').offsetWidth;

// For update Button state
const updateSliderButtonState = () => {
    if(carousel.scrollLeft === 0) {
        buttons[0].classList.add('disable-btn');
    } else if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth) {
        buttons[1].classList.add('disable-btn');
    } else {
        buttons.forEach((button) => {
            button.classList.remove('disable-btn')
        });
    }
}

// Handle button click to slide the carousel
const handleButtonClick = (event) => {
    carousel.scrollLeft += event.target.id === 'prev' ? -cardWidth : cardWidth;
};

// Add click listeners to buttons for sliding
buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});

// Listen for the 'scroll' event to update the button state
carousel.addEventListener('scroll', updateSliderButtonState);

// Initial update for button state
updateSliderButtonState();