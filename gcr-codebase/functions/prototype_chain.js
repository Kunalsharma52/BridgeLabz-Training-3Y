// Person constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Faculty constructor
function Faculty(name, department) {
    Person.call(this, name);

    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log("Department: " + this.department);
};

// Professor constructor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);

    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

// Create professor object
let professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Access all methods
professor1.showName();
professor1.showDepartment();
professor1.showSubject();