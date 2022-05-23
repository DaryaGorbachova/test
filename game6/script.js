const unsplashLink = document.getElementById('unsplashlink');
const linksUnsplash = document.getElementById('linksunsplash');
const hint1 = document.getElementById('hint1');
const hint2 = document.getElementById('hint2');
const hint3 = document.getElementById('hint3');
const changebtn = document.getElementById('change');
const hintbtn = document.getElementById('hint');
const playbtn = document.getElementById('play');
const game = document.getElementById('game');
const cards = document.querySelectorAll('.pic');

const animals = ['beaver', 'cat', "cow", 'crocodile', 'deer', 'dog',
'duck', 'elephant', 'fox', 'giraffe', 'hare', 'hippo', 'horse',
'lion', 'monkey', 'owl', 'panda', 'pig', 'raccoon', 
'sheep', 'skunk', 'tiger','unicorn', 'zebra'];

const places = ['aquapark', 'barn', 'bedroom', 'camp', 'city', 'elevator', 'forest',
'island', 'library', 'london', 'meadow', 'mountain', 'office', 'paris',
'park', 'restaurant', 'school', 'stadium'];

const activities = ['to clean / to vacuum', 'to fix / to repair', 'to cook', 'to read a map, to go camping', 
'to walk in the rain / to get caught in the rain', 'to walk a dog',
'to read a book', 'to fight / to box', 'to run', 'to cry', 'to jump rope',
'to play basketball', 'to share a secret / to let the cat out of the bag']

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
    hint2.innerHTML = `${activities[num2].toUpperCase()}`;
})

function change() {
    num1 = Math.floor(Math.random() * animals.length);
    cards[0].style.backgroundImage=`url(animals/${animals[num1]}.png)`;

    num3 = Math.floor(Math.random() * places.length);
    cards[2].style.backgroundImage=`url(places/${places[num3]}.png)`;

    num2 = Math.floor(Math.random() * activities.length);
    cards[1].style.backgroundImage = `url(activities/${num2}.png)`;

    hint1.innerHTML = ` `;
    hint3.innerHTML = ` `;
    hint2.innerHTML = ` `;
}