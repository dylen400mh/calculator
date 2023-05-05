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
    }
}

// clear display
function clearDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild)
    }
}

let number, operator;
let digits = []; // digits for number on display
let numbers = []; // array to hold two numbers
let operatorChosen; // key to decide if an operator has been chosen

const display = document.querySelector(".display");

// create "click" event listener for each button
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const displayItem = document.createElement("div");
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
            operatorChosen = false;
            digits = [];
            numbers = [];
        }

        // runs if an operator or equals sign is clicked
        else {

            if (buttonContent != "=") {
                operator = buttonContent;
                operatorChosen = true;
            }

            else {
                clearDisplay()
            }

            numbers.push(number); // adds current number to array
            digits = [];
            console.log(numbers) //test

            // runs only if two numbers have been chosen
            if (numbers.length == 2) {
                let result = operate(operator, parseInt(numbers[0]), parseInt(numbers[1]));
                displayItem.textContent = result; // sets text content of display to be result
                display.appendChild(displayItem);
            }
            
        }
    })
})





