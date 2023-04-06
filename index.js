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
        const quote = document.getElementById("quote").innerHTML = quotes.content;
        const author = document.getElementById("author").innerHTML = quotes.author
        quote;
        author;
        
    })
}

document.getElementById("download").addEventListener("click", () =>{
    const element = docuument.body;
    html2canvas(element).then(function(canvas){
        const dataURL = canvas.todataURL("image/png");
        const img = document.createElement("img");
        img.src = dataURL
        document.body.appendChild(img);

        const link = document.createElement("a")
        link.href = dataURL;
        link.download = "screenshot.png";
        link.click();

        img.remove

    })



})
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
     




}
document.querySelector("#copy-text").onclick = 
function()
{
    copyText(document.querySelector("#quote"));

}


 


//a function to display random quote and aurthor on screen load...firstQuote()
//figureout the functionality of the like button hen clicked and record the number of likes
//link the share button to an external socialmedia platform
//write a function to copy contents to the users clipboard

