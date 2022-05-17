const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let roundPara = document.getElementById('roundPara');
let yourScorePara = document.getElementById('yourScorePara');
let compScorePara = document.getElementById('compScorePara');
let winnerPara = document.getElementById('winnerPara');

rock.addEventListener('click', playRoundRock);
paper.addEventListener('click', playRoundPaper);
scissors.addEventListener('click', playRoundScissors);

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRoundRock() {  
    let computerSelection = computerPlay(); 
    if (computerSelection === 'scissors') {
        playerScore += 1;
        roundPara.textContent = "You win! Rock beats Scissors!";
    } else if (computerSelection === 'paper') {
        compScore += 1;
        roundPara.textContent = "You lose! Paper beats Rock!";
    } else {
        playerScore += 1;
        compScore += 1;
        roundPara.textContent =  "Tie!";
    } 
    yourScorePara.textContent = `Your score: ${playerScore}`;
    compScorePara.textContent = `Computer score: ${compScore}`;
    checkWinner(); 
}

function playRoundPaper() {  
    let computerSelection = computerPlay(); 
    if (computerSelection === 'rock') {
        playerScore += 1;
        roundPara.textContent = "You win! Paper beats Rock!";
    } else if (computerSelection === 'scissors') {
        compScore += 1;
        roundPara.textContent =  "You lose! Scissors beats Paper!";
    } else {
        playerScore += 1;
        compScore += 1;
        roundPara.textContent = "Tie!";
    }  
    yourScorePara.textContent = `Your score: ${playerScore}`;
    compScorePara.textContent = `Computer score: ${compScore}`;
    checkWinner();   
}

function playRoundScissors() {  
    let computerSelection = computerPlay(); 
    if (computerSelection === 'paper') {
        playerScore += 1;
        roundPara.textContent = "You win! Scissors beats Paper!";
    } else if (computerSelection === 'rock') {
        compScore += 1;
        roundPara.textContent = "You lose! Rock beats Scissors!";
    } else {
        playerScore += 1;
        compScore += 1;
        roundPara.textContent = "Tie!";
    }
    yourScorePara.textContent = `Your score: ${playerScore}`;
    compScorePara.textContent = `Computer score: ${compScore}`;
    checkWinner(); 
}

function checkWinner() {
    if (playerScore >= 5 || compScore >= 5) {
        winner();
    }    
}

function winner() {
   if (compScore > playerScore) {
       winnerPara.textContent = "\nThe computer dominated your ass! Better luck next time!";
    } else if (compScore < playerScore) {
        winnerPara.textContent = "\nWay to crush it! You win!";
    } else {
        winnerPara.textContent = "\nHoly shizzers! It's a tie!";
    }
}