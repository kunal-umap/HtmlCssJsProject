const message = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
message.text = document.querySelector('[name="text"]').value;


function populate(){

    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
    .map(voice => 
            `
            <option value="${voice.name}">
                ${voice.name} (${voice.lang})
            </option>
            `
    ).join('');

};
function setVoice(){
    message.voice = voices.find(voice => voice.name == this.value);
    toggle();
}

function toggle(startOver = true){
    speechSynthesis.cancel();
    if(startOver === true){
        speechSynthesis.speak(message);
    }
}

function optionChange(){
    message[`${this.name}`] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged',populate);
voicesDropdown.addEventListener('change',setVoice);
options.forEach(e => e.addEventListener('change',optionChange));

speakButton.addEventListener('click',() => toggle());
stopButton.addEventListener('click',() => toggle(false));

