function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  const tasks = document.querySelectorAll('.task');
const task1 = document.querySelectorAll(".task1");
const checkbtn = document.querySelectorAll('.submit');
const answers1 = document.querySelectorAll('.form1 input');
const labels = document.querySelectorAll('.io');
const outputCorAns = document.querySelectorAll('.outputCorAns');
const warning = document.querySelectorAll('.warning');

const  dragaims = document.querySelectorAll('.dragaim span');
const dragtext = document.querySelectorAll(".drag p");
const dragfield = document.querySelector(".drag");

const answers3 = document.querySelectorAll('.fillgaps input');

    let present = 'show';
    let answers = [];
    let correct1 = 0;
    const correctAnswers = [3, 6, 10, 11, 16, 19];
    const dragAnswers = ['drag2', 'drag1', 'drag5', 'drag3', 'drag4'];
    const fillAnswers = ['helplessly', 'restless', 'further', 'impatient', 'discovering', 'unchanged']

tasks.forEach(task => task.addEventListener('click', (e) => {
    if(e.target.id == 'prelistening') showHide(0, present)
    else if(e.target.id == 'questions') showHide(1, present)
    else if (e.target.id == 'fillgaps') showHide(2, present)
    else if (e.target.id == 'discussion') showHide(3, present)
    else if (e.target.id == 'transcription') showHide(4, present)
}))

function showHide (el, action) {
    if(action === 'show') task1[el].style.display = 'block';
    else if (action == 'hide') task1[el].style.display = 'none';
    if (present === 'show') present = 'hide';
    else if (present === 'hide') present = 'show';
}

function checkQuestions () {
    correct1 = 0;
    answers = [];
    for (let i = 0; i < answers1.length; i++) {
        if (answers1[i].checked === true) answers.push(i)
    }

    if (answers.length !== correctAnswers.length) {
        warning[1].innerHTML = 'Answer all the questions first!'
        return false;
    } 
    warning[1].style.display = 'none';
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
        outputCorAns[1].style.opacity = '100%';
        outputCorAns[1].innerHTML = `${correct1}/${correctAnswers.length}`;
        if (correct1 === correctAnswers.length) {
            warning[1].style.display = 'block';
                warning[1].innerHTML = 'Congratulations!';
                warning[1].style.animation = 'color-size-change 4s infinite';
        }
    }
}


checkbtn[1].addEventListener('click', ()=> {
    checkQuestions();
})




function checkPrelistening () {
    warning[0].style.display = 'none';
    correct1 = 0;
    for (let i = 0; i < dragaims.length; i++){
        if (dragaims[i].children[0].id === dragAnswers[i]) {
            correct1++;
            dragaims[i].style.backgroundColor = 'var(--green)';
        } else dragaims[i].style.backgroundColor = 'var(--red)';
}
outputCorAns[0].style.opacity = '100%';
outputCorAns[0].innerHTML = `${correct1}/${dragAnswers.length}`;
if (correct1 === dragAnswers.length) {
    warning[0].style.display = 'block';
    warning[0].innerHTML = 'There you go!'
    warning[0].style.animation = 'color-size-change 4s infinite'
}
}


checkbtn[0].addEventListener('click', () => {
    for (let i = 0; i < dragaims.length; i++){
    if (dragaims[i].children.length < 1) {
        warning[0].innerHTML = 'Finish the task first!';
        return false;
    }

}
    checkPrelistening();
})

let elem;
dragtext.forEach(dragtext => dragtext.addEventListener('click', ev => {
    if (ev.target.parentElement.className === 'drag') elem = ev.target.id;
   else  dragfield.appendChild(ev.target);
}))

dragaims.forEach(dragaims => dragaims.addEventListener('click', e => {
 e.target.appendChild(document.getElementById(elem));
 elem = 0;
}))

function dealWithInput () {
    answers = [];
    let answer = '';
    for (let i = 0; i < fillAnswers.length; i++) {
    answer = answers3[i].value;
    if (answer.slice(-1) === ' ') {
        answer = answers3[i].value.slice(0, answer.length - 1);
    }
    if (answer[0] === ' ') answer = answer.slice(1, answer.length);
    answer = answer.toLowerCase();
    answers.push(answer);
    }
    return answers;
}

function checkFill () {
    correct1 = 0;
    for (let i = 0; i < fillAnswers.length; i++) {
        if (answers[i] === fillAnswers[i]) {
            correct1++;
            answers3[i].style.backgroundColor = 'var(--lightgreen)';
            answers3[i].style.border = 'solid 3px var(--green)';
        } else {
            answers3[i].style.backgroundColor = 'var(--lightred)';
            answers3[i].style.border = 'solid 3px var(--red)';
    }
    outputCorAns[2].style.opacity = '100%';
    outputCorAns[2].innerHTML = `${correct1}/${fillAnswers.length}`;
}
if (correct1 === fillAnswers.length) {
    warning[2].style.display = 'block';
    warning[2].innerHTML = 'Good job!';
    warning[2].style.animation = 'color-size-change 4s infinite';
}
}

checkbtn[2].addEventListener('click', () => {
    dealWithInput();
    checkFill();
})