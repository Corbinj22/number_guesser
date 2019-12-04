var inputField = document.querySelector("#min");
var updateButton = document.querySelector(".update");

updateButton.disabled = true;
inputField.addEventListener("input", toggle);

console.log(updateButton);
