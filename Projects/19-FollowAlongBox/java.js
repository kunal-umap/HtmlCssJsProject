const link = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.appendChild(highlight);


function mouseHover(){
    const elemPos = this.getBoundingClientRect();

    highlight.style.width = `${elemPos.width}px`;
    highlight.style.height = `${elemPos.height}px`;
    highlight.style.transform = `translate(${elemPos.x + scrollX}px,${elemPos.y + scrollY}px)`;
    
    
};

link.forEach(a => a.addEventListener("mouseenter",mouseHover));