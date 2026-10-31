function makeMultiplier(multiplier) {

    return function(number) {
        return number * multiplier;
    };
}

// Create multiplier function
const triple = makeMultiplier(3);

// Call function
console.log(triple(5));
console.log(triple(10));