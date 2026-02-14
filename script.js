// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero, you silly goose!");
    }
    return a / b;
}

// Operate function that takes operator and two numbers
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Calculator state variables
let firstNumber = '';
let secondNumber = '';
let operator = '';
let shouldResetDisplay = false;
let lastResult = null;

// DOM elements
const display = document.querySelector('.display-text');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');
const decimalButton = document.querySelector('.decimal');

// Update display function
function updateDisplay(value) {
    display.textContent = value;
}

// Handle number button clicks
function handleNumberClick(number) {
    if (shouldResetDisplay) {
        display.textContent = '';
        shouldResetDisplay = false;
    }
    
    if (display.textContent === '0' && number !== '.') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
    
    // Update the appropriate number variable
    if (!operator) {
        firstNumber = display.textContent;
    } else {
        secondNumber = display.textContent;
    }
}

// Handle operator button clicks
function handleOperatorClick(op) {
    if (firstNumber && operator && secondNumber) {
        // Evaluate the current operation first
        const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        display.textContent = roundResult(result);
        firstNumber = roundResult(result).toString();
        secondNumber = '';
        operator = op;
        shouldResetDisplay = true;
    } else if (firstNumber) {
        operator = op;
        shouldResetDisplay = true;
    }
}

// Handle equals button click
function handleEqualsClick() {
    if (firstNumber && operator && secondNumber) {
        try {
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            display.textContent = roundResult(result);
            lastResult = roundResult(result);
            firstNumber = roundResult(result).toString();
            secondNumber = '';
            operator = '';
            shouldResetDisplay = true;
        } catch (error) {
            display.textContent = error.message;
            shouldResetDisplay = true;
        }
    }
}

// Handle clear button click
function handleClearClick() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    shouldResetDisplay = false;
    lastResult = null;
    updateDisplay('0');
}

// Handle backspace button click
function handleBackspaceClick() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
    
    // Update the appropriate number variable
    if (!operator) {
        firstNumber = display.textContent;
    } else {
        secondNumber = display.textContent;
    }
}

// Handle decimal button click
function handleDecimalClick() {
    if (shouldResetDisplay) {
        display.textContent = '';
        shouldResetDisplay = false;
    }
    
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
    
    // Update the appropriate number variable
    if (!operator) {
        firstNumber = display.textContent;
    } else {
        secondNumber = display.textContent;
    }
}

// Round result to avoid overflow
function roundResult(result) {
    return Math.round(result * 100000) / 100000;
}

// Event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumberClick(button.textContent));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => handleOperatorClick(button.textContent));
});

equalsButton.addEventListener('click', handleEqualsClick);
clearButton.addEventListener('click', handleClearClick);
backspaceButton.addEventListener('click', handleBackspaceClick);
decimalButton.addEventListener('click', handleDecimalClick);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        handleNumberClick(e.key);
    } else if (e.key === '.') {
        handleDecimalClick();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        handleOperatorClick(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        handleEqualsClick();
    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        handleClearClick();
    } else if (e.key === 'Backspace') {
        handleBackspaceClick();
    }
});

