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

function addCross(parent,colour) {
    const cross = document.createElement("div");
    cross.style["height"] = "12vw";
    cross.style["width"] = "12vw";
    cross.style["backgroundImage"] = colour;
    cross.style["background-size"] = "contain";
    cross.style["background-repeat"] = "no-repeat";
    parent.appendChild(cross);
}

function easyComputer() {
    let notfinished = true;
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const tilesEmpty = tiles.filter(tile => tile.children.length === 0);
    const index = Math.floor(Math.random() * (tilesEmpty.length));
    const tile = tilesEmpty[index];
    addCross(tile,"var(--cross-alt)");
}
const gameBoard = document.querySelector(".game");
gameBoard.addEventListener("click", e => {
    if (e.target.className === "tile") {
        addCross(e.target,"var(--cross)");
        easyComputer();
    }
})