
let image = document.querySelectorAll('.gallery-item img');
let boxes = document.querySelectorAll('.gallery-item');
let currentImage = 0;
let modal = document.getElementById("modal1");
let modalImg = document.getElementById("img01");
let next = document.querySelector(".droite");
let previous = document.querySelector(".gauche");
let header = document.querySelector("header");
let filter = document.querySelectorAll(".filter-btn");
let gallery = document.querySelector(".gallery");
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
    boxes.forEach(box => {
        if (category === 'all' || box.getAttribute('data-gallery-tag') === category) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
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

