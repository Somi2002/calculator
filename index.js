// Get the input element for the display
const display = document.getElementsByName("display")[0];

// Add a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  // Get the key code from the event
  const key = event.key;
  
  // Check which key was pressed and update the display accordingly
  if (/\d/.test(key)) {
    // If a digit was pressed, add it to the display
    if (display.value.length < 12) {
        display.value += key;
      } else {
        // If the display value is already 12 characters long, display an alert message
        alert("Maximum number of characters reached!");
      }  
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    // If an operator was pressed, add it to the display
    display.value += key;
  } else if (key === "Enter") {
    // If the Enter key was pressed, evaluate the expression
    display.value = eval(display.value);
  } else if (key === "Escape") {
    // If the Escape key was pressed, clear the display
    display.value = "";
  }
  else if (key === "Backspace") {
    // If the Backspace key was pressed, delete the last character from the display
    display.value = display.value.slice(0, -1);
}});
