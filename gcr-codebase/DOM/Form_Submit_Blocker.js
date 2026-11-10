let form = document.getElementById("myForm");

let nameInput = document.getElementById("name");

let emailInput = document.getElementById("email");

let passwordInput = document.getElementById("password");

let nameError = document.getElementById("nameError");

let emailError = document.getElementById("emailError");

let passwordError = document.getElementById("passwordError");

let success = document.getElementById("success");

// Form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    success.textContent = "";

    // Name validation
    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";

        valid = false;
    }

    // Email validation
    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required";

        valid = false;
    }
    else if (!emailInput.value.includes("@")) {

        emailError.textContent = "Email must contain @";

        valid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        valid = false;
    }

    // Success message
    if (valid) {

        success.textContent = "Form Submitted Successfully!";

        form.reset();
    }
});

// Remove errors when correcting input
nameInput.addEventListener("input", function () {
    nameError.textContent = "";
    success.textContent = "";
});

emailInput.addEventListener("input", function () {
    emailError.textContent = "";
    success.textContent = "";
});

passwordInput.addEventListener("input", function () {
    passwordError.textContent = "";
    success.textContent = "";
});