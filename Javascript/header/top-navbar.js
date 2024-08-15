// Function to activate the link based on the section in view
const setActiveLink = () => {
    // Get all sections and navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    // Get current scroll position
    let scrollPosition = window.scrollY + window.innerHeight / 3;

    // Loop through sections to find which one is in the viewport
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;

        // Check if the section is in view
        if (scrollPosition >= sectionTop) {
            // Remove active class from all nav links
            navLinks.forEach((link) => link.classList.remove('active'));

            // Add active class to the corresponding nav link
            navLinks[index].classList.add('active');
        }
    });
};

// Run on scroll and page load to ensure the correct section is highlighted
window.addEventListener('load', setActiveLink);
window.addEventListener('scroll', setActiveLink);