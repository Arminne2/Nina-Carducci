
let image = document.querySelectorAll('.galleryimg');
let currentImage = 0;
let modal = document.getElementById("modal1");
let modalImg = document.getElementById("img01");
let next = document.querySelector(".droite");
let previous = document.querySelector(".gauche");
let header = document.querySelector("header");
let filter = document.querySelectorAll(".filter-btn");

filter.forEach(div => {
    div.addEventListener('click', () => {
        filter.forEach(btn => btn.classList.remove('active'));
        div.classList.add('active');
        const filterValue = div.getAttribute('data-tag');
        console.log(filterValue);
        filterItems(filterValue);
    });
});

const filterItems = (category) => {
    console.log(category);
    image.forEach(item => {
        if (category === 'all' || item.getAttribute('data-gallery-tag') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};

image.forEach((img, index) => {
    img.onclick = () => {
        openModal(index);
    };
});
function openModal(index) {
    currentImage = index;
    modal.style.display = "inline-flex";
    header.style.position = "relative";
    modalImg.src = image[index].src;
    document.body.style.overflow = 'hidden';
};

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
document.addEventListener ('click', function clickDetection(event) {
    if (event.target.classList.contains("modal")) {
        closeModal();
    }
});
function closeModal() {
    modal.style.display = "none";
    header.style.position = "sticky";
     document.body.style.overflow = 'unset';
}
next.onclick = () => {
    nextImage();
    console.log(modalImg);
}

previous.onclick = () => {
    prevImage();
}
function nextImage() {
    currentImage = (currentImage + 1) % image.length;
    modalImg.src = image[currentImage].src;
}
function prevImage() {
    currentImage = (currentImage - 1 + image.length) % image.length;
    modalImg.src = image[currentImage].src;
}

(function () {


    const slideTimeout = 5000;
    const prev = document.querySelector('.carousel-prev');
    const next = document.querySelector('.carousel-next');
    const slides = document.querySelectorAll(".carousel-item");

    let dots;
    let intervalId;
    let currentSlide = 1;

    function nextSlide(index) {
        currentSlide = index;
        if (currentSlide < 0){

            currentSlide = 2;
        } 
        else if (currentSlide >= slides.length){
            currentSlide = 0;
        }
        slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`)
        console.log(currentSlide);

    };

    function showSlide() {
        nextSlide(currentSlide);
        currentSlide++;
        dots.forEach(($elt, key) => $elt.classList = `dot ${key === currentSlide? 'active': 'inactive'}`);
    }

    for (let i = 1; i <= slides.length; i++) {
        let dotClass = [i];
        if (dotClass == currentSlide){
            let dot = `<div data-slidId="${i}" class="dot active"></div>`
            document.querySelector('.carousel-dots').innerHTML += dot;
        }
        else if(dotClass !== currentSlide){
            let dot = `<div data-slidId="${i}" class="dot inactive"></div>`
            document.querySelector('.carousel-dots').innerHTML += dot;
        }
        //let dotClass = i == currentSlide ? 'active' : 'inactive';
        //let dot = `<button data-slidId="${i}" class="dot ${dotClass}"></button>`;
        
    }
    dots = document.querySelectorAll('.dot');
    dots.forEach(($elt, key) => $elt.addEventListener('click', () => nextSlide(key)));
    prev.addEventListener('click', () => {
        nextSlide(currentSlide - 1 );
        console.log(currentSlide);
    });
    next.addEventListener('click', () => {
        nextSlide(currentSlide + 1 )
})
    intervalId = setInterval(showSlide, slideTimeout)
})()