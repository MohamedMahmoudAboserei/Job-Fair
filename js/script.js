const mode = document.getElementById("mode");

mode.addEventListener("click", function (e) {
    theme(e.target)
})

function theme(el) {
    if (mode.classList.contains("fa-sun")) {
        document.querySelector("html").setAttribute("data-theme", "light");
        mode.classList.replace("fa-sun", "fa-moon"); // change icon -->moon
        localStorage.setItem("theme", "light");
    } else {
        mode.classList.replace("fa-moon", "fa-sun"); //change icon -->sun
        document.querySelector("html").setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

