var inputField = document.querySelector("#min");
var updateButton = document.querySelector(".update");

updateButton.disabled = true;
inputField.addEventListener("input", toggle);

function toggle() {
  updateButton.disabled = inputField.value != '' ? false : true;
}

console.log(updateButton);
