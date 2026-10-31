
// Import readline
const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask username
rl.question("Enter Username: ", function(username) {

    // Ask password
    rl.question("Enter Password: ", function(password) {

        let valid = true;

        // Username validation
        if (username.length < 5) {

            console.log("Invalid Username: Minimum 5 characters required.");

            valid = false;

        } else {

            console.log("Username: Valid");
        }

        // Password regular expression
        let passwordPattern =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

        // Validate password
        if (password.length < 8) {

            console.log("Password must contain at least 8 characters.");
            valid = false;

        } else if (!/[A-Z]/.test(password)) {

            console.log("Password must contain an uppercase letter.");
            valid = false;

        } else if (!/[a-z]/.test(password)) {

            console.log("Password must contain a lowercase letter.");
            valid = false;

        } else if (!/[0-9]/.test(password)) {

            console.log("Password must contain a number.");
            valid = false;

        } else if (!/[^A-Za-z0-9]/.test(password)) {

            console.log("Password must contain a special character.");
            valid = false;

        } else if (!passwordPattern.test(password)) {

            console.log("Invalid Password.");
            valid = false;

        } else {

            console.log("Password: Valid");
        }

        // Final result
        if (valid) {
            console.log("\nLogin Successful!");
        } else {
            console.log("\nLogin Failed. Check your details.");
        }

        rl.close();
    });
});
