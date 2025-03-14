function toggleMenu() {
    let menuBtn = document.querySelector('.menu-btn');
    let navLinks = document.querySelector('.nav-links');

    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
        navLinks.style.transform = "translateX(0)";
    } else {
        navLinks.style.transform = "translateX(200%)";
    }
}


function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active-section'));

    // Show the clicked section
    let sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active-section');

    // Adjust layout for About section
    let profileSection = document.querySelector('.profile-section');
    if (sectionId === 'about') {
        profileSection.classList.add('about-active');
    } else {
        profileSection.classList.remove('about-active');
    }

    // Highlight the active navigation link
    let navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-links a[onclick="showSection('${sectionId}')"]`).classList.add('active');
}