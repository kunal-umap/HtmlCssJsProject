const container = document.querySelector('.container');
const text = container.querySelector('h1');
const len = 150;
function shadowMove(e){
    // const width = offsetWidth.container;
    // const height = offsetHeith.container;
    const { offsetWidth:width ,offsetHeight:height } = container;
    let { offsetX: x ,offsetY: y } = e;
    // console.log(width,height,x,y);
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const lenx = Math.round((x/width*len) - (len/2));
    const leny = Math.round((y/height*len) - (len/2));
    text.style.boxShadow =`
    ${-lenx}px ${-leny}px 1rem rgba(255,0,255,0.7)
    `;

}

container.addEventListener('mousemove',shadowMove);
