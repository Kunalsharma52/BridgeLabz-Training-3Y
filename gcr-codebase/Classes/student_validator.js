
// Import readline module
const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask student details
rl.question("Enter Name: ", function(name) {

    rl.question("Enter Email: ", function(email) {

        rl.question("Enter Phone Number: ", function(phone) {

            rl.question("Enter Password: ", function(password) {

                let valid = true;

                // Regular expressions
                let namePattern = /^[A-Za-z]+$/;
                let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                let phonePattern = /^[0-9]{10}$/;
                let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/;

                console.log("\n----- Validation Result -----");

                if (!namePattern.test(name)) {
                    console.log("Invalid Name: Only alphabets allowed.");
                    valid = false;
                } else {
                    console.log("Name: Valid");
                }

                if (!emailPattern.test(email)) {
                    console.log("Invalid Email.");
                    valid = false;
                } else {
                    console.log("Email: Valid");
                }

                if (!phonePattern.test(phone)) {
                    console.log("Invalid Phone: Enter 10 digits.");
                    valid = false;
                } else {
                    console.log("Phone: Valid");
                }

                if (!passwordPattern.test(password)) {
                    console.log("Invalid Password: Include uppercase, number and special character.");
                    valid = false;
                } else {
                    console.log("Password: Valid");
                }

                if (valid) {
                    console.log("\nRegistration Successful!");
                } else {
                    console.log("\nPlease correct invalid details.");
                }

                rl.close();
            });
        });
    });
});
