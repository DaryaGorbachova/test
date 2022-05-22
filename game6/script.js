const unsplashLink = document.getElementById('unsplashlink');
const linksUnsplash = document.getElementById('linksunsplash');
const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const hint1 = document.getElementById('hint1');
const hint2 = document.getElementById('hint2');
const hint3 = document.getElementById('hint3');
const changebtn = document.getElementById('change');
const hintbtn = document.getElementById('hint');
const playbtn = document.getElementById('play');
const game = document.getElementById('game');

const animals = ['beaver', 'cat', "cow", 'crocodile', 'deer', 'dog',
'duck', 'elephant', 'fox', 'giraffe', 'hare', 'hippo', 'horse',
'lion', 'monkey', 'owl', 'panda', 'pig', 'raccoon', 
'sheep', 'skunk', 'tiger','unicorn', 'zebra'];

const places = ['barn', 'camp', 'egypt', 'england', 'forest', 'france',
'india', 'island', 'italy', 'japan', 'meadow', 'mill', 'mountain', 'russia', 'usa'];

let num1 = 0;
let num2 = 0;
let num3 = 0;

   change();

playbtn.addEventListener('click', () => {
    game.style = 'display: block';
 
})

unsplashLink.onmouseenter = function () {
    unsplashLink.style.color = 'white';
    linksUnsplash.style.color = 'var(--black)';
    linksUnsplash.style.opacity = '100%';
}
unsplashLink.onmouseleave = function () {
    unsplashLink.style.color = 'var(--black)';   
    linksUnsplash.style.opacity = '0%';
}

changebtn.addEventListener('click', () => {
    change();
})

hintbtn.addEventListener('click', () => {
    hint1.innerHTML = `${animals[num1].toUpperCase()}`;
    hint3.innerHTML = `${places[num3].toUpperCase()}`;
})

function change() {
    num1 = Math.floor(Math.random() * animals.length);
    pic1.src=`animals/${animals[num1]}.png`;

    num3 = Math.floor(Math.random() * places.length);
    console.log(num3)
    pic3.src=`places/${places[num3]}.png`;

    hint1.innerHTML = ` `;
    hint3.innerHTML = ` `;
}