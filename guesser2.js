// var randomNumber =
// Math.floor(Math.random()*100 +1);
// console.log(randomNumber);

var guess = document.getElementById('guessField');
var guessMessage = document.getElementById('lowHi');
var guessedNumber = document.getElementById('bigNumber');
var clear = document.getElementById('guessClear');
var reset = document.getElementById('guessReset');
var lastGuest = document.getElementById('lastGuess');
var boxMin = document.getElementById('guessMin');
var boxMax = document.getElementById('guessMax');
var rangeButton = document.getElementById('rangeSet')

var minNum =0;
var maxNum = 100;
var randNum = returnRandom();

function returnRandom () {
return Math.floor((Math.random() * (parseInt(maxNum) - parseInt(minNum) + 1)) + parseInt(minNum));
console.log(returnRandom)
};

// parse INT numbers and call the cieling and floor to only work w/integers. 
// function makeRange (){
// minGuess = parseInt(minNum.value);
// maxGuess = parseInt(maxNum.value);
// newNumber = generateRandom();
// return newNumber;
// };

// function generateRandom () {
// randomNumber = Math.floor(Math.random() * (maxGuess - minGuess)) + minGuess;
// console.log(randomNumber);

// }



// parse max and min integer on keyup 

// function parseRange (){
// var minGuess = parseInt(minNum.value);
// var maxNum = parseInt(maxNum.value);
// console.log(minGuess);
// }

// guess.addEventListener('keyup', function(){
//   var minGuess = parseInt(minNum.value);
//   var maxNum = parseInt(minNum.value);
//   console.log(minGuess);
// });


// make random 


// Check to see if the random integer equals the input or is lower or higher

// function checkGuess (event) {
//   event.preventDefault();
//   var userGuess = parseInt(guess.value);
//   if ((userGuess > maxGuess) || (userGuess < minGuess)) {
//   lastGuess.innerHTML = "That's out of your range. Try again"
//   } else {
//   lastGuess.innerHTML = "That's in your range. Proceed.";
//   }
// }

// function checkGuess (event, randomNumber) {
//   event.preventDefault();
//   var valueIsNan =  isNaN(guess.value);
//   // console.log(valueIsNan);
//    var userGuess = parseInt(guess.value);
//   console.log(randomNumber);
//   if (userGuess === randomNumber) {

//     guessMessage.innerHTML = 'Boom';
//     guessedNumber.innerHTML = 'Way to go!';
//   } else if (userGuess < randomNumber){
//   guessMessage.innerHTML = 'That is too low';
//   lastGuess.innerHTML = 'Your last guess was'
//   guessedNumber.innerHTML = userGuess;

//   } else if (userGuess > randomNumber){
//   guessMessage.innerHTML  = 'That is too high';
//    guessedNumber.innerHTML = userGuess;
//    lastGuess.innerHTML = 'Your last guess was'
//   }
//   else if (valueIsNan === true){
//     guessMessage.innerHTML = 'Um that is not a number. Guess again.';
//   guessedNumber.innerHTML = '';
//    lastGuess.innerHTML = '';
//   }
//   else {
//     guessMessage.innerHTML = 'Brain fart. Try again.';
//   }
// }

// If the random number equals the number, then increase the range

// Clear the text field

// function clearFields(event) {
//   event.preventDefault();
//   guess.value = "";
//   guessMessage.innerHTML = "";
// }

// // Enable reset button  
// function resetButton() {
//   window.location.reload();
// }


//Make buttons disabled until something is typed inside
// function checkInfo (){
//   // console.log("checkInfo")
//   //first check for info 
//   if (guess.value === "") {
//     // If no info disable button 
//     guessSubmit.setAttribute("disabled", "true");
//   clear.setAttribute("disabled", "true");
//   }
//   //If info then enable button by removing disabled attribute
//   else {
//     guessSubmit.removeAttribute("disabled");
//      reset.removeAttribute("disabled");
//   clear.removeAttribute("disabled");
//   }
 
// };

rangeButton.addEventListener('click', returnRandom);
// clear.addEventListener('click', clearFields);
// guessSubmit.addEventListener('click', checkGuess);
// guess.addEventListener('input', checkInfo);
// reset.addEventListener('click', resetButton);
