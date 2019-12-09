
var submitEnabled = false;
var clearEnabled = false;
var updateEnabled = false;
var correctGuess = '🐰';

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
  generateCorrectGuess();
  // check if they got it right
  showPlayerGuess(); //extend to update "no guesses yet"

  challenger1Guess.value = '';
  challenger2Guess.value = '';
  validateInputs();
}

function setCurrentRange() {
  minRangeDisplay.innerText = minRangeInput.value;
  maxRangeDisplay.innerText = maxRangeInput.value;
}
function generateCorrectGuess() {
  correctGuess = 50;
  //math.random thing
}


// display player name and guess
  function showPlayerGuess() {
    var guess1 = challenger1Guess.value;
    var guess2 = challenger2Guess.value;
    document.getElementById('player-1-guess-display').innerText = guess1;
    document.getElementById('player-2-guess-display').innerText = guess2;
    document.getElementById('player-1-name-display').innerText = challenger1Name.value;
    document.getElementById('player-2-name-display').innerText = challenger2Name.value;
    document.getElementById('player-1-guess-success').innerText = guess1 === `${correctGuess}` ? 'yes' : 'no';
    document.getElementById('player-2-guess-success').innerText = guess2 === `${correctGuess}` ? 'yes' : 'no';
  }
