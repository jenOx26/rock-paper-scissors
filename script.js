const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

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
        console.log("You win! Rock beats Scissors!");
    } else if (computerSelection === 'paper') {
        compScore += 1;
        console.log("You lose! Paper beats Rock!");
    } else {
        playerScore += 1;
        compScore += 1;
        console.log("Tie!");
    } 
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${compScore}`);
    checkWinner(); 
}

function playRoundPaper() {  
    let computerSelection = computerPlay(); 
    if (computerSelection === 'rock') {
        playerScore += 1;
        console.log("You win! Paper beats Rock!");
    } else if (computerSelection === 'scissors') {
        compScore += 1;
        console.log("You lose! Scissors beats Paper!");
    } else {
        playerScore += 1;
        compScore += 1;
        console.log("Tie!");
    }  
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${compScore}`);
    checkWinner();   
}

function playRoundScissors() {  
    let computerSelection = computerPlay(); 
    if (computerSelection === 'paper') {
        playerScore += 1;
        console.log("You win! Scissors beats Paper!");
    } else if (computerSelection === 'rock') {
        compScore += 1;
        console.log("You lose! Rock beats Scissors!");
    } else {
        playerScore += 1;
        compScore += 1;
        console.log("Tie!");
    }
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${compScore}`);
    checkWinner(); 
}

function checkWinner() {
    if (playerScore >= 5 || compScore >= 5) {
        winner();
    }    
}

function winner() {
   if (compScore > playerScore) {
       console.log("\nThe computer dominated your ass! Better luck next time!");
    } else if (compScore < playerScore) {
        console.log("\nWay to crush it! You win!");
    } else {
        console.log("\nHoly shizzers! It's a tie!");
    }
}