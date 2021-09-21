const playbtn = document.getElementById('play');
const frog = document.getElementById('frog');
const field = document.getElementById('game')
const lilies = document.querySelectorAll('.game img');
const levelOutput = document.getElementById("level");
const task = document.querySelectorAll(".task span");
const quesField = document.querySelector('.task');
const nextLvlBtn = document.getElementById('levelup');
const body = document.querySelector('body');
const everything = document.querySelector('.everything');
const exitbtn = document.getElementById('exit');
const warning = document.getElementById('warning')
const nolilies = document.querySelectorAll(".no");

let where = 1;
let position = 1;
let correct = 0;
const answers = [[3, 8, 11, 12, 16, 19], 
[4, 6, 10, 14, 15, 19], 
[5, 6, 10, 12, 17, 19],
[4, 7, 9, 14, 15, 19],
[3, 7, 11, 14, 16, 19]];
let level = 5;

const questions = [['Level 1', '', '',
'business', 'buisness', 'bisness', 
'comming', 'camming', 'coming', 
'beleive', 'belive', 'believe', 
'forty', 'fourty', 'foty',
'freind', 'friend', 'frend'],
[`Level 2`, '', '',
'begining', 'beginning', 'beggining',
'disappear', 'dissapear', 'disapear', 
'adress', 'address', 'addres',
'completli', 'completly', 'completely',
'foreign', 'foriegn', 'forieng'],
['Level 3', '', '',
'happend', 'hapend', 'happened',
'humorous', 'humourous', 'humoros',
'publiculy', 'publicly', 'publically',
'successful', 'succesful', 'sucessfull',
'untill', 'unttil', 'until'],
['Level 4', '', '',
'sence', 'sense', 'sance',
'tommorow', 'tomorrow', 'tomorow',
'lollipop', 'lollypop', 'lolipop',
'cieling', 'ceilin', 'ceiling',
'exaggerate', 'egzagerete', 'exagerate'],
['Level 5', '', '',
'discipline', 'dicipline', 'disipline',
'facinating', 'fascinating', 'fasinating',
'goverment', 'gaverment', 'government',
'grammer', 'gramar', 'grammar',
'ridicullous', 'ridiculous', 'riddicullous' ]
]

playbtn.addEventListener('click', () => {
   everything.style.display = 'block';
   jump(where);
   body.style.overflowY = 'hidden';
})



function jump (lilynum) {
   frog.style.top = `${300 / Math.trunc(lilies.length / 3) * Math.trunc(lilynum / 3) + 26}vh`;
   frog.style.marginLeft = `${lilies[lilynum].offsetLeft}px`;
}

jump(where);
 
window.onresize = function () {
   jump(where);
}

 for (let i = 0; i < questions[level - 1].length; i++) {
   task[i].innerHTML = questions[level - 1][i];
}

lilies.forEach(lilies => lilies.addEventListener('click', ev => {
   where = [...game.children].indexOf(ev.target);
   jump(where);
   check();
}))

task.forEach(task => task.addEventListener('click', e => {
   where = [...quesField.children].indexOf(e.target);
   jump(where);
   check();
}))

function check () {
   if (where === answers[level - 1][Math.trunc(where / 3) - 1]) {
      correct++;
      position = where;
      jumpScroll()
   } else {
      setTimeout(function(){
      frog.style.opacity = '0';    
      }, 500);
      setTimeout(function() {
         jump(position);
         lilies[where].style.opacity = '0'
      }, 1300);
      setTimeout(function() {
         frog.style.opacity = '100%';
         where = position;
      }, 2250);
      
   }

}

function jumpScroll() {
   window.scroll(0, lilies[where].offsetTop - 45); // horizontal and vertical scroll targets
}

function levelUp () {
   where = 1;
   position = 1;
   jump(where);
   for (let i = 0; i < questions[level - 1].length; i++) {
      task[i].innerHTML = questions[level - 1][i];
   }
   levelOutput.innerHTML = `Level ${level}`;
   lilies.forEach(lilies => lilies.style.opacity = '100%');
   nolilies.forEach(nolilies => nolilies.style.opacity = '0')
}

nextLvlBtn.addEventListener('click', () => {
   if (correct < answers[level - 1].length) return false;
   level++;
   if (level - 1 < questions.length) {
   levelUp();
   jumpScroll();
   correct = 0;
   } else {
      warning.innerHTML = "You've completed the game!";
      body.style.overflowY = 'auto';
      nextLvlBtn.style.display = 'none'; 
}
})

exitbtn.addEventListener('click', () => {
   body.style.overflowY = 'auto';
   window.scroll(0, 0);
   everything.style.display = 'none';
})

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        where -= 3;
        jump(where);
    }
    else if (e.keyCode == '40') {
        // down arrow
        if (correct < lilies.length / 3 - 1) {
        where += 3;
        jump(where);
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
       where -= 1;
       jump(where);
    }
    else if (e.keyCode == '39') {
       // right arrow
       where += 1;
       jump(where);
    }
    else if (e.keyCode == '13') {
      check();
    }
}

