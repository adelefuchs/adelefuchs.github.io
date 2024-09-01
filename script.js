// Add any interactivity you want here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Typing effect for the welcome message
document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to My Portfolio";
    let index = 0;
    const speed = 100;

    function typeWriter() {
        if (index < text.length) {
            document.querySelector("#home h1").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});

// Scrollspy effect
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});

const imageCount = 9;
let currentImageIndex = 1;

function updateImage() {
    const image = document.getElementById('animated-image');
    image.src = `frog${currentImageIndex}.png`;

    currentImageIndex++;
    if (currentImageIndex > imageCount) {
        currentImageIndex = 1; // Reset to the first image
    }
}

// Set the interval to change the image every 500ms (0.5 seconds)
setInterval(updateImage, 500);

