let timeUpdater;
const endTime = document.querySelector('.timerEndTime');
const display = document.querySelector('.timerLeft');
const button = document.querySelectorAll('[data-time]');


function SetTimer(seconds){
    clearInterval(timeUpdater);
    const current = Date.now();
    const end = current + (seconds*1000);
    displayTimeRemain(seconds);
    EndTime(end);
    
    timeUpdater = setInterval(()=>{
        const secondsLeft = Math.round((end - Date.now()) / 1000);
        
        if(secondsLeft < 0){
            clearInterval(timeUpdater);
            return;
        }
        
        displayTimeRemain(secondsLeft);
        
    },1000);
}

function EndTime(end){
    const time = new Date(end);
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const timeEnd = `Will End At ${hr<12?hr:hr-12}:${min<10?'0':''}${min}:${sec}`;
    endTime.innerText = timeEnd;
    
}

function displayTimeRemain(seconds){

    const min = Math.floor(seconds/60);
    const sec = seconds%60;
    const toDisplay = `${min}:${sec < 10 ? '0' : '' }${sec}`;
    document.title = toDisplay;
    display.innerText = toDisplay;

}
function setTime(){
    const second = parseInt(this.dataset.time);
    SetTimer(second);
}

button.forEach((button)=>button.addEventListener('click',setTime));

document.customTime.addEventListener('submit',function(e) {
    e.preventDefault();
    const minute = this.minutes.value;
    SetTimer(minute * 60);
    this.reset();
});