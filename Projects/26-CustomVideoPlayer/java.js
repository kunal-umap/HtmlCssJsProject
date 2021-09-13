const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const full = document.querySelectorAll('.full');
const fullScreen = player.querySelector('.fullScreen')

function togglePlay() {
    const method =video.paused ? 'play':'pause';
    video[method]();

    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }
}

function updateButton(){
    
    const icon = this.paused ? '▶': '⏸';
    toggle.textContent = icon;

}

function skip(){
    
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){

    video[this.name] = this.value;

}

function handelProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
}
function fullscreen(){
    player.classList.add('full');
    console.log('i');
}

video.addEventListener('click', togglePlay);

video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handelProgress);

toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip));

ranges.forEach(range => range.addEventListener('click',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)  );
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);

fullScreen.addEventListener('click',fullscreen);

