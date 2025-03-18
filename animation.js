 // Adding fade-in animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated");
     elements.forEach(el => {
        el.classList.add("fade-in");
    });
});

particlesJS("particles-js", {
                "particles": {
                    "number": { "value": 100 },
                    "size": { "value": 3 },
                    "move": { "speed": 2 },
                    "line_linked": { "enable": true, "opacity": 0.3 }
                }
            });