const playbtn = document.getElementById('play');
const checkbtn = document.querySelectorAll('.check')
const input = document.querySelectorAll('.questions input')
const outputCorAns = document.getElementById('outputCorAns')
const questionsContainer = document.querySelector('.questions')
const questions = document.querySelectorAll('.questions div')
const task = document.querySelector('.container');

let correct = false;
let questionNum = 0;
let correctAnswers = 0;
let answer = '';

playbtn.addEventListener('click', () => {
  //  photos.style.opacity = '100%';
    questionsContainer.style = 'display: block';
    questionsContainer.style.opacity = '100%';
    questions[0].style.opacity = '100%';
    outputCorAns.style.opacity = '100%';

})

checkbtn.forEach(checkbtn => checkbtn.addEventListener('click', () => {
    check()
}))

document.onkeypress = function (keypressed) {
    if (keypressed.key === 'Enter') check();
}

 const answers = {
    0: 'library',
    1: "chemist's",
    2: "post",
    3: 'hotel',    
    4: 'bookcase',
    5: 'fridge',
    6: 'bakery',
    7: 'skating rink',
    8: 'bedroom',
    9: 'wardrobe',
}
const altAnswers = {
    1: 'pharmacy',
    2: 'post office',
    4: 'shelf',
    5: 'refrigerator',
    6: "baker's",
    7: 'ice rink',
    8: 'bed',
}
const altAnswers2 = {
    1: 'drugstore',
    4: 'bookshelf',
}

outputCorAns.innerHTML = `${correctAnswers}/${input.length}`;


function levelChange() {
    questionNum++;
    correct = false;
    questions[questionNum].style.opacity = '100%'
    window.scroll(0, correctAnswers *( 138+16 ) + task.clientHeight)
}

function check () {
    dealWithInput();
    
    if (answer === answers[questionNum] 
        || answer === altAnswers[questionNum]
        || answer === altAnswers2[questionNum]) correct = true;
    else correct = false;
    if (correct === true) {
        input[questionNum].style.border = 'solid 3px var(--green)';
        input[questionNum].style.backgroundColor = 'var(--lightgreen)';
        correctAnswers++;
        outputCorAns.innerHTML = `${correctAnswers}/${input.length}`;
        levelChange();

    } else {input[questionNum].style.border = 'solid 3px var(--red)';
        input[questionNum].style.backgroundColor = 'var(--lightred)';
    }
}

function dealWithInput () {
    answer = input[questionNum].value;
    if (answer.slice(-1) === ' ') {
        answer = input[questionNum].value.slice(0, answer.length - 1);
    }
    if (answer[0] === ' ') answer = answer.slice(1, answer.length);
    answer = answer.toLowerCase();

    return answer;
}


// t='pottyrey'; t.slice(0, 5)

//input[questionNum].value;