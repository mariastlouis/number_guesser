var guess = document.getElementById('guessField');
// Tells whether user is low or high and for out of range messages
var guessMessage = document.getElementById('lowHi');
// Displays big guessed number
var guessedNumber = document.getElementById('bigNumber');
// clear button
var clear = document.getElementById('guessClear');
// reset button
var reset = document.getElementById('guessReset');
// creates message 'your last guess was' and adds other messages to user
var lastGuess = document.getElementById('lastGuess');
// button that sets range
var submitRange = document.getElementById('rangeButton');
// set minimum number to 0 initially
var minNum = 0;
// gets the value min input
var boxMin = document.getElementById('guessMin');
// sets maxium number to 100 initially
var maxNum = 100; 
// gets value of max input
var boxMax = document.getElementById('guessMax');
// Area to put text to challenge user to increase range
var challengeMessage = document.getElementById('challenge_message');
// Flower that spins upon win
var flowerSpinner = document.getElementById('flower_spinner');
// Message that helps guide users through playing the game
var rangeMessage = document.getElementById('range_message');
// global variable that will have the integer value of the user's guess. 
var userGuess; 


// Set Default values 
function defaultValues(){
  boxMin.value=1;
  boxMax.value = 100;
  ranNumber = randomNumber();
};

// load default values
window.onload = function() {
  defaultValues();
};

//  Pull in the numbers from the range
function changeRange () {
  checkRange();
  minNum = boxMin.value;
  maxNum = boxMax.value;
  ranNum = randomNumber();
  console.log(ranNum);
  submitRange.setAttribute("disabled","true")
  guess.placeholder ="Enter a number between " + minNum + " and " + maxNum;
};

 // Generate Random number
 function randomNumber() {
  return Math.floor((Math.random() * (parseInt(maxNum) - parseInt(minNum) + 1)) + parseInt(minNum));
};

// Check to see if max number is bigger than min number
function checkRange (){
  if (boxMax.value <= boxMin.value){
    lastGuess.innerHTML= 'The max range number has to be bigger than the minimum. Try again.';
    clearText();
  }; 
};


// Clears all of the messages from previous guesses and ensures flower does not pop up when not wanted
function clearText () {
  guessMessage.innerHTML="";
  guessedNumber.innerHTML="";
  challengeMessage.innerHTML =""
  flowerSpinner.classList.add('hidden');
};

// What to do if guess is correct
function correctGuess () {
 guessedNumber.innerHTML = '';
 lastGuess.innerHTML = 'BOOM! You got it!';
 challengeMessage.innerHTML ="Think you're so smart? Your range has been increased. Try again."
 boxMin.value = parseInt(minNum) -10;
 boxMax.value = parseInt(maxNum) +10;
 guess.value = "";
 changeRange();
 checkInfo();
 reset.removeAttribute("disabled");
 flowerSpinner.classList.remove('hidden');
 rangeMessage.innerHTML = "Your range has increased. Guess below."
};


// what to do if guess is too high
function highGuess () {
 guessMessage.innerHTML  = 'That is too high';
 guessedNumber.innerHTML = userGuess;
 lastGuess.innerHTML = 'Your last guess was'
 challengeMessage.innerHTML =""
 flowerSpinner.classList.add('hidden');
};


// what to do if guess is too low
function lowGuess() {
  lastGuess.innerHTML = 'Your last guess was'
  guessMessage.innerHTML = 'That is too low';
  flowerSpinner.classList.add('hidden');
  guessedNumber.innerHTML = userGuess;
  challengeMessage.innerHTML =""
};

// checks to see if guess matches the random number

function checkGuess (event) {
  event.preventDefault();
  // First see if number entered is a number
  userGuess = parseInt(guess.value);
  if (isNaN(userGuess)) {
    lastGuess.innerHTML= 'That value is not a number. Try again.';
    clearText();
    // Now make sure number is in range
  } else if (parseInt(guess.value) < minNum || parseInt(guess.value) > maxNum) {
    lastGuess.innerHTML='Number is out of range, your number needs to be between ' + minNum + ' and ' + maxNum + '.';
    clearText();
  } else if (userGuess === ranNum) {
    correctGuess();
    guessMessage.innerHTML="";
  } else if (userGuess < ranNum && userGuess >= minNum) {
    lowGuess();
  } else if (userGuess > ranNum){
    highGuess();
  }
  else {
   lastGuess.innerHTML='Try guessing again';
   clearText();

 }
}

// clear button
function clearFields(event) {
  event.preventDefault();
  guess.value = "";
  guessMessage.innerHTML = "";
}

// reset button
function resetButton() {
  window.location.reload();
}

// disable buttons until something is in the input field
function checkInfo (){
  //first check for info 
  if (guess.value === "") {
    // If no info disable button 
    guessSubmit.setAttribute("disabled", "true");
    reset.setAttribute("disabled", "true");
    clear.setAttribute("disabled", "true");
  }
  //If info then enable button
  else {
    guessSubmit.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    clear.removeAttribute("disabled");
  }

};


clear.addEventListener('click', clearFields);
guess.addEventListener('input', checkInfo);
reset.addEventListener('click', resetButton);
guessSubmit.addEventListener('click', checkGuess);
submitRange.addEventListener('click', changeRange);
