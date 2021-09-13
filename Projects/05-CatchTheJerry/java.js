const score = document.querySelector('.score');
const holes = document.querySelectorAll('.hole');
const jerry = document.querySelectorAll('.catch');
let lastHole;
let timeUp = false;
let point = 0;
function randomTime(min,max) {
    return Math.round(Math.random()*(max-min) + min);
}

function randomHole(holes){
    const index = Math.round(Math.random() * holes.length);
    const hole = holes[index];
    if(hole == lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function poop(){
    const time = randomTime(300,1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() =>{  
        hole.classList.remove('up');
        if(!timeUp) poop();
    },time);
}

function playGame() {
    score.textContent = 0;
    timeUp = false;
    point = 0;
    poop();
    setTimeout(()=> timeUp = true,10000);
}

function scoring(e){
    if(!e.isTrusted) return;
    point++;
    this.parentNode.classList.remove('up');
    score.textContent = point;
}

jerry.forEach((jerry)=> jerry.addEventListener('click',scoring));