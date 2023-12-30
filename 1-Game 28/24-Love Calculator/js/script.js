window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name");
    let crushName = document.getElementById("crush-name");

    if (yourName.value !== "" && crushName.value !== "") {
        let percentage = Math.floor(Math.random() * 101);
        document.getElementById("result-message").innerText = `${yourName.value} and ${crushName.value} Chance Of Love`;
        document.getElementById("result-percentage").innerText = `${percentage.toString()} %`;
    };

    if (yourName.value === '' && crushName.value === '') {
        return alert("Enter your name And crush name");
    };
};