function nextStep(step) {

    if (step === 1) {

        let name = document.getElementById("name").value.trim();

        if (name === "") {
            alert("Please enter your name");
            return;
        }

        document.getElementById("step1").classList.add("hidden");
        document.getElementById("step2").classList.remove("hidden");
    }

    else if (step === 2) {

        let email = document.getElementById("email").value.trim();

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email");
            return;
        }

        document.getElementById("step2").classList.add("hidden");
        document.getElementById("step3").classList.remove("hidden");
    }

    else if (step === 3) {

        let password = document.getElementById("password").value;

        if (password.length < 6) {
            alert("Password must contain at least 6 characters");
            return;
        }

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        document.getElementById("step3").classList.add("hidden");

        document.getElementById("summary").classList.remove("hidden");

        document.getElementById("result").textContent =
            "Name: " + name + " | Email: " + email;
    }
}

function previousStep(step) {

    if (step === 2) {
        document.getElementById("step2").classList.add("hidden");
        document.getElementById("step1").classList.remove("hidden");
    }

    else if (step === 3) {
        document.getElementById("step3").classList.add("hidden");
        document.getElementById("step2").classList.remove("hidden");
    }
}