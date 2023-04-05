//DOM content load

document.addEventListener("DOMContentLoaded", () => {

    fetchQuotes();

});

const url = "https://api.quotable.io/random"


//a function to fetch the data from the quotes API...fetchQuotes()

function fetchQuotes(){
    fetch(url)
    .then(res => res.json())
    .then(quotes => {
        document.getElementById("quote").innerHTML = quotes.content;
        document.getElementById("author").innerHTML = quotes.author
    })
}

fetchQuotes(url);

//a function to display random quote and aurthor on screen load...firstQuote()
//figureout the functionality of the like button hen clicked and record the number of likes
//link the share button to an external socialmedia platform
//write a function to copy contents to the users clipboard

