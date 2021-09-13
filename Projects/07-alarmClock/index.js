// ararm desigining section
const entry = document.querySelector('.div');
const input = document.querySelector('#time');
let time = [
    minut=""  ,
    hour =""
];
let html = "";
const audio = document.querySelector(`audio`);
function ringAlarm(){
    audio.play();
}

input.addEventListener('blur', () => {
    time.minut = input.value.slice(14,16);
    time.hour = input.value.slice(11,13);
    AlarmDate = new Date(input.value);
    now = new Date();
    ringAfter = AlarmDate - now;
    let newval = `
                    <h2>Alarm Will Ring At ${time.hour} hour and ${time.minut} minut   </h2>
                `
    html += newval;
    entry.innerHTML = html;
    setTimeout(() => {
        console.log("playing");
        ringAlarm();
    }, ringAfter);
    input.value = "";
});
// 2021-08-24T18:40
// input.value.slice(0,4);




const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const second = now.getSeconds();

    const mins = now.getMinutes();
    
    const hour = now.getHours();
    // console.log(hour);
    // console.log(mins);
    // console.log(second);
    
    const secondDegree = (second/60)*360+90;
    
    const minDegree = (mins/60)*360+90;

    const hourDegree = (hour/12)*360+90;
    
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
    minHand.style.transform = `rotate(${minDegree}deg)`;
    
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
} 
setInterval(setDate,1000);

