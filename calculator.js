// Initialise variables

let number = "";
let result = "";
let action = "";
let equals = false;


// Getting DOM elements
let display = document.getElementById('result');
let numberButtons = document.querySelectorAll('.number');
let buttonDecimal = document.getElementById('decimal');
let operatorButtons = document.querySelectorAll('.operator');
let buttonEquals = document.querySelector('.equals');
let buttonC = document.querySelector('.clear');

// Function to calculate the result
function calculateResult() {

  // Checking which operation to perform
  switch(action) {

    // Addition
    case "+":
      result = +result + +number;
      break;
      
    // Substraction
    case "-":
      result -= number;
      break;

    // Multiplication
    case "x":
      result *= number;
      break;

    // Division
    case "/":
      result /= number;

  }    

  // Print the result
  display.value = result;
}


// Printing "0" at startup
display.value = 0;

// Concatenate numbers to string when clicked
numberButtons.forEach((button) => {

  button.addEventListener('click', () => {

    // Check if a equation has been completed
    if (equals) {

      // If so, start over by resetting variables
      equals = false;
      result = "";
      action = "";
      
    }
        
    // Check if number is "0", if yes replace with value
    if (number == "0") {
      number = button.value;

    // If not then concatenate
    } else {
      number += button.value; 
    }

    // Display the number
    display.value = number;
  })
})
    

buttonDecimal.addEventListener("click", () => {
  
  // Check if a equation has been completed
  if (equals) {

    // If so, start over by resetting variables
    equals = false;
    result = "";
    action = "";
      
  }

  // Check if number already includes a decimal
  if (number.includes('.')) {
    return;
  }
  // If not then add decimal to number and display
  number += ".";
  display.value = number;
});


// Update action and display result when operator button is pressed
operatorButtons.forEach((button) => {

  button.addEventListener('click', () => {

    // If equals has been pressed flip it over
    if (equals) {
      equals = false;
    }

    // Check if an action has already been set
    if (action == "") {
      // Saving the previous number
      result = number;

    } else if (result != "" && number != "") {
      // Otherwise calculate the result if numbers aren't empty
      calculateResult();

    }

    // Setting new action
    action = button.value;
    // Setting current number back to empty
    number = "";   
  })
})


// Setting the "equals" button
buttonEquals.addEventListener("click", () =>{

  // Not allowing the calculation if there is no action set
  if (action != "") {
    calculateResult();
    number = "";
    equals = true;
  }
  
});

//Setting the "C" (clear) button
buttonC.addEventListener("click", () =>{

  number = "";
  display.value = 0;

});
