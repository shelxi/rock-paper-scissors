
function getComputerChoice() {
    const randomNum = 
Math.floor(Math.random() * 3);
    if(randomNum === 0) {
        return "rock";
    } else if(randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const chooseNum = 
prompt("choose a number", "");
    if(chooseNum === 0) {
        return "rock";
    } else if(chooseNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playGame() {


    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
              (humanChoice === "paper" && computerChoice === "rock") ||
              (humanChoice === "scissors" && computerChoice === "paper")) {

                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanChoice++;
              } else {
                console.log(`You lose! ${computerChoice} beat ${humanChoice}.`);
                computerChoice++;
              }

}

//Get the human and computer choices
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);


}

playGame();
playGame();
playGame();
playGame();
playGame();