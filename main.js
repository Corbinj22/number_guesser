// Set Range Box
// var minRange = document.querySelector('#min');
// var maxRange = document.querySelector('#max');
// var updateButton = document.querySelector('#updateButton');
//
// updateButton.disabled = true;
// inputField.addEventListener('input', toggle);
//
// function toggle() {
//   updateButton.disabled = inputField.value != '' ? false : true;
// }

// Mid-Challenger-box - Challenger1
var submitEnabled = false;
var clearEnabled = false;
var updateEnabled = false;

var minRangeInput = document.querySelector('#min');
var maxRangeInput = document.querySelector('#max');
var challenger1Name = document.querySelector('#challenger1Name');
var challenger1Guess = document.querySelector('#challenger1Guess');
var challenger2Name = document.querySelector('#challenger2Name');
var challenger2Guess = document.querySelector('#challenger2Guess');
var minRangeDisplay = document.querySelector('#minDisplay');
var maxRangeDisplay = document.querySelector('#maxDisplay');

var updateButton = document.querySelector('.updateButton');
var submitButton = document.querySelector('#submit');
var resetButton = document.querySelector('#reset');
var clearButton = document.querySelector('#clear');

minRangeInput.addEventListener('input', validateRange);
maxRangeInput.addEventListener('input', validateRange);
challenger1Name.addEventListener('input', validateInputs);
challenger1Guess.addEventListener('input', validateInputs);
challenger2Name.addEventListener('input', validateInputs);
challenger2Guess.addEventListener('input', validateInputs);

submitButton.addEventListener('click', submitGuesses);
clearButton.addEventListener('click', clearGuesses);
updateButton.addEventListener('click', setCurrentRange);

function validateInputs(){
  submitEnabled = (challenger1Name.value
    && challenger1Guess.value
    && challenger2Name.value
    && challenger2Guess.value) ? true : false;

    clearEnabled = (challenger1Name.value
      || challenger1Guess.value
      || challenger2Name.value
      || challenger2Guess.value) ? true : false;

  submitButton.disabled = submitEnabled ? '' : 'disabled';
  clearButton.disabled = clearEnabled ? '' : 'disabled';
}

function validateRange() {
  updateEnabled = (minRangeInput.value && maxRangeInput.value)  ? true : false;
  updateButton.disabled = updateEnabled ? '' : 'disabled';
}

function clearGuesses(){
  challenger1Name.value = '';
  challenger2Name.value = '';
  challenger1Guess.value = '';
  challenger2Guess.value = '';
  validateInputs();
}
function submitGuesses(){
  showPlayerGuess();
  challenger1Guess.value = '';
  challenger2Guess.value = '';
  validateInputs();
}

function setCurrentRange() {
  minRangeDisplay.innerText = minRangeInput.value;
  maxRangeDisplay.innerText = maxRangeInput.value;
}


// display player name and guess
  function showPlayerGuess() {
    document.getElementById('player-1-guess-display').innerText = challenger1Guess.value;
    document.getElementById('player-2-guess-display').innerText = challenger2Guess.value;
    document.getElementById('player-1-name-display').innerText = challenger1Name.value;
    document.getElementById('player-2-name-display').innerText = challenger2Name.value;
  }
