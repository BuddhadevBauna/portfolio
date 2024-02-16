var firstSkillTitle=document.querySelector('.skill-title.first'),
firstSkillTitleText=document.querySelector('.skill-title.first .skill-heading'),
firstSkillTitleIcon=document.querySelector('.skill-title.first i'),
firstSkillContainer=document.querySelector('.skill-container.first');

var secondSkillTitle =document.querySelector('.skill-title.second'),
secondSkillTitleText=document.querySelector('.skill-title.second .skill-heading'),
secondSkillTitleIcon=document.querySelector('.skill-title.second i'),
secondSkillContainer=document.querySelector('.skill .skill-container.second');

var thirdSkillTitle =document.querySelector('.skill-title.third'),
thirdSkillTitleText=document.querySelector('.skill-title.third .skill-heading'),
thirdSkillTitleIcon=document.querySelector('.skill-title.third i'),
thirdSkillContainer=document.querySelector('.skill .skill-container.third');

firstSkillTitle.addEventListener('click',()=>{
    firstSkillContainer.classList.toggle('skill-hide');
    if(firstSkillTitleIcon.classList.contains('fa-caret-up')){
        firstSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
    else if(firstSkillTitleIcon.classList.contains('fa-caret-down')){
        firstSkillTitleIcon.classList.replace('fa-caret-down','fa-caret-up');
    }

    // Second and third container how to react by click
    if(secondSkillContainer.classList.contains('skill-show')){
        secondSkillContainer.classList.remove('skill-show');
        secondSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
    if(thirdSkillContainer.classList.contains('skill-show')){
        thirdSkillContainer.classList.remove('skill-show');
        thirdSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
});
secondSkillTitle.addEventListener('click',()=>{
    secondSkillContainer.classList.toggle('skill-show');
    if(secondSkillTitleIcon.classList.contains('fa-caret-down')){
        secondSkillTitleIcon.classList.replace('fa-caret-down','fa-caret-up');
    }
    else if(secondSkillTitleIcon.classList.contains('fa-caret-up')){
        secondSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }

    // first and third container how to react by click
    if(!firstSkillContainer.classList.contains('skill-hide')){
        firstSkillContainer.classList.add('skill-hide');
        firstSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
    if(thirdSkillContainer.classList.contains('skill-show')){
        thirdSkillContainer.classList.remove('skill-show');
        thirdSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
});
thirdSkillTitle.addEventListener('click',()=>{
    thirdSkillContainer.classList.toggle('skill-show');
    if(thirdSkillTitleIcon.classList.contains('fa-caret-down')){
        thirdSkillTitleIcon.classList.replace('fa-caret-down','fa-caret-up');
    }
    else if(thirdSkillTitleIcon.classList.contains('fa-caret-up')){
        thirdSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }

    // first and second container how to react by click
    if(!firstSkillContainer.classList.contains('skill-hide')){
        firstSkillContainer.classList.add('skill-hide');
        firstSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
    if(secondSkillContainer.classList.contains('skill-show')){
        secondSkillContainer.classList.remove('skill-show');
        secondSkillTitleIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
});
