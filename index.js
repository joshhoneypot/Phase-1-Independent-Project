//DOM content load

document.addEventListener("DOMContentLoaded", () => {
   
    fetchQuotes();
});

const url = "https://api.quotable.io/random"
const likeButton = document.querySelector(".like-button");
const likeIcon = document.querySelector("#thumb-icon");
const count = document.querySelector("#count");

let clicked=false;

    likeButton.addEventListener("click", ()=>{
    if(!clicked){
        clicked = true;
        count.textContent++;
    }
    else {
        clicked = false; 
        count.textContent--;
    }

})


//a function to fetch the data from the quotes API...fetchQuotes()
function fetchQuotes(){

    fetch(url)
    .then(res => res.json())
    .then(quotes => {
        const quote = document.getElementById("quote").innerHTML = quotes.content;
        const author = document.getElementById("author").innerHTML = quotes.author
        quote;
        author;
        
    })
}

function copyText(htmlElement){
    if (!htmlElement){
        return;
    }

    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);

    inputElement.select();
    inputElement.parentNode.removeChild();

    document.execCommand('copy');
    

document.querySelector("#copy-text").onclick = 
function()
{
    copyText(document.querySelector("#quote"));

}
}


 

