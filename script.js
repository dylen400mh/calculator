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
        return num2; // return the second number if no operator is chosen
    }
}

// clear display
function clearDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild)
    }
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
let numbers = []; // array to hold two numbers
let operatorChosen = false; // key to decide if an operator has been chosen

// create element to store display item
const display = document.querySelector(".display");
const displayItem = document.createElement("div");

// create "click" event listener for each button
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonContent = button.textContent;

        // runs if buttonContent is a number
        if (!isNaN(buttonContent)) {

            // clears digits if operator is chosen
            if (operatorChosen) {
                digits = [];
                operatorChosen = false;
            }

            // clears display for new number
            clearDisplay();

            digits.push(buttonContent)
            number = digits.join("");
            displayItem.textContent = number; // add new number
            display.appendChild(displayItem);
        }

        // runs if clear button is clicked (resets all variables)
        else if (buttonContent == "AC") {
            clearDisplay();
            resetVariables();
        }

        // runs if equals button is clicked
        else if (buttonContent == "=") {
            // add current number to array
            numbers.push(parseInt(number));
            console.log(numbers) //TEST

            // check if two numbers are chosen
            if (numbers.length == 2) {
                clearDisplay();
                result = operate(operator, numbers[0], numbers[1]);
                console.log(result) //TEST
                numbers[0] = result;
                displayItem.textContent = result; // sets text content of display to be result
                display.appendChild(displayItem);
                resetVariables();
            }
        }

        // runs if an operator is clicked
        else {
            operator = buttonContent;
            operatorChosen = true;

            // add current number to array
            numbers.push(parseInt(number)); // adds current number to array
            digits = [];
            console.log(numbers) //TEST
        }
    })
})