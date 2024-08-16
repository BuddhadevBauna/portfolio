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



const showInformationButtons = document.querySelectorAll('.card .btn');
const informations = document.querySelectorAll('.card .information');

showInformationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if(!informations[index].classList.contains('view')) {
            showInformationButtons[index].style.transition = 'none';
            button.style.visibility = 'hidden';
            informations[index].classList.add('view');
        } 
    });
});

document.querySelectorAll('.information > i')
.forEach((button, index) => {
    button.addEventListener('click', () => {
        showInformationButtons[index].style.transition = 'visibility 0ms ease  0.3s'
        informations[index].classList.remove('view');
        showInformationButtons[index].style.visibility = 'visible';
    });
});
