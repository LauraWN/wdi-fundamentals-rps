// ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

playToFive();

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;

function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    var move = getInput();
    if (move === null && move != "rock" && move != "paper" && move != "scissors" ) {
      prompt(console.log("Please pick again. Player picked: " + playerMove));
      } else {
        console.log("The player picks " + move + ".");
        playerMove = move;
        getComputerMove();
    }
}

function getComputerMove(move) {
    var move2 = randomPlay();
    if (move2 === null || 0) {
        randomPlay();
    } else {
        console.log("The computer picks " + move2 + ".");
        computerMove = move2;
        getWinner(playerMove, computerMove);
    }
}

var winner;
function getWinner (playerMove, computerMove) {
    //var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("It is a tie!");
        return winner;
    }
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else {
        getInput();
    }
    console.log("Looks like the " + winner + " wins!");
    return winner;
}

function playToFive() {
    console.log("Let's play the game Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var x = 1; x < 100; x = x + 1) {
        if (playerWins === 5 || computerWins === 5) {
            console.log("Final Scores--Player Wins: " + playerWins + "     Computer Wins: " + computerWins);
           break;
        } else {
            if (winner === "player") {
             playerWins = playerWins + 1;
             console.log("Player Wins: " + playerWins + "  Computer Wins: " + computerWins);
            } else if (winner === "computer") {
             computerWins = computerWins + 1;
             console.log("Player Wins: " + playerWins + "  Computer Wins: " + computerWins);
            } getPlayerMove();
        }
    }
}
