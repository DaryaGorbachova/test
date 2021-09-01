const unsplashLink = document.getElementById('unsplashlink');
const linksUnsplash = document.getElementById('linksunsplash');
const photos = document.getElementById('photos');
const playbtn = document.getElementById('play');
const nextbtn = document.getElementById('next');

let passed1 = false;

unsplashLink.onmouseenter = function () {
    unsplashLink.style.color = 'white';
    linksUnsplash.style.color = 'var(--black)'
    linksUnsplash.style.opacity = '100%';
}
unsplashLink.onmouseleave = function () {
    unsplashLink.style.color = 'var(--black)';   
    linksUnsplash.style.opacity = '0%';
}

playbtn.addEventListener('click', () => {
    photos.style.opacity = '100%';
    nextbtn.style.opacity = '100%';
})

//game itself
const photo = document.querySelectorAll('.photo');
let activePhoto = 5;

photo.forEach(photo => {
    photo.addEventListener('click', () => {
    removeActive();
    photo.classList.add('active');
    })
})

function removeActive () {
    photo.forEach(photo => {
    photo.classList.remove('active');
})
}
activePhoto = 5;

nextbtn.addEventListener('click', () => {
    nextLvl();
})

function nextLvl () {
    removeActive();
    if (activePhoto > 9) {
        alert("Congratulations! You've passed all the levels!");
        passed1 = true;
        nextbtn.style.opacity = '0%';

    } else {            
        photo.forEach(photo => {
            activePhoto++;
            photo.style.backgroundImage = `url(materials/photo${activePhoto}.jpg)`;
            })
        }
         
    
}

if (passed1 = true) {
    console.log(passed1)
}