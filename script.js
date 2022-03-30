let playerSelection = "rock";
let computerSelection = computerPlay();
function computerPlay() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  return rockPaperScissors[
    Math.floor(Math.random() * rockPaperScissors.length)
  ];
}

function playRound(playerSelection, computerSelection) {
  let result;
  let winnerChoice;
  let looserChoice;
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return `You tie because both choose ${computerSelection}`;
  }
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result = "lose";
    winnerChoice = computerSelection;
    looserChoice = playerSelection;
  }
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    result = "won";
    winnerChoice = playerSelection;
    looserChoice = computerSelection;
  }
  return `You ${result}! ${winnerChoice} beats ${looserChoice}`;
}
console.log(playRound(playerSelection, computerSelection));
