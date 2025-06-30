function getComputerChoice(){
    let randomnumber = Math.random();
    if(randomnumber<=1/3){
        return "rock";
    } else if(randomnumber>=2/3){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanchoice=prompt("Rock, Paper, or Scissors ?!");
    return humanchoice;
}
let humanscore = 0;
let computerscore=0;


function playRound(){
    let humanchoice = getHumanChoice();
    let computerchoice = getComputerChoice();

    console.log(`Humain joue : ${humanchoice}`);
    console.log(`Ordinateur joue : ${computerchoice}`);

    if (humanchoice === computerchoice) {
        console.log("C'est une égalité ! Rejouons.");
    } else {
        
        switch (humanchoice) {
            case "rock":
                if (computerchoice === "scissors") {
                    humanscore++;
                    console.log("Humain gagne ! Rock bat Scissors.");
                } else { 
                    computerscore++;
                    console.log("Ordinateur gagne ! Paper bat Rock.");
                }
                break; 

            case "paper":
                if (computerchoice === "rock") {
                    humanscore++;
                    console.log("Humain gagne ! Paper bat Rock.");
                } else { 
                    computerscore++;
                    console.log("Ordinateur gagne ! Scissors bat Paper.");
                }
                break; 

            case "scissors":
                if (computerchoice === "paper") {
                    humanscore++;
                    console.log("Humain gagne ! Scissors bat Paper.");
                } else { 
                    computerscore++;
                    console.log("Ordinateur gagne ! Rock bat Scissors.");
                }
                break; 

            default:
                
                console.log("Une erreur inattendue s'est produite.");
                break;
        }
    }
    console.log(`Score actuel : Humain ${humanscore} - Ordinateur ${computerscore}`);
}

function playGame(){
    for (let i = 1 ; i<=5 ; i++){
        playRound();
    }
    if(humanscore>computerscore){
        console.log("Human wins ! GG !");
    }
    else if (humanscore<computerscore){
        console.log("Computer wins ! GG !")
    } 
}

