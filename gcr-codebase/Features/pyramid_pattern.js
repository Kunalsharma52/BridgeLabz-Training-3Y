
"use strict";

// Import readline
const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for number of rows
rl.question("Enter number of rows (default 5): ", function(input) {

    // Set default value
    let rows = input.trim() === "" ? 5 : Number(input);

    // Validate input
    if (!Number.isInteger(rows) || rows < 1) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    console.log("\nPYRAMID PATTERN");

    // Outer loop controls rows
    for (let i = 1; i <= rows; i++) {

        let pattern = "";

        // Inner loop prints stars
        for (let j = 1; j <= i; j++) {

            pattern += "* ";
        }

        console.log(pattern);
    }

    // Debugger to observe loop variables
    debugger;

    // Compare using var
    console.log("\nPATTERN USING VAR");

    for (var a = 1; a <= rows; a++) {

        let pattern = "";

        for (var b = 1; b <= a; b++) {

            pattern += "* ";
        }

        console.log(pattern);
    }

    console.log("\nFinal value of var a:", a);
    console.log("Final value of var b:", b);

    rl.close();
});
