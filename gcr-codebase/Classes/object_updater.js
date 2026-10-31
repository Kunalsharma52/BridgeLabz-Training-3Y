
// Import readline
const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Original user object
let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

// Ask for new details
console.log("UPDATE USER DETAILS");

rl.question("Enter New Name: ", function(name) {

    rl.question("Enter New Email: ", function(email) {

        rl.question("Enter New Age: ", function(age) {

            // Update original object
            user.name = name;
            user.email = email;
            user.age = Number(age);

            // Display updated object
            console.log("\nUPDATED USER DETAILS");

            console.log("Name: " + user.name);
            console.log("Email: " + user.email);
            console.log("Age: " + user.age);

            console.log("\nUpdated User Object:");
            console.log(user);

            rl.close();
        });
    });
});
