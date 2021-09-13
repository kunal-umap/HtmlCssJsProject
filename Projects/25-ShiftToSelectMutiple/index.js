const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheck;

function handleCheck(e){

    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkboxes => {
            console.log(checkboxes);
            if(checkboxes === this || checkboxes === lastCheck){
                inBetween = !inBetween;
                console.log('we ... here');
            }

            if(inBetween){
                checkboxes.checked = true;
            }
        });
    }
    lastCheck = this;
}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click',handleCheck));