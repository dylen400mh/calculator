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
        add(num1, num2);
    }
    else if (operator == "-") {
        subtract(num1, num2);
    }
    else if (operator == "*") {
        multiply(num1, num2);
    }
    else if (operator == "/") {
        divide(num1, num2);
    }
}

// clear display
function clearDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild)
    }
}

let num1, num2, operator;
let digits = []; // digits for number on display
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
            let number = digits.join("");
            displayItem.textContent = number; // add new number
            display.appendChild(displayItem);
        }

        // runs if clear button is clicked
        else if (buttonContent == "AC") {
            clearDisplay();
            operatorChosen = false;
            digits = [];
        }

        // runs if equals button is clicked
        else if (buttonContent == "=") {
            operate(operator, num1, num2);
        }

        // runs if an operator is clicked
        else {
            operator = buttonContent;
            operatorChosen = true;
        }
    })
})





