
// Employee class
class Employee {

    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus
    applyBonus(percent) {
        this.salary = this.salary +
            (this.salary * percent / 100);
    }
}

// Create five employees
let employees = [

    new Employee(1, "Aman", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Rahul", "Sales", 28000),
    new Employee(4, "Neha", "IT", 35000),
    new Employee(5, "Karan", "Finance", 32000)

];

// Display employee details
console.log("EMPLOYEE DETAILS");

employees.forEach(function(employee) {

    console.log("ID: " + employee.id);
    console.log("Name: " + employee.name);
    console.log("Department: " + employee.department);

    console.log(
        "Annual Salary: Rs. " +
        employee.getAnnualSalary()
    );

    console.log("----------------");
});

// Calculate total annual payout using reduce()
let totalPayout = employees.reduce(function(total, employee) {

    return total + employee.getAnnualSalary();

}, 0);

console.log("Total Annual Payout: Rs. " + totalPayout);

// Apply 10% bonus
employees.forEach(function(employee) {
    employee.applyBonus(10);
});

console.log("\nSALARY AFTER 10% BONUS");

employees.forEach(function(employee) {

    console.log(
        employee.name + ": Rs. " +
        employee.getAnnualSalary()
    );
});
