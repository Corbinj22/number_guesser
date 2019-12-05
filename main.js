var inputField = document.querySelector("#min");
var inputField = document.querySelector("#max");
var updateButton = document.querySelector("#updateButton");

updateButton.disabled = true;
inputField.addEventListener("input", toggle);

function toggle() {
  updateButton.disabled = inputField.value != '' ? false : true;
}

console.log(updateButton);
