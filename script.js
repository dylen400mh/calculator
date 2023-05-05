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

let num1, num2, operator;

const display = document.querySelector(".display");

// create "click" event listener for each button
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {button.addEventListener("click", () => {
    const displayItem = document.createElement("div");
    const buttonContent = button.textContent;

    // runs if buttonContent is a number
    if (!isNaN(buttonContent)) {

        clearDisplay();

        displayItem.textContent = buttonContent; // add new number
        display.appendChild(displayItem)
    }

    else if (buttonContent == "AC") {
        clearDisplay();
    }
})})

// clear display
function clearDisplay() {
    if (display.firstChild) {
        display.removeChild(display.firstChild)
    }
}




