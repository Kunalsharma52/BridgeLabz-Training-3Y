let message = document.getElementById("message");
let counter = document.getElementById("counter");
let resetButton = document.getElementById("resetButton");

let maxLength = 100;

message.addEventListener("input", function () {

    let remaining = maxLength - message.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining <= 20 && remaining > 0) {
        counter.style.color = "orange";
    }
    else if (remaining === 0) {
        counter.style.color = "red";
    }
    else {
        counter.style.color = "green";
    }
});

message.addEventListener("keydown", function (event) {

    if (message.value.length >= maxLength &&
        event.key.length === 1) {
        event.preventDefault();
    }
});

message.addEventListener("paste", function (event) {

    let pastedText = event.clipboardData.getData("text");

    if (message.value.length + pastedText.length > maxLength) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", function () {

    message.value = "";

    counter.textContent = "100 characters remaining";
    counter.style.color = "green";
});