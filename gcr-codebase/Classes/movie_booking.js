
// Import readline
const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask booking details
rl.question("Enter Name: ", function(name) {

    rl.question("Enter Email: ", function(email) {

        rl.question("Enter Number of Seats: ", function(seatsInput) {

            let seats = Number(seatsInput);

            let valid = true;

            // Regular expressions
            let namePattern = /^[A-Za-z ]+$/;
            let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

            // Validate name
            if (!namePattern.test(name.trim())) {
                console.log("Invalid Name: Only alphabets allowed.");
                valid = false;
            }

            // Validate email
            if (!emailPattern.test(email.trim())) {
                console.log("Invalid Email.");
                valid = false;
            }

            // Validate seats
            if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
                console.log("Seats must be between 1 and 10.");
                valid = false;
            }

            // Create booking object
            if (valid) {

                let booking = {
                    name: name.trim(),
                    email: email.trim(),
                    seats: seats
                };

                console.log("\nBOOKING CONFIRMED");
                console.log("----------------");

                console.log("Name: " + booking.name);
                console.log("Email: " + booking.email);
                console.log("Seats: " + booking.seats);

            } else {

                console.log("\nPlease enter valid details.");
            }

            rl.close();
        });
    });
});
