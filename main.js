var inputField = document.querySelector("#min");
var inputField = document.querySelector("#max");
var updateButton = document.querySelector("#updateButton");

updateButton.disabled = true;
inputField.addEventListener("input", toggle);

function toggle() {
  updateButton.disabled = inputField.value != '' ? false : true;
}

console.log(updateButton);


// display player name and guess
  function showPlayerGuess() {
    document.getElementById('player-1-guess-display').innerText =
    document.getElementById('guess1').value;
    document.getElementById('player-2-guess-display').innerText =
    document.getElementById('guess2').value;
    document.getElementById('player-1-name-display').innerText =
    document.getElementById('player-name1').value;
    document.getElementById('player-2-name-display').innerText =
    document.getElementById('player-name2').value;
    document.getElementById('guess1').value='';
    document.getElementById('guess2').value='';
    document.getElementById('player-name1').value='';
    document.getElementById('player-name2').value='';
}
