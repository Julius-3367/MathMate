# Calculator Project

A fully functional web-based calculator built with vanilla HTML, CSS, and JavaScript.

## Features

### Core Functionality
- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Smart Operation Handling**: Automatically evaluates previous operations when new operators are entered
- **Display Management**: Real-time display updates with proper number formatting
- **Error Handling**: Graceful handling of edge cases like division by zero

### Advanced Features
- **Decimal Support**: Input and calculate with floating-point numbers
- **Backspace Functionality**: Undo last input with the backspace button
- **Full Keyboard Support**: Complete keyboard navigation and input
- **Responsive Design**: Modern, gradient-based UI with hover effects

## Usage

### Mouse/Touch Interface
1. Click number buttons to input digits
2. Click operator buttons (+, -, *, /) to select operations
3. Click equals (=) to calculate results
4. Click clear (C) to reset the calculator
5. Click backspace (←) to remove the last digit
6. Click decimal (.) to input decimal numbers

### Keyboard Shortcuts
- **Numbers**: 0-9
- **Operators**: +, -, *, /
- **Equals**: Enter or =
- **Clear**: Escape or C
- **Backspace**: Backspace key
- **Decimal**: . key

## Operation Examples

### Basic Operations
- `5 + 3 = 8`
- `10 - 4 = 6`
- `7 * 8 = 56`
- `15 / 3 = 5`

### Complex Operations
The calculator automatically evaluates previous operations when chaining:
- `12 + 7 - 1 =` → First evaluates `12 + 7 = 19`, then `19 - 1 = 18`
- `5 * 2 + 3 =` → First evaluates `5 * 2 = 10`, then `10 + 3 = 13`

### Decimal Operations
- `3.14 + 2.86 = 6.0`
- `10 / 4 = 2.5`

## Error Handling

- **Division by Zero**: Displays "Cannot divide by zero, you silly goose!" instead of crashing
- **Invalid Operations**: Prevents evaluation when insufficient data is provided
- **Consecutive Operators**: Only uses the last operator entered, doesn't evaluate prematurely
- **Decimal Validation**: Prevents multiple decimal points in a single number

## Technical Implementation

### File Structure
```
calculator/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Calculator logic and functionality
└── README.md       # This documentation
```

### Key Functions
- `add(a, b)`: Addition operation
- `subtract(a, b)`: Subtraction operation
- `multiply(a, b)`: Multiplication operation
- `divide(a, b)`: Division operation with zero-check
- `operate(operator, num1, num2)`: Main operation dispatcher
- `roundResult(result)`: Rounds results to prevent display overflow

### State Management
The calculator maintains several state variables:
- `firstNumber`: First operand
- `secondNumber`: Second operand
- `operator`: Current operation
- `shouldResetDisplay`: Flag for display reset behavior
- `lastResult`: Previous calculation result

## Browser Compatibility

This calculator works in all modern browsers that support:
- ES6 JavaScript features
- CSS Grid and Flexbox
- HTML5 semantic elements

## Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Or run a local server: `python -m http.server 8000`
4. Navigate to `http://localhost:8000`

## Future Enhancements

Potential improvements for future versions:
- Memory functions (M+, M-, MR)
- Scientific operations (sin, cos, tan, log, etc.)
- History tracking
- Themes and customization options
- Mobile app version

