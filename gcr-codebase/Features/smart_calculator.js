
"use strict";

// Custom error for invalid operation
class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

// Custom error for calculation problems
class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

// Operations
const operations = ["add", "divide", "power", "root", "subtract"];

// Given numbers
const num1 = 25;
const num2 = 0;

// Calculator function
function calculate(operation, a, b) {

    switch (operation) {

        case "add":
            return a + b;

        case "divide":

            if (b === 0) {
                throw new CalculationError("Cannot divide by zero.");
            }

            return a / b;

        case "power":
            return a ** b;

        case "root":

            if (a < 0) {
                throw new CalculationError("Cannot find square root of a negative number.");
            }

            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError("Operation not recognized.");
    }
}

// Run calculator
console.log("SMART CALCULATOR");
console.log("-------------------------");

operations.forEach(function(operation) {

    try {

        let result = calculate(operation, num1, num2);

        console.log(`${operation}: ${result}`);

    } catch (error) {

        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
});

// Test invalid operation
console.log("\nTesting invalid operation");

try {

    let result = calculate("multiply", num1, num2);

    console.log("Result:", result);

} catch (error) {

    console.log(error.name + ": " + error.message);
}
