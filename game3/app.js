const playbtn = document.getElementById('play');
const score = document.querySelectorAll('.outputCorAns');
const hint = document.querySelectorAll('.hint');
const items1 = document.querySelectorAll('.find1');
const unsplashLink = document.getElementById('unsplashlink');
const linksUnsplash = document.getElementById('linksunsplash');
const task = document.querySelectorAll('.task');
const tasks = document.querySelector('.tasks')
const objectNames = document.querySelectorAll('.objectsnames');

const photo1 = document.getElementById('photo1');

let hintnum = 5;

playbtn.addEventListener('click', () => {
tasks.style.opacity = '100%';
task[0].style.opacity = '100%';
objectNames[0].innerHTML = list1[0];
setPosition();
})


unsplashLink.onmouseenter = function () {
    unsplashLink.style.color = 'white';
    linksUnsplash.style.color = 'var(--black)'
    linksUnsplash.style.opacity = '100%';
}
unsplashLink.onmouseleave = function () {
    unsplashLink.style.color = 'var(--black)';   
    linksUnsplash.style.opacity = '0%';
}
let photonum = 0;

let items1height = [1.16/2, 0.9, 0.9, 0.275, 0.550, 0.82/2];
let items1width = [52, 0, 60, 60, 38, -16.5];
let list1 = ['a bag', 'a disposable cap', 'a packet of crisps', 
'a pile of books','a plant', 'Congratulations!'];

window.onresize = setPosition;



function setPosition () {
    let heightphoto = photo1.height;
    let itemheight = 0;
    console.log('1');
    heightphoto = photo1.height;
    for(let i =0; i < items1.length; i++) {
    itemheight = items1[i].height;
    items1[i].style.top = `${heightphoto*items1height[i] + itemheight}px`
    items1[i].style.left = `${items1width[i]}%`
}
}
    let elem1 = 0;

function vanish (num) {
    if (num === elem1) {
        items1[elem1].style.opacity = '0%';
        elem1++;
        objectNames[0].innerHTML = list1[elem1];
        score[0].innerHTML = `${elem1}/${items1.length}`; 
    }
    if (elem1 === 5) {
        list1[5].style.animation = 'color-size-change 2s 3';
    }
            
}
score[0].innerHTML = `${elem1}/${items1.length}`;

 
for (let i = 0; i < list1.length - 1; i++) {
items1[i].addEventListener('click', () => vanish(i));    
}

hint[0].addEventListener('click', () => {
        items1[elem1].style.animation = 'flick 1s 2';
})

