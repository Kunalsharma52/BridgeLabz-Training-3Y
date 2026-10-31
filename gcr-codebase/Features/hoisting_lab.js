
// Original code
console.log("Original Hoisting Example");

console.log(score);

announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}

// Corrected version
console.log("\nCorrected Version");

let newScore = 50;

function showMessage() {
    console.log("Game started");
}

let gameStatus = "ready";

function playGame() {
    console.log("Score:", newScore);
    console.log("Status:", gameStatus);
}

showMessage();
playGame();


// Arrow function version
console.log("\nArrow Function Version");

const showAnnouncement = () => {
    console.log("Game started using arrow function");
};

const startGameArrow = () => {
    console.log("Game status:", gameStatus);
};

// Arrow functions are called after initialization
showAnnouncement();
startGameArrow();
