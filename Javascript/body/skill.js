const AllSkillTitle = document.querySelectorAll('.skill-title');
const AllSkillContainer = document.querySelectorAll('.skill-container');

(() => {
    AllSkillContainer[0].classList.add('active');
})();

const updateButtonState = (index) => {
    AllSkillTitle.forEach((skillTitle, ind) => {
        const skillIcon = skillTitle.querySelector('i');
        if(ind === index) {
            skillIcon.classList.contains('fa-caret-up')
            ?
            skillIcon.classList.replace('fa-caret-up', 'fa-caret-down')
            :
            skillIcon.classList.replace('fa-caret-down', 'fa-caret-up');
        } else {
            skillIcon.classList.replace('fa-caret-up', 'fa-caret-down')
        }
    });
};

const updateSkillListState = (index) => {
    AllSkillContainer.forEach((skillContainer, ind) => {
        if(ind === index) {
            skillContainer.classList.toggle('active');
        }
        else {
            skillContainer.classList.remove('active');
        }
    });
};

AllSkillTitle.forEach((skillTitle, index) => {
    skillTitle.addEventListener('click', () => {
        updateSkillListState(index);
        updateButtonState(index);
    });
});