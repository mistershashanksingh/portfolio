// --------------- manu section navbar ------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// ---------------scroll section active link--------------

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    // ---------------scroll section--------------

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // action navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        }
    });

    //==============sticky navbar background==============
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

};

//---------------color mode(dark & light)--------------
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
}

let homeImg = document.querySelector('.home-img img');

let isDarkMode = false;

darkModeIcon.onclick = () => {
    isDarkMode = !isDarkMode;
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    updateImage();
}

function updateImage() {
    if (isDarkMode) {
        homeImg.src = 'img/developer.svg';
    } else {
        homeImg.src = 'img/developer-dark.svg';
    }
}