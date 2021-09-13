let addButton = document.getElementById("addbtn");

// function to add note 
displayNotes();

addButton.addEventListener('click',function(){
    let textarea = document.getElementById('addTxt');
    let title = document.getElementById('title');
    let notes = localStorage.getItem("notes");
    let currNote = textarea.value;
    let currTitle = title.value;
    textarea.value = "";
    title.value = "";
    if(notes == null){
        nodeObj = [];
    }else{
        nodeObj = JSON.parse(notes);
    }
    let myObj = {
        title:currTitle,
        text:currNote
    }
    nodeObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(nodeObj));
    
    displayNotes();
    
});

function displayNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        nodeObj = [];
    }else{
        nodeObj = JSON.parse(notes);
    }
    let html = "";
    nodeObj.forEach(function(element,index){

        html += `
        <div class="notebox card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <a href="#" id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</a>
            </div>
        </div>`
    });
    let notesContainer = document.getElementById("notes");
    if(nodeObj.length != 0){
        notesContainer.innerHTML = html;
    }else{
        notesContainer.innerHTML = `Nothing Added !!💩 `
    }
}

// Detete notes function stearts here

function deleteNotes(index){

    let notes = localStorage.getItem("notes");
    if(notes == null){
        nodeObj = [];
    }else{
        nodeObj = JSON.parse(notes);
    }
    nodeObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(nodeObj));
    displayNotes();
}

// For search in notes 

let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){

    let inputValue = search.value.toLowerCase();
    let contentBox = document.getElementsByClassName("notebox");
    Array.from(contentBox).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let cardtitle = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputValue) || cardtitle.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});