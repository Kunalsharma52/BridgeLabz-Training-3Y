let input = document.getElementById("productInput");
let addButton = document.getElementById("addButton");
let productList = document.getElementById("productList");

addButton.addEventListener("click", function () {

    let productName = input.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = productName;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    productList.appendChild(li);

    input.value = "";
});

// Event Delegation
productList.addEventListener("click", function (event) {

    let li = event.target.closest("li");

    if (!li) return;

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {

        let span = li.querySelector("span");

        let editInput = document.createElement("input");
        editInput.value = span.textContent;

        li.replaceChild(editInput, span);
        editInput.focus();

        function saveEdit() {
            if (!editInput.parentElement) return;

            let newSpan = document.createElement("span");
            newSpan.textContent = editInput.value.trim() || span.textContent;

            li.replaceChild(newSpan, editInput);
        }

        editInput.addEventListener("blur", saveEdit);

        editInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                editInput.blur();
            }
        });
    }
});