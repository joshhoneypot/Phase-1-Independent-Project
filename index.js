//DOM content load

document.addEventListener("DOMContentLoaded", () => {
    fetchQuotes();
});

//initializing variables
const url = "https://api.quotable.io/random"
const likeButton = document.querySelector(".like-button");
const likeIcon = document.querySelector("#thumb-icon");
const count = document.querySelector("#count");

//line 13 to 25 updates the like button
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

//the following functions sends a fetch request to the remote api and converts the response to a .json file
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

//the following function is invoked on the click of the coppy button
//it takes a htmlElement as a parameter 
function copyText(htmlElement){
    if (!htmlElement){
        return;
    }

    //initialises the variable of the text to be copied and also its content
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');

    //gets the value of the created element
    inputElement.setAttribute('value', elementText);

    //appends the input element with the targeted text  to the DOM but it does not display it on the page
    document.body.appendChild(inputElement);

    //highlights the text in the inputelent
    inputElement.select()

    //the following line copies the highlighted text to the clipboard
    document.execCommand('copy');

    //deletes the created element
    document.body.removeChild(inputElement)
}
document.querySelector("#copy-text").onclick = 
//the function below calls the copyText() function on click of the button
function()
{
    copyText(document.querySelector("#quote"));
    alert("Quote copied to clipboard")
}




 

