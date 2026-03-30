// Typing Effect
const text = "JOSEPH BABU";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();

// Fade animation
const fadeElements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});
