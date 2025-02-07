// Function to activate the link based on the section in view
const setActiveLink = () => {
    const section = document.querySelector('section');
    const navLinks = document.querySelectorAll('.nav_link')
    console.log(section, navLinks);
    navLinks.forEach((navLink) => {
        if(navLink.querySelector('p').innerHTML == section.id) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    })
}

// Run on page load to ensure the correct section is highlighted
window.addEventListener('load', setActiveLink);