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

