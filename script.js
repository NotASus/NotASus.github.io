function pageChange (button) {
    document.getElementById("Icontainer").src = button.dataset.src;

    document.querySelectorAll(".lat-button").forEach(button => {
        button.disabled = false;
        button.classList.remove("active");
    });
    button.disabled = true;
    button.classList.add("active");
}