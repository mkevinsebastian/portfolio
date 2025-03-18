 // Adding fade-in animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated");
     elements.forEach(el => {
        el.classList.add("fade-in");
    });
});