// Parent class
class Person {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

// Child class
class Student extends Person {

    constructor(name, branch) {

        super(name);

        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

// Create student object
let student1 = new Student("Rahul", "Computer Science");

// Display details
student1.showName();
student1.showBranch();