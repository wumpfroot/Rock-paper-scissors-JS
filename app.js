const computerScoreCounter = document.getElementById("computerScoreCounter");
const playerScoreCounter = document.getElementById("playerScoreCounter");
const tiesCounter = document.getElementById("tiesCounter");
const resultText = document.getElementById("result-text");
const playerOptions = document.querySelectorAll("button");

let playerChoice;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

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
	tiesCounter.textContent = ties;
}

//get computers choice using a promise. Waits 500 milliseconds to make a choice
const computerOptions = ["rock", "paper", "scissors"];
const getRandomComputerChoice = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomChoice = computerOptions[Math.floor(Math.random() * 3)];
			resolve(randomChoice);
			reject("Something went wrong here!");
		}, 500);
	});
};

const game = async () => {
	//call computers random choice in an async function
	const computerChoice = await getRandomComputerChoice();

	const computerWinConditions = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};

	// checks the computerWinConditions for matches. If there is a match, computer wins.
	//If not, player wins.
	if (playerChoice === computerChoice) {
		resultText.textContent = "It is a tie!";
		ties++;
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
