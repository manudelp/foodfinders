// Switching Ben Shapiro Memes

let currentIndex = 0;
const images = document.querySelectorAll('.them_ben_memes img');
const descriptions = document.querySelectorAll('.them_ben_memes .image-description');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function updateDescription(index) {
    descriptions.forEach((description, i) => {
        if (i === index) {
            description.style.display = 'block';
        } else {
            description.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    updateDescription(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    updateDescription(currentIndex);
}

document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector('.next').addEventListener('click', nextImage);

showImage(currentIndex);
updateDescription(currentIndex);


// Topa