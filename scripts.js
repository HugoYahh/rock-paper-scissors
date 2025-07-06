const btnRock = document.querySelector("#rock-btn")
const btnPaper = document.querySelector("#paper-btn")
const btnScissors = document.querySelector("#scissors-btn")
let btnContainer = document.querySelector(".btn-container")
let result = document.querySelector("#result")

btnContainer.addEventListener("click", (event) => {
    let target = event.target
    switch (target.id) {
        case "rock-btn":
            playRound("rock")
            break;
        case "paper-btn":
            playRound("paper")
            break;
        case "scissors-btn":
            playRound("scissors")
            break;
        default:
            console.log("Ya un bug")
            break;
    }
});


function getComputerChoice() {
    let randomnumber = Math.random();
    if (randomnumber <= 1 / 3) {
        return "rock";
    } else if (randomnumber >= 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanchoice = prompt("Rock, Paper, or Scissors ?!");
    return humanchoice;
}
let humanscore = 0;
let computerscore = 0;


function playRound(humanchoice) {

    let computerchoice = getComputerChoice();
    if (humanchoice === computerchoice) {
        result.textContent = "Egalité ! Rejouons."

    } else {

        switch (humanchoice) {
            case "rock":
                if (computerchoice === "scissors") {
                    humanscore++;
                    result.textContent = "Humain gagne !"

                } else {
                    computerscore++;
                    result.textContent = "Ordinateur gagne !"

                }
                break;

            case "paper":
                if (computerchoice === "rock") {
                    humanscore++;
                    result.textContent = "Humain gagne !"

                } else {
                    computerscore++;
                    result.textContent = "Ordinateur gagne !";

                }
                break;

            case "scissors":
                if (computerchoice === "paper") {
                    humanscore++;
                    result.textContent = "Humain gagne !"

                } else {
                    computerscore++;
                    result.textContent = "Ordinateur gagne !";

                }
                break;

            default:

                result.textContent = "Une erreur innatendue s'est produite"
                break;
        }
    }
    sleep(1500).then(() => { result.textContent = `Humain ${humanscore} - Ordinateur ${computerscore}` });
    if (humanscore >= 5 || computerscore >= 5) {
        if (humanscore > computerscore) {
            result.textContent = "Human wins ! GG !"

        }
        else if (humanscore < computerscore) {
            result.textContent = "Computer wins ! GG !"
        }
    }
}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}



