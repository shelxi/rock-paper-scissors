
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

console.log(getHumanChoice());

