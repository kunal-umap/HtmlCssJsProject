const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const second = now.getSeconds();

    const mins = now.getMinutes();
    
    const hour = now.getHours();
    console.log(hour);
    console.log(mins);
    console.log(second);
    
    const secondDegree = (second/60)*360+90;
    
    const minDegree = (mins/60)*360+90;

    const hourDegree = (hour/12)*360+90;
    
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
    minHand.style.transform = `rotate(${minDegree}deg)`;
    
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate,1000);