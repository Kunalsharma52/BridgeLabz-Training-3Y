let expenses = [3000, 1500, 8000, 1200, 1000];
let totalExpense = 0;

for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

let averageExpense = totalExpense / expenses.length;
let tax = totalExpense * 0.10;
let finalAmount = totalExpense;
finalAmount += tax;

console.log("Total Expense: ₹" + totalExpense.toFixed(2));
console.log("Average Expense: ₹" + averageExpense.toFixed(2));
console.log("Tax: ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));