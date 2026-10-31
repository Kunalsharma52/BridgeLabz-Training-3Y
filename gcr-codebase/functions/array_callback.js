function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

let numbers = [1, 2, 3, 4];

// Double each number
let double = applyOperation(numbers, function(num) {
    return num * 2;
});

// Square each number
let square = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Original Array:", numbers);
console.log("Doubled Array:", double);
console.log("Squared Array:", square);