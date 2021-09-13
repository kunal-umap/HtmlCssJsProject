const button = document.querySelectorAll("button");
let screen = document.getElementById('solve');
let screenValue = "";
screen.value = screenValue;
let ans = "";
let temp='';
button.forEach((e)=>{
    e.addEventListener('click',(f)=>{
        let enteredText = f.target.innerText;
        if(enteredText == '/'||enteredText ==  '*'||enteredText == '-'||enteredText == '+'){
            temp = '';
            screen.value = " ";
            ans =  eval(screenValue);
            screenValue = ans;
            screenValue += enteredText;
        }else if(enteredText == 'C'){
            temp = '';
            ans = "";
            screenValue = "";
            screen.value = screenValue;
        }else if(enteredText == '='){
            temp = '';
            ans =  eval(screenValue);
            screenValue = ans;
            screen.value = screenValue;
        }else{
            screenValue += enteredText;
            temp += enteredText;
            screen.value = temp;
        }
    });
});