const game1 = document.getElementById('game1');
const unsplashLink = document.getElementById('unsplashlink');
const linksUnsplash = document.getElementById('linksunsplash');


let passed1 = Boolean;
passed1 = import('../talking challenge/talking challenge.js');
if (passed1 === true) {
game1.style.backgroundColor = 'rgba(255, 255, 255, 0)';
game1.style.border = 'solid 3px var(--border-col)';
}

unsplashLink.onmouseenter = function () {
    unsplashLink.style.color = 'white';
    linksUnsplash.style.color = 'var(--black)'
    linksUnsplash.style.opacity = '100%';
}
unsplashLink.onmouseleave = function () {
    unsplashLink.style.color = 'var(--black)';   
    linksUnsplash.style.opacity = '0%';
}