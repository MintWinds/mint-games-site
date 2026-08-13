const themeToggle = document.querySelector(".theme");
const root = document.documentElement;
root.className = "dark"

themeToggle.addEventListener("click", () => {
    if (root.className === "dark"){
        root.className = "light";
    } else {
        root.className = "dark";
    }
} )
