const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {  
    computerSelection = computerPlay(); 
    playerSelection = prompt("Rock, Paper, or Scissors? ");

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return "You win! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        compScore += 1;
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        compScore += 1;
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        compScore += 1;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === computerSelection){
        playerScore += 1;
        compScore += 1;
        return "Tie!"
    } else {
        return "That is not a valid selection. Pick again!"
    }
}

function game() {
    while (playerScore < 5 && compScore < 5) {
        console.log(playRound());
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
    }
    winner();
}

function winner() {
    if (compScore > playerScore) {
        console.log("\nThe computer dominated your ass! Better luck next time!")
    } else if (compScore < playerScore) {
        console.log("\nWay to crush it! You win!")
    } else {
        console.log("\nHoly shizzers! It's a tie!")
    }
}
game();