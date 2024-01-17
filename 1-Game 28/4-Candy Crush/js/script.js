let candies = ["Blue", "Orange", "Yellow", "Red", "Purple"];
let board = [];
let rows = 9;
let colums = 9;
let score = 0;

window.onload = function() {
    startGame();
};

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];

        for (let c = 0; c < array.length; c++) {
            // img id="0-0">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "" + randomCandy() + ".jpg";

        }
    }
}