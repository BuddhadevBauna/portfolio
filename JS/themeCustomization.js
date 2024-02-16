// Theme Change
themCustomization =document.querySelector('.them_customization'),
section=document.querySelectorAll('section');
themCustomization.addEventListener('click',()=>{
    if(themCustomization.classList.contains('fa-moon')){
        themCustomization.classList.replace('fa-moon','fa-sun');
        section.forEach(e=>{
            e.classList.add('theme-change');
        })
    }
    else if(themCustomization.classList.contains('fa-sun')){
        themCustomization.classList.replace('fa-sun','fa-moon');
        section.forEach(e=>{
            e.classList.remove('theme-change');
        })
    }
});