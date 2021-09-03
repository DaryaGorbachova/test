const playbtn = document.getElementById('play');
const score = document.querySelectorAll('.outputCorAns');
const hint = document.querySelectorAll('.hint');
const nextbtn = document.querySelectorAll('.next');
const items1 = document.querySelectorAll('.find');
const unsplashLink = document.getElementById('unsplashlink');
const linksUnsplash = document.getElementById('linksunsplash');
const task = document.querySelectorAll('.task');
const tasks = document.querySelector('.tasks')
const objectNames = document.querySelectorAll('.objectsnames');
const items2 = document.querySelectorAll('.find2');
const photo = document.querySelectorAll('.photo');

let hintnum = 5;
let activePhoto = 0;

playbtn.addEventListener('click', () => {
tasks.style.opacity = '100%';
task[0].style.opacity = '100%';
objectNames[0].innerHTML = list1[0];
setPosition();
setPosition2();
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

let items1height = [1.16/2, 0.9, 0.9, 0.275, 0.550, 0.82/2];
let items1width = [52, 0, 60, 60, 38, -16.5];
let list1 = ['a bag', 'a disposable cap', 'a packet of crisps', 
'a pile of books','a plant', 'Congratulations!'];


let list2 = ['a cactus', 'a clock', 'a globe', 'pencils', 'paper airplane', 'Well done!']


window.onresize = setPosition;
window.onresize = setPosition2;
setPosition();

function setPosition () {
    let heightphoto = photo[activePhoto].height;
    let itemheight = 0;
    heightphoto = photo[activePhoto].height;
    for(let i =0; i < items1.length; i++) {
    itemheight = items1[i].height;
    items1[i].style.top = `${heightphoto*items1height[i] + itemheight}px`
    items1[i].style.left = `${items1width[i]}%`
}
}

let items2height = [0.47, 0.22, 1*1.38/2, 1*1.4/2, 0.18];
let items2width = [38, 75, -3, 60, 70];

setPosition2();
function setPosition2 () {
    let heightphoto = photo[1].height;
    let itemheight = 0;
    heightphoto = photo[1].height;
    for(let i =0; i < items2.length; i++) {
    itemheight = items2[i].height;
    items2[i].style.top = `${heightphoto*items2height[i] + itemheight}px`
    items2[i].style.left = `${items2width[i]}%`
}
}
    let elem1 = 0;


function vanish (num) {
    if (activePhoto === 0) {
    if (num === elem1) {
        items1[elem1].style.opacity = '0%';
        elem1++;
        objectNames[0].innerHTML = list1[elem1];
        score[0].innerHTML = `${elem1}/${items1.length}`; 
    }
    if (elem1 === items1.length) {
        toNext()
        nextbtn[0].style.opacity = '100%';
    }} else if (activePhoto === 1) {
        if (num === elem1) {
            items2[elem1].style.opacity = '0%';
            elem1++;
            objectNames[1].innerHTML = list2[elem1];
            score[1].innerHTML = `${elem1}/${items2.length}`; 
        }
    }
    
            
}
score[0].innerHTML = `${elem1}/${items1.length}`;
score[1].innerHTML = `${elem1}/${items2.length}`;

 
for (let i = 0; i < list1.length - 1; i++) {
items1[i].addEventListener('click', () => vanish(i));    
}

for (let i = 0; i < list2.length - 1; i++) {
    items2[i].addEventListener('click', () => vanish(i));    
    }

hint[0].addEventListener('click', () => {
        items1[elem1].style.animation = 'flick 1s 2';
})
hint[1].addEventListener('click', () => {
    items2[elem1].style.animation = 'flick 1s 2';
})

function toNext () {
activePhoto++
tasks.style.opacity = '100%';
task[activePhoto].style.opacity = '100%';
objectNames[activePhoto].innerHTML = list2[0];
setPosition();
elem1 = 0;
}
