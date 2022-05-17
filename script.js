const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

let playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', playGame);

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function playGame() {
    for (let i = 0; i < 5; i++) {
        rock.addEventListener('click', playRoundRock);
        paper.addEventListener('click', playRoundPaper);
        scissors.addEventListener('click', playRoundScissors);

        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
    }
    winner();
}

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRoundRock() {  
    let computerSelection = computerPlay(); 

    if (computerSelection === 'scissors') {
        playerScore += 1;
        return "You win! Rock beats Scissors!";
    } else if (computerSelection === 'paper') {
        compScore += 1;
        return "You lose! Paper beats Rock!";
    } else {
        playerScore += 1;
        compScore += 1;
        return "Tie!";
    } 
}

function playRoundPaper() {  
    let computerSelection = computerPlay(); 

    if (computerSelection === 'rock') {
        playerScore += 1;
        return "You win! Paper beats Rock!";
    } else if (computerSelection === 'scissors') {
        compScore += 1;
        return "You lose! Scissors beats Paper!";
    } else {
        playerScore += 1;
        compScore += 1;
        return "Tie!";
    }
}

function playRoundScissors() {  
    let computerSelection = computerPlay(); 

    if (computerSelection === 'paper') {
        playerScore += 1;
        return "You win! Scissors beats Paper!";
    } else if (computerSelection === 'rock') {
        compScore += 1;
        return "You lose! Rock beats Scissors!";
    } else {
        playerScore += 1;
        compScore += 1;
        return "Tie!";
    }
}

function winner() {
   if (compScore > playerScore) {
       console.log("\nThe computer dominated your ass! Better luck next time!");
       console.log(`Your score: ${playerScore}`);
       console.log(`Computer score: ${compScore}`);
    } else if (compScore < playerScore) {
        console.log("\nWay to crush it! You win!");
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
    } else {
        console.log("\nHoly shizzers! It's a tie!");
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${compScore}`);
    }
}