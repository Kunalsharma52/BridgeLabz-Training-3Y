function changeTheme(theme) {

    document.body.setAttribute("data-theme", theme);

    document.body.classList.add(theme);

    document.getElementById("currentTheme").textContent =
        "Current Theme: " + theme.toUpperCase();
}