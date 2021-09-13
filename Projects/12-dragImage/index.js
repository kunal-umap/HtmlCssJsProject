const box = document.querySelectorAll('.box');
const pto = document.querySelector('.pto');

// drag start
pto.addEventListener('dragstart',function(){
    // console.log("dragstart");
    this.className += ' hold' ;
    setTimeout(() => this.className = 'invisible', 0);
});
// drag end
pto.addEventListener('dragend',function(){
    // console.log("end");
    this.className = 'pto';
});
for(const item of box){
    //  dragover
    item.addEventListener('dragover',function(e){
        // console.log("over");
        e.preventDefault();
    });
    //  dragenter
    item.addEventListener('dragenter',function(e){
        // console.log("enter");
        e.preventDefault();
        this.className += ' hoverimg';
    });
    //  dragleave
    item.addEventListener('dragleave',function(){
        // console.log("leave");
        this.className = 'box'
    });
    //  drop
    item.addEventListener('drop',function(){
        // console.log("drop");
        this.className = 'box'
        this.append(pto)
    });
    
}