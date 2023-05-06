// add two numbers
function add(a, b) {
    return a + b;
}

// subtract two numbers
function subtract(a, b) {
    return a - b;
}

// multiply two numbers
function multiply(a, b) {
    return a * b;
}

// divide two numbers
function divide(a, b) {
    return a / b;
}

// takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, num1, num2) {

    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "*") {
        return multiply(num1, num2);
    }
    else if (operator == "/") {
        return divide(num1, num2);
    } else {
        return num1; // if there is no operator, just return the first number
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
    result = null
    operatorChosen = false;
    digits = [];
    numbers = [];
}

// variables
let number = ""; // holds current number before adding to array
let operator = "";
let result = null;
let digits = []; // digits for number on display
let numbers = []; // array to hold numbers
let operatorChosen = false; // key to decide if an operator has been chosen
let temp = null; // used to store result for later calculations

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
            temp = null; // temp variable must be set to null if a new calculation is happening

            // clears digits if operator is chosen
            if (operatorChosen) {
                digits = [];
                operatorChosen = false;
            }

            digits.push(buttonContent)
            number = digits.join("");
            displayItem.textContent = number; // add new number
        }

        // runs if clear button is clicked (resets all variables)
        else if (buttonContent == "AC") {
            clearDisplay();
            temp = null;
            resetVariables();
        }

        // runs if equals button is clicked
        else if (buttonContent == "=") {

            // add current number to array
            numbers.push(parseInt(number));

            // if only one number chosen, set second number to 0
            if (numbers.length == 1) {
                numbers.push(0);
            }

            console.log(numbers) //TEST

            // check if two numbers are chosen
            if (numbers.length == 2) {
                clearDisplay();
                result = operate(operator, numbers[0], numbers[1]);
                console.log(result) //TEST

                displayItem.textContent = result; // sets text content of display to be result
                display.appendChild(displayItem);
                temp = result // temp variable to hold result
                resetVariables();
            }
        }

        // runs if an operator is clicked
        else {
            operator = buttonContent;
            operatorChosen = true;

            if (temp != null) {
                numbers.push(temp);
            } else if (digits.length == 0) {
                numbers.push(0); // add 0 if an operator is clicked first
            } else {
                numbers.push(parseInt(number)); // adds current number to array
                digits = [];
            }

            console.log(numbers) //TEST
        }
    })
})

// BUGS


// 2. after calculating a result, set the value as the first number to the next operation
// 3. allow multiple operations to be performed at once before calculating result
// 4. clicking equals multiple times leads to NaN