
"use strict";

// Employee data
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("EMPLOYEE BONUS CALCULATOR");
console.log("-------------------------");

try {

    // Loop through employees
    employees.forEach(function(employee) {

        // Check missing properties
        if (
            !employee ||
            employee.salary === undefined ||
            employee.years === undefined ||
            employee.name === undefined
        ) {
            throw new Error("Employee information is missing.");
        }

        // Convert string values into numbers
        let salary = Number(employee.salary);
        let years = Number(employee.years);

        // Validate numbers
        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or experience.");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        // Calculate final salary
        let totalSalary = salary + bonus;

        // Display employee details
        console.log(`Name: ${employee.name}`);
        console.log(`Salary: Rs. ${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: Rs. ${bonus}`);
        console.log(`Total Salary: Rs. ${totalSalary}`);

        console.log("-------------------------");
    });

} catch (error) {

    console.log("Error:", error.message);

}
