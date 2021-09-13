let body = document.getElementById("body");
let darkBtn = document.getElementById("darkbtn");
const className = ["","dark","darkM1","darkM2","darkM3"];
let i =0;

darkBtn.onclick = function() {myFunction()};

function myFunction() {
    if(i==0){
        body.setAttribute('class',className[1]);
        i = 1;
    }else if(i==1){
        body.setAttribute('class',className[2]);
        i = 2;
    }else if(i==2){
        body.setAttribute('class',className[3]);
        i = 3;
    }else if(i==3){
        body.setAttribute('class',className[4]);
        i = 4;
    }else{
        body.setAttribute('class',className[0]);
        i = 0;
    }

};