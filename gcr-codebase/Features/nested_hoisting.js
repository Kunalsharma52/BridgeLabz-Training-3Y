
// Original function
console.log("ORIGINAL FUNCTION");

function outer() {

    console.log("Outer count:", count);

    var count = 5;

    function inner() {

        console.log("Inner count:", count);

        var count = 10;
    }

    inner();
}

outer();


// Convert inner function into arrow function
console.log("\nARROW FUNCTION VERSION");

function outerArrow() {

    console.log("Outer count:", count);

    var count = 5;

    const inner = () => {

        console.log("Inner count:", count);

        var count = 10;
    };

    inner();
}

outerArrow();


// Arrow function accessing outer variable
console.log("\nARROW FUNCTION WITHOUT LOCAL COUNT");

function outerClosure() {

    var count = 5;

    const inner = () => {

        // Uses count from outer function
        console.log("Count from outer function:", count);
    };

    inner();
}

outerClosure();
