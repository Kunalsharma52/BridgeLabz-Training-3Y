
// Import readline
const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// FormBuilder class
class FormBuilder {

    constructor(fields) {
        this.fields = fields;
    }

    // Get form data
    getFormData() {

        let data = {};

        let index = 0;

        function askField() {

            if (index < fields.length) {

                let field = fields[index];

                rl.question("Enter " + field.label + ": ", function(value) {

                    data[field.name] = value;

                    index++;

                    askField();
                });

            } else {

                console.log("\nFORM DATA:");
                console.log(data);

                rl.close();
            }
        }

        askField();
    }
}

// Form fields
let fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "number", label: "Age", name: "age" }
];

// Create form object
let form = new FormBuilder(fields);

// Collect data
form.getFormData();
