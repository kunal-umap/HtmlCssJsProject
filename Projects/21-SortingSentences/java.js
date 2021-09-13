const list = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function trm(word){
    return word.replace(/^(a |an |the )/i,'').trim();
}
const sortedList = list.sort( (a,b)=> trm(a) > trm(b) ? 1:-1);

document.querySelector("#list").innerHTML = sortedList
                .map(list => `<li>${list}</li>`)
                .join('');