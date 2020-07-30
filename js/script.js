/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
                { 
                  quote: "Act as if what you do makes a difference IT Does!",
                  source: "William James",
                  tags: "inspirational"
                },

                {
                  quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                  source: "Winston Churchill"
                },

                {
                  quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
                  source: "Helen Keller"
                },

                {
                  quote: "Believe you can and you're halfway there.",
                  source: "Theodore Roosevelt",
                  tags: "inspirational"
                },

                {
                  quote: "When you have a dream, you've got to grab it and never let go.",
                  source: "Carol Burnett"
                },

                {
                  quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
                  source: "Albert Einstein",
                  year: 1930,
                  citation: "2007, Einstein: His Life and Universe by Walter Isaacson, Section: Notes, Epigraph: 1, Quote Page 565, Location 10155, Simon & Schuster, New York. (Kindle Edition)",
                },

                {
                  quote: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
                  source: "Ella Fitzgerald"
                },

                {
                  quote: "Nothing is impossible. The word itself says 'I'm possible!'",
                  source: "Audrey Hepburn"
                },

                {
                  quote: "You are never too old to set another goal or to dream a new dream.",
                  source: "C.S. Lewis"
                },

                {
                  quote: "Try to be a rainbow in someone else's cloud.",
                  source: "Maya Angelou",
                  year: 2011
                },
              ];


/***
 * `getRandomNumber` function
 ***/

function getRandomNumber() {
  
}


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {

}


/***
 * `printQuote` function
***/

function printQuote() {

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);