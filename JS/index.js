var navMenu=document.querySelector('.nav_menu'),
navToggle=document.querySelector('.nav_toggle'),
navClose=document.querySelector('.nav_close'),
navLinkIcon=document.querySelectorAll('.nav_link i'),
navLinkText=document.querySelectorAll('.nav_link p');
// Menu Show
// Validate if navToggle exists
if(navToggle){
    navToggle.addEventListener('click', (e)=>{
        navMenu.classList.add('show_menu');
    })
};
// Menu hidden
// Validate if navClose exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu');
    })
    navLinkIcon.forEach(element => {
        element.addEventListener('click',()=>{
            navMenu.classList.remove('show_menu');
        })
    });
    navLinkText.forEach(element => {
        element.addEventListener('click',()=>{
            navMenu.classList.remove('show_menu');
        })
    });
};