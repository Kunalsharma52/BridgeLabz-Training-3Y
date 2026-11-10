let searchInput = document.getElementById("searchInput");

let table = document.getElementById("studentTable");

let noResult = document.getElementById("noResult");

searchInput.addEventListener("input", function () {

    let searchValue = searchInput.value.toLowerCase();

    let rows = table.getElementsByTagName("tr");

    let found = 0;

    for (let i = 0; i < rows.length; i++) {

        let rowText = rows[i].textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            rows[i].style.display = "";

            found++;
        }
        else {

            rows[i].style.display = "none";
        }
    }

    if (found === 0) {
        noResult.textContent = "No results found";
    }
    else {
        noResult.textContent = "";
    }
});