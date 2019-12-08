// Set Range Box
// var inputField = document.querySelector('#min');
// var inputField = document.querySelector('#max');
// var updateButton = document.querySelector('#updateButton');
//
// updateButton.disabled = true;
// inputField.addEventListener('input', toggle);
//
// function toggle() {
//   updateButton.disabled = inputField.value != '' ? false : true;
// }

var submitEnabled = false;
var clearEnabled = false;

// Mid-Challenger-box - Challenger1
var challenger1Name = document.querySelector('#challenger1Name');
var challenger1Guess = document.querySelector('#challenger1Guess');
var challenger2Name = document.querySelector('#challenger2Name');
var challenger2Guess = document.querySelector('#challenger2Guess');
var submitButton = document.querySelector('#submit');
var resetButton = document.querySelector('#reset');
var clearButton = document.querySelector('#clear');

challenger1Name.addEventListener('input', validateInputs);
challenger1Guess.addEventListener('input', validateInputs);
challenger2Name.addEventListener('input', validateInputs);
challenger2Guess.addEventListener('input', validateInputs);

submitButton.addEventListener('click', submitGuesses);
clearButton.addEventListener('click', clearGuesses);

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

function clearGuesses(){
  challenger1Name.value = '';
  challenger2Name.value = '';
  challenger1Guess.value = '';
  challenger2Guess.value = '';
  validateInputs();
}

function submitGuesses(){
  challenger1Guess.value = '';
  challenger2Guess.value = '';
}
