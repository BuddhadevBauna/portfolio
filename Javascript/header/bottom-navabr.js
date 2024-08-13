const openButton = document.querySelector('.open-btn');
const closeButton = document.querySelector('.close-btn');
const navList = document.querySelector('.nav_list');

openButton.addEventListener('click', () => {
    navList.classList.add('active');
    closeButton.classList.add('show_close_btn');
});

closeButton.addEventListener('click', () => {
    navList.classList.remove('active');
    closeButton.classList.remove('show_close_btn');
});