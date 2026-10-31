
"use strict";

// Transaction data
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays to store results
let validTransactions = [];
let invalidTransactions = [];

console.log("TRANSACTION VALIDATOR");
console.log("-------------------------");

// Check every transaction
for (let i = 0; i < transactions.length; i++) {

    try {

        let transaction = transactions[i];

        // Check null entry
        if (transaction === null) {
            throw new Error("Null transaction found.");
        }

        // Check missing ID or amount
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("Missing ID or amount.");
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new Error("Negative amount is not allowed.");
        }

        // Store valid transaction
        validTransactions.push(transaction);

        console.log("Transaction", transaction.id, "is valid.");

    } catch (error) {

        // Store invalid transaction and its error
        invalidTransactions.push({
            transaction: transactions[i],
            error: error.message
        });

        console.log("Transaction", i + 1, "is invalid:", error.message);
    }

    // Use debugger to inspect variables
    debugger;
}

// Final report
console.log("\nVALID TRANSACTIONS:");
console.log(validTransactions);

console.log("\nINVALID TRANSACTIONS:");
console.log(invalidTransactions);

console.log("\nTOTAL REPORT");
console.log("Successful:", validTransactions.length);
console.log("Failed:", invalidTransactions.length);
