let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*9);

const compareGuesses = (humanGuess, computerGuess, targetNumber) =>{
    const humanDifference = Math.abs(humanGuess - targetNumber);
    const computerDifference = Math.abs(computerGuess - targetNumber); 
    
    return (humanDifference <= computerDifference ? true : false);
}


const updateScore = winner =>{
    if (winner === 'human'){
        humanScore++;
    }
    else{
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;


