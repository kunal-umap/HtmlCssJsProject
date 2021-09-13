const slider = document.querySelector('.scrollArea');
let click = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e)=>{
    click =true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave',()=>{
    click= false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup',()=>{
    click=false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove',(e)=>{
    if(!click) return;
    e.preventDefault();
    const x = e.pageX -slider.offsetLeft;
    let walk = (x-startX);
    slider.scrollLeft = scrollLeft - walk;
});