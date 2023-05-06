// takes an operator and 2 numbers and performs the appropriate operation
function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            return a; // if there is no operator, just return the first number
    }
}

// clear display
function clearDisplay() {
    displayItem.textContent = 0;
}

// sets variables to default values
function resetVariables() {
    number = "";
    operator = "";
    digits = [];
    numbers = [];
}

// variables
let number = ""; // holds current number before adding to array
let operator = "";
let result = null;
let digits = []; // digits for number on display
let numbers = []; // array to hold numbers

// create element to store display item
const display = document.querySelector(".display");
const displayItem = document.createElement("div");
displayItem.textContent = 0; // starts as 0
display.appendChild(displayItem);

// create "click" event listener for each button
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonContent = button.textContent;

        // runs if buttonContent is a number
        if (!isNaN(buttonContent)) {

            // We need to clear numbers array if user enters a number immediately after a calculation 
            if (!["+", "-", "*", "/"].includes(operator)) {
                numbers = [];
            }

            digits.push(buttonContent)
            number = digits.join("");
            displayItem.textContent = number; // add new number
        }

        // runs if clear button is clicked (resets all variables)
        else if (buttonContent == "AC") {
            clearDisplay();
            result = null;
            resetVariables();
        }

        // runs if equals or operator button is clicked
        else {

            if (buttonContent == "=") {

                // add current number to array
                numbers.push(parseInt(number));

                // if only one number chosen, set second number to 0
                if (numbers.length == 1) {
                    numbers.push(0);
                }
            }

            // runs if an operator is clicked
            else {
                if (digits.length == 0) {
                    numbers.push(0); // add 0 if an operator is clicked first
                }

                // else just set the operator

                else {
                    numbers.push(parseInt(number));
                    digits = [];
                }
            }

            // perform calculation on two numbers
            if (numbers.length == 2) {
                result = operate(operator, numbers[0], numbers[1])
                displayItem.textContent = result;
                resetVariables();
                numbers[0] = result;
                result = null;
            }

            // set operator
            operator = buttonContent;
        }
    })
})
