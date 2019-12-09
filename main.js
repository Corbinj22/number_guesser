// Enable/Disable Buttons
var submitEnabled = false;
var clearEnabled = false;
var updateEnabled = false;
//Set range box update button
var updateButton = document.querySelector('.updateButton');
// Set Range Min Max Inputs
var minRangeInput = document.querySelector('#min');
var maxRangeInput = document.querySelector('#max');
// Mid box names and guess input
var challenger1Name = document.querySelector('#challenger1Name');
var challenger1Guess = document.querySelector('#challenger1Guess');
var challenger2Name = document.querySelector('#challenger2Name');
var challenger2Guess = document.querySelector('#challenger2Guess');
// mid box range value blanks
var minRangeDisplay = document.querySelector('#minDisplay');
var maxRangeDisplay = document.querySelector('#maxDisplay');
//mid box buttons
var submitButton = document.querySelector('#submit');
var resetButton = document.querySelector('#reset');
var clearButton = document.querySelector('#clear');
//Event listners
// set range box input listners
minRangeInput.addEventListener('input', validateRange);
maxRangeInput.addEventListener('input', validateRange);
// mid box unput listners for name and guesses
challenger1Name.addEventListener('input', validateInputs);
challenger1Guess.addEventListener('input', validateInputs);
challenger2Name.addEventListener('input', validateInputs);
challenger2Guess.addEventListener('input', validateInputs);
submitButton.addEventListener('click', submitGuesses);
clearButton.addEventListener('click', clearGuesses);
updateButton.addEventListener('click', setCurrentRange);
// mid box validation and clear/select button
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
// display guess high/low
var hardNumer = 5
function comparePlayerGuess(){
document.getElementById('player-1-guess-display').innerText
}
// take user input
// compare user input to hard value of number
// display too high or too low
