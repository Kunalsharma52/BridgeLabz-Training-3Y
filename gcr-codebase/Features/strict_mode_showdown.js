
// WITHOUT STRICT MODE

console.log("WITHOUT STRICT MODE");

// Function with duplicate parameters
function normalDemo(a, a) {

    // Undeclared variable
    total = 10;

    console.log("Value of a:", a);
    console.log("Value of total:", total);

    // Delete the global variable
    let deleteResult = delete globalThis.total;

    console.log("Delete result:", deleteResult);
}

// Call function
normalDemo(5, 10);


// WITH STRICT MODE

console.log("\nWITH STRICT MODE");

// Test duplicate parameters
try {

    let strictDuplicate = Function(
        '"use strict"; function demo(a, a) {}'
    );

} catch (error) {

    console.log("Duplicate parameter error:", error.message);
}

// Test undeclared variable
try {

    let strictVariable = Function(
        '"use strict"; total = 10;'
    );

    strictVariable();

} catch (error) {

    console.log("Undeclared variable error:", error.message);
}

// Test deleting a variable
try {

    let strictDelete = Function(
        '"use strict"; let total = 10; delete total;'
    );

    strictDelete();

} catch (error) {

    console.log("Delete error:", error.message);
}


// CORRECT VERSION USING ES6

console.log("\nCORRECT ES6 VERSION");

function correctDemo(a, b) {

    "use strict";

    let total = 10;

    console.log("First value:", a);
    console.log("Second value:", b);
    console.log("Total:", total);
}

correctDemo(5, 10);
