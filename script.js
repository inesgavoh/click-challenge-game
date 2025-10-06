let timeLeft = 10;
let score = 0;
let timer;
let isGameActive = false;

const timeLeftDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const gameMessage = document.getElementById('game-message');

function startGame() {
    if (isGameActive) return; // Prevent starting a new game while one is active

    isGameActive = true;
    score = 0;
    timeLeft = 10;

    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
    gameMessage.textContent = '';

    // Start the countdown timer
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft === 0) {
        clearInterval(timer);
        isGameActive = false;
        gameMessage.textContent = `Game over! Your final score is: ${score}`;
    } else {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
    }
}

function handleButtonClick() {
    if (!isGameActive) {
        startGame(); // Start the game if it's not already active
    } else {
        score++;
        scoreDisplay.textContent = score;
    }
}

// Add click event listener to the button
clickButton.addEventListener('click', handleButtonClick);
