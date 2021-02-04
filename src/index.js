// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function click() {
  let button = document.querySelector("button");
  button.innerHTML = "18 degrees";
  alert("It is 18 degrees");
}
let clickButton = document.querySelector("button");
clickButton.addEventListener("click", click);
