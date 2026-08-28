function pageChange (button) {
    document.getElementById("Lateral_bar").src = button.dataset.src;

    document.querySelectorAll(".lat-button").forEach(button => {
        button.disabled = false;
        button.classList.remove("active");
    });
    button.disabled = true;
    button.classList.add("active");
}