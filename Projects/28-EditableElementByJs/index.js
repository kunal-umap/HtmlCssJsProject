//element creation
let elementDiv = document.createElement('div');
let val = localStorage.getItem('text');
let text ;
if(val == null){
    text = document.createTextNode('Enter text here');
}else{
    text = document.createTextNode(val);
}

elementDiv.setAttribute('class','element');
elementDiv.setAttribute('id','elementid');

let body = document.querySelector('body');
let heading = document.getElementById('edit');

body.insertBefore(elementDiv,end);

elementDiv.appendChild(text);

elementDiv.addEventListener('click', function(){
    let textNo = document.getElementsByClassName('textarea').length;
    if(textNo==0){
        let inText = elementDiv.innerHTML;
        elementDiv.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${inText}</textarea>`;
    }

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elementDiv.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);

    });

});
