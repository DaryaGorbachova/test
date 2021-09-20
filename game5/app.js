const playbtn = document.getElementById('play');
const frog = document.getElementById('frog');
const field = document.getElementById('game')
const lilies = document.querySelectorAll('.game img');


let where = 1;
let correct = 0;
const answers = [3, ]

function jump (lilynum) {
   frog.style.top = `${150 / Math.trunc(lilies.length / 3) * Math.trunc(lilynum / 3) + 20}vh`;
   frog.style.marginLeft = `${lilies[lilynum].offsetLeft}px`;
}

jump(where);

lilies.forEach(lilies => lilies.addEventListener('click', ev => {
   where = [...game.children].indexOf(ev.target);
   jump(where);
   check();
}))

function check () {
   if (where === answers[Math.trunc(where / 3) - 1]) {
      correct++;
      console.log(correct)
   } else {

   }

}

