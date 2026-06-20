
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
let filterCategory = "all";
 let filterIndex = 0;
filter.forEach(div => {
    div.addEventListener('click', () => {
        filter.forEach(btn => btn.classList.remove('active'));
        div.classList.add('active');
        const filterValue = div.getAttribute('data-tag');
        filterItems(filterValue);
    });
});

const filterItems = (category) => {
    filterCategory = category;
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
document.addEventListener('click', function clickDetection(event) {
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
}

previous.onclick = () => {
    prevImage();
}
function nextImage() {
    if (filterCategory === 'all') {
        currentImage = (currentImage + 1) % image.length;
        modalImg.src = image[currentImage].src;
    } else if (filterCategory !== 'all') {
        filterImages = document.querySelectorAll("img" + `[data-gallery-tag=${filterCategory}]`);
        filterIndex = (filterIndex + 1) % filterImages.length;
        modalImg.src = filterImages[filterIndex].src;
    }
}
function prevImage() {
    if (filterCategory === 'all') {
    currentImage = (currentImage - 1 + image.length) % image.length;
    modalImg.src = image[currentImage].src;
    } else if (filterCategory !== 'all') {
        filterImages = document.querySelectorAll("img" + `[data-gallery-tag=${filterCategory}]`);
        filterIndex = (filterIndex - 1 + filterImages.length) % filterImages.length;
        modalImg.src = filterImages[filterIndex].src;
    }
}

