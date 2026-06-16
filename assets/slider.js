//Slider : 

//au chargement, récupérer les slides et créer les points
const slideTimeout = 2000;
let currentSlide = 0;
let intervalId;
document.addEventListener("DOMContentLoaded", createSlider());

function createSlider() {
    let index = currentSlide;
    const slides = document.querySelectorAll(".carousel-item");
    const dots = document.querySelector(".carousel-dots");

    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.dataset.dot = index;
        dot.classList.add("dot")
        dots.appendChild(dot);
        dot.addEventListener("click", () => {
            let dotId = dot.dataset.dot;
            currentSlide = Number(dotId);
            console.log(dotId);
            displaySlide();
        });
        if (index === currentSlide) {
            dot.style.backgroundColor = "rgba(244, 241, 243, 1)"
        }

    })
    intervalId = setInterval(startInterval, slideTimeout);
};

function startInterval() {
    currentSlide++;
   displaySlide();
}
// fonction qui affiche la bonne slide
function displaySlide() {
    console.log("test");
    if (currentSlide < 0) {
        currentSlide = 2;

    } else if (currentSlide > 2) {
        currentSlide = 0;

    };
    let slides = document.querySelectorAll(".carousel-item");
    slides.forEach((slide) => {
        let slideData = slide.getAttribute("data-slide");
        if (currentSlide == slideData) {

            slide.style.transform = `translateX(-${currentSlide * 100}%)`
        } else {

            slide.style.transform = `translateX(-${currentSlide * 100}%)`
        }
    });
    dots();

}

//Fonction qui gère l'animation des dots
function dots() {
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, indexDot) => {
        if (indexDot === currentSlide) {
            dot.style.backgroundColor = "rgba(244, 241, 243, 1)"
        } else {
            dot.style.backgroundColor = "rgba(244, 241, 243, 0.5)";
        }

    });
};

//Gestion des boutons

let prevSlide = document.querySelector(".carousel-prev");
let nextSlide = document.querySelector(".carousel-next");

nextSlide.addEventListener("click", () => {
    clearInterval(intervalId);
    currentSlide++
    newSlide();
});

prevSlide.addEventListener("click", () => {
    clearInterval(intervalId);
    currentSlide--
    newSlide();
});

//Fonction pour créer la boucle
function newSlide() {
    console.log(currentSlide);
    if (currentSlide < 0) {
        currentSlide = 2;

        displaySlide();
    } else if (currentSlide > 2) {
        currentSlide = 0;
        displaySlide();
    } else displaySlide();
    intervalId = setInterval(startInterval, slideTimeout);
};
