
// Mixed API data
const apiData = [
    "25",
    "true",
    "false",
    "NaN",
    "                     ",
    "100px",
    "3.14",
    null,
    undefined
];

// Arrays for valid and invalid numbers
let validNumbers = [];
let invalidNumbers = [];

// Display data report
console.log("DYNAMIC DATA PARSER");
console.log("-------------------------");

for (let i = 0; i < apiData.length; i++) {

    let value = apiData[i];

    // Convert value into Number, Boolean and String
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log("\nOriginal Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Check invalid numeric values
    if (
        value === null ||
        value === undefined ||
        String(value).trim() === "" ||
        isNaN(numberValue)
    ) {

        invalidNumbers.push(value);
        console.log("Status: Invalid Number");

    } else {

        validNumbers.push(numberValue);
        console.log("Status: Valid Number");
    }
}

// Display final arrays
console.log("\nVALID NUMBERS:");
console.log(validNumbers);

console.log("\nINVALID VALUES:");
console.log(invalidNumbers);
