// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
function click(event) {
  alert("It is 18 degrees");
}
let clickButton = document.querySelector("button");
clickButton.addEventListener("click", click);

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
clickButton.innerHTML = "18 degrees";
