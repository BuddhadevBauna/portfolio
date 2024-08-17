document.querySelector('.contact-btn')
.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    const topPosition = contactSection.offsetTop;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
});