////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */
	move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */
	move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
	
	if (playerMove == computerMove) {
		winner = 'tie';
		
	} else if (playerMove == 'rock' && computerMove == 'scissors') {
		winner = 'player';
	} else if (playerMove == 'paper' && computerMove == 'rock') {
		winner = 'player';
	} else if (playerMove == 'scissors' && computerMove == 'paper') {
		winner = 'player';
		
	} else if (computerMove == 'rock' && playerMove == 'scissors') {
		winner = 'computer';
	} else if (computerMove == 'paper' && playerMove == 'rock') {
		winner = 'computer';
	} else if (computerMove == 'scissors' && playerMove == 'paper') {
		winner = 'computer';
	}

	
	
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
	var playerMove = randomPlay();
	var computerMove = randomPlay();
	
	
	
	while (playerWins < 5 && computerWins < 5) {
		var winner = getWinner(playerMove,computerMove);
		if (winner == 'tie'){
		    null;
		}
		else if (winner === 'player'){
			playerWins += 1;
		}
		else if (winner === 'computer'){
			computerWins += 1;
		}
		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
		console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
		
		playerMove = randomPlay();
		computerMove = randomPlay();
	}
	return [playerWins, computerWins];
}

