let you;
let yourscore = 0;
let opponent;
let opponentScore = 0;

let choice = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choice[i];
        choice.src = choice[i] + ".png";
        choice.addEventListener("click", selctChoice);
        document.getElementById("choices").append(choice);
    };
};

function selctChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";
    opponent = choice[Math.random() * 3];
    opponent.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner 
    if (you == opponent) {
        yourscore += 1;
        opponentScore += 1;

    } else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourscore += 1;
            } else if (opponent == "paper") {
                opponentScore += 1;
            };
        } else if (you == "scissors") {
            if (opponent == "paper") {
                yourscore += 1;
            } else if (opponent == "rock") {
                opponentScore += 1;
            };
        } else if (you == "paper") {
            if (opponent == "rock") {
                yourscore += 1;
            } else if (opponent == "scissors") {
                opponentScore += 1;
            };
        };
    };
    document.getElementById("your-score").innerHTML = yourscore;
    document.getElementById("opponent-score").innerText = opponent;
};