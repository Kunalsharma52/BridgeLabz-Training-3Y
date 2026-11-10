let images = document.querySelectorAll(".gallery img");

let modal = document.getElementById("modal");

let modalImage = document.getElementById("modalImage");

// Open modal
images.forEach(function (image) {

    image.addEventListener("click", function () {

        modal.style.display = "flex";

        modalImage.src = image.src;
    });
});

// Close modal when clicking outside image
modal.addEventListener("click", function () {

    modal.style.display = "none";
});

// Stop closing when clicking inside modal
modalImage.addEventListener("click", function (event) {

    event.stopPropagation();
});