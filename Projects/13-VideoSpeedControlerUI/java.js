const video = document.querySelector('.player');
const speed = document.querySelector('.speedBar');
const speedControler = document.querySelector('.speedControler');
let check = false;


speedControler.addEventListener('mousedown',function (e){
    check = true;
});
speedControler.addEventListener('mouseup',function (e){
    check = false;
});
speedControler.addEventListener('mouseleave',function (e){
    check = false;
});
speedControler.addEventListener('mousemove',function (e){
    if(!check) return;
    e.preventDefault();
    const  y = e.pageY - this.offsetTop;
    let percent = y/this.offsetHeight;
    let per = Math.round(percent*100) ;
    const rate = (percent*3.6 + 0.4);
    speed.style.height = per + '%';
    video.playbackRate = rate ;
    speed.textContent =  `${rate.toFixed(1)}`;
});


 
