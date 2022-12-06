
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const quotetxt = document.querySelector("#quotetxt");


// not sure yet
//let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;



// Quote Array Yogi Berra Quotes https://ftw.usatoday.com/2019/03/the-50-greatest-yogi-berra-quotes This is the Array the Quotes will pull from
let quotes_array = [
    "When you come to a fork in the road, take it",
    "You can observe a lot by just watching",
    "No one goes there nowadays, it's too crowded.",
    "You better cut the pizza in four pieces because I'm not hungry enough to eat six.",
    "You've got to be very careful if you don't know where you are going, because you might not get there.",
    "We made too many wrong mistakes."
  ];

// Match the text entered with the provided text on the page:


// Start the timer:
//This will have a time limit https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
//let TIME_LIMIT = 60;

// Reset everything:


// Event listeners the reset button:

resetButton.addEventListener('click',superrest)


function superrest () {
  updateQuote();  
  clearInterval(intervalID);
  theTimer.innerHTML = "00:00:00";
  testArea.value = "";
  intervalID=null;
}


// This selects the quote  --tutor Bishoy  --geeksforgeeks
function updateQuote() {
    quotetxt.textContent = null;
    current_quote = quotes_array[quoteNo];
    quotetxt.textContent = current_quote;
   
    // separate each character and make an element
    // out of each of them to individually style them
    //current_quote.split('').forEach(char => {
   //   const charSpan = document.createElement('span')
  //    charSpan.innerText = char
 //    quotetxt.appendChild(charSpan)
//})
   
    // roll over to the first quote
    if (quoteNo < quotes_array.length - 1)
      quoteNo++;
    else
      quoteNo = 0;
  }

  // https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript -- tutor bishoy 

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var milisecondsLabel = document.getElementById("mili")
var totalmiliseconds = 0;
var intervalID = null;


function setTime() {
 ++totalmiliseconds;
// milisecondsLabel.innerHTML = pad(totalmiliseconds % 1000);
 //secondsLabel.innerHTML = pad(parseInt(totalmiliseconds / 60));
// minutesLabel.innerHTML = pad
 theTimer.innerHTML = millisToMinutesAndSeconds(totalmiliseconds)
//console.log(millisToMinutesAndSeconds(totalmiliseconds))
}

// tutor Bishoy 
function pad(val) {
 var valString = val + "";
 if (valString.length < 2) {
   return "0" + valString;
 } else {
   return valString;
 }
}

function millisToMinutesAndSeconds(millis) {
   var minutes = Math.floor(millis / 60000);
   var seconds = Math.floor(((millis % 60000) / 1000));
   return minutes + ":" + pad(seconds) + ":" + pad(totalmiliseconds % 1000);
 }


 // Event listeners testarea tutor Bishoy 
 testArea.addEventListener("keyup", function(){
    if (intervalID==null) {
     intervalID = setInterval(setTime, 1);
    }
    if(testArea.value=== quotetxt.textContent){
     clearInterval(intervalID)

     //create new p tag for leaderboards then append text to ptag set     div.append #score1 
   }
   });
 
  //will highlight words https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript 

  function highlight(text) {
    var innerHTML = quotetxt.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  }

updateQuote();