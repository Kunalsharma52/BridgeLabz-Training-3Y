let dropdown = document.getElementById("dropdown");

let button = document.getElementById("dropdownButton");

let options = document.getElementById("options");

// Show and hide dropdown
button.addEventListener("click", function () {

    options.classList.toggle("show");
});

// Select an option
options.addEventListener("click", function (event) {

    if (event.target.classList.contains("option")) {

        button.textContent = event.target.textContent;

        options.classList.remove("show");
    }
});

// Close dropdown using capturing phase
document.addEventListener("click", function (event) {

    if (!dropdown.contains(event.target)) {

        options.classList.remove("show");
    }

}, true);