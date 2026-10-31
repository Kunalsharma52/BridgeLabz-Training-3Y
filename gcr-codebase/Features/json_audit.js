
"use strict";

// Raw JSON data
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

// Arrays for storing results
let cleanData = [];
let invalidData = [];
let under18Users = [];

console.log("JSON AUDIT");
console.log("-------------------------");

// Loop through JSON data
for (let i = 0; i < rawData.length; i++) {

    try {

        // Convert JSON string into JavaScript object
        let data = JSON.parse(rawData[i]);

        // Check missing user key
        if (data.user === undefined) {
            throw new Error("Missing user key.");
        }

        // Check missing age key
        if (data.age === undefined) {
            throw new Error("Missing age key.");
        }

        // Convert age into number
        let age = Number(data.age);

        // Validate age
        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value.");
        }

        // Create clean object
        let user = {
            user: data.user,
            age: age
        };

        // Store valid object
        cleanData.push(user);

        console.log("Line", i + 1, ": Valid JSON");

        // Check under 18 users
        if (age < 18) {
            under18Users.push(user);
        }

    } catch (error) {

        // Store invalid data
        invalidData.push({
            line: i + 1,
            error: error.message
        });

        console.log("Line", i + 1, ": Error -", error.message);
    }

    // Debugger
    debugger;
}

// Display final report
console.log("\nCLEAN DATA:");
console.log(cleanData);

console.log("\nINVALID DATA:");
console.log(invalidData);

console.log("\nUNDER 18 USERS:");
console.log(under18Users);

console.log("\nFINAL REPORT");
console.log("Valid entries:", cleanData.length);
console.log("Invalid entries:", invalidData.length);
console.log("Under 18 users:", under18Users.length);
