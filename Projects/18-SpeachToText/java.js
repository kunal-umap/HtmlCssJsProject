const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();

recognition.interimResults = true;
// recognition.lang = 'en-US';

let p = document.createElement('p');
const spech = document.querySelector('.speach');
spech.appendChild(p);

recognition.addEventListener('result', e => {

    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    console.log('s');
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        spech.appendChild(p);
    }

});

recognition.addEventListener('end',recognition.start);

recognition.start();
