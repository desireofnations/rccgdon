window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const logo = document.querySelector('#preloader img'); // Target the logo image inside the preloader

    // Trigger the zoom-out animation after a delay (e.g., 3 seconds)
    setTimeout(() => {
        logo.classList.add('zoom-out'); // Add the zoom-out class to the logo
    }, 1000); // Start zooming the logo after 1 second (adjust as needed)

    // Remove the preloader from display after the animation ends
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide preloader after the animation
    }, 3000); // Adjust this timing based on your logo animation duration
});

// Other JavaScript functions (slider, navbar, etc.)

let currentSlideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    currentSlideIndex++;
    if (currentSlideIndex > slides.length) { currentSlideIndex = 1; }    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentSlideIndex - 1].style.display = "block";  
    dots[currentSlideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function toggleNav() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(); // Initialize the slider
});

// Function to check the scroll position
function checkScroll() {
    const header = document.querySelector('header'); // Targeting the header, not just navbar
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Add class when scrolled
    } else {
        header.classList.remove('scrolled'); // Remove class when at the top
    }
}

// Event listeners
window.addEventListener('scroll', checkScroll);
