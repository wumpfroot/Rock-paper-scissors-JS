const computerScoreCounter = document.getElementById("computerScoreCounter");
const playerScoreCounter = document.getElementById("playerScoreCounter");
const resultText = document.getElementById("result-text");
const playerOptions = document.querySelectorAll("button");
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const computerOptions = ["rock", "paper", "scissors"];

playerOptions.forEach((option) =>
	//read the value in button and save it to playerchoice variable
	//then launch the game
	option.addEventListener("click", (e) => {
		playerChoice = e.target.value;
		game(playerChoice);
	})
);

function updateScores() {
	// Update the score counters in the HTML
	playerScoreCounter.textContent = playerScore;
	computerScoreCounter.textContent = computerScore;
}

const game = () => {
	//computers random choice
	const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

	const computerWinConditions = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};

	// checks the playerWinConditions for matches. If there is a match, player wins.
	//If not, computer wins.
	if (playerChoice === computerChoice) {
		resultText.textContent = "It is a tie!";
	} else if (playerChoice !== computerWinConditions[computerChoice]) {
		console.log(computerWinConditions[computerChoice]);
		resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You win!`;
		playerScore++;
	} else {
		resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. Computer wins!`;
		computerScore++;
	}
	updateScores();
};
