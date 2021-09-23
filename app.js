// // Declare Variable
// var body = document.querySelector('body');
// var button = document.querySelector('button');
// var quoteList = document.querySelector('#quoteList');


// // Add Event Listener
// document.querySelector('button').addEventListener('click', generateQuotes);

// function generateQuotes() {



// }
var quoteList = document.getElementById("quoteList");
var botton = document.querySelector('button');

getQuote();

botton.addEventListener('click', function() {
    getQuote();
});

function getQuote() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.whatdoestrumpthink.com/api/v1/quotes/random');
    ourRequest.onload = function() {
        // console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);

    };
    ourRequest.send();
}

function renderHTML(data) {
    quoteList.innerHTML = data.message;
}