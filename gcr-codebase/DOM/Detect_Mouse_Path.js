let box = document.getElementById("box");

let coordinates = document.getElementById("coordinates");

// Track mouse movement
box.addEventListener("mousemove", function (event) {

    coordinates.textContent =
        "X: " + event.clientX +
        " | Y: " + event.clientY;
});

// Create red dot on double click
box.addEventListener("dblclick", function (event) {

    let dot = document.createElement("div");

    dot.className = "dot";

    let rect = box.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    box.appendChild(dot);
});