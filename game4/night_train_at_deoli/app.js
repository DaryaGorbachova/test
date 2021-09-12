const tasks = document.querySelectorAll('.task');
const task1 = document.querySelectorAll(".task1");
const checkbtn = document.querySelectorAll('.submit');
const answers1 = document.querySelectorAll('.task1 input');
const labels = document.querySelectorAll('.io');
const outputCorAns = document.getElementById('outputCorAns');
const tryagainbtn = document.querySelector('.try');
const warning = document.getElementById('warning');

    let present = 'show';
    let answers = [];
    let correct1 = 0;
    const correctAnswers = [3, 6, 10, 11, 16, 19]
tasks.forEach(task => task.addEventListener('click', (e) => {

    if(e.target.id == 'questions') showHide(0, present)
    else if (e.target.id == 'matching') showHide(1, present)
    else if (e.target.id == 'discussion') showHide(2, present)
    else if (e.target.id == 'transcription') showHide(3, present)
}))

function showHide (el, action) {
    if(action === 'show') task1[el].style.display = 'block';
    else if (action == 'hide') task1[el].style.display = 'none';
    if (present === 'show') present = 'hide';
    else if (present === 'hide') present = 'show';
}

function checkQuestions () {
    correct1 = 0;
    if (answers.length > 0) answers = [];
    for (let i = 0; i < answers1.length; i++) {
        if (answers1[i].checked === true) answers.push(i)
    }

    if (answers.length !== correctAnswers.length) {
        warning.innerHTML = 'Answer all the questions first!'
        return false;
    } 
    warning.style.display = 'none';
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            correct1++;
            labels[correctAnswers[i]].style.backgroundColor = 'var(--lightgreen)';
            labels[correctAnswers[i]].style.color = 'var(--green)';
        } else {
            labels[correctAnswers[i]].style.backgroundColor = 'var(--lightgreen)';
            labels[correctAnswers[i]].style.color = 'var(--green)';   
            labels[answers[i]].style.backgroundColor = 'var(--lightred)'
            labels[answers[i]].style.color = 'var(--red)'    
        }
        outputCorAns.style.opacity = '100%';
        outputCorAns.innerHTML = `${correct1}/${correctAnswers.length}`;
        checkbtn[0].style.opacity = '0';
        tryagainbtn.style.opacity = '100%';
        if (correct1 === correctAnswers.length) {
                warning.innerHTML = 'Congratulations!'
                warning.style.animation = 'color-size-change 4s infinite'
        }
    }
}

function tryagain () {
    answers = [];
    correct1 = 0;
    for (let i = 0; i < labels.length; i++) {
    labels[i].style.backgroundColor = 'var(--white)';
    labels[i].style.color = 'var(--black)';
    }
    checkbtn[0].style.opacity = '100%';
    tryagainbtn.style.opacity = '0%';
}

checkbtn[0].addEventListener('click', ()=> {
    checkQuestions();
})

tryagainbtn.addEventListener('click', () => {
    tryagain();
})