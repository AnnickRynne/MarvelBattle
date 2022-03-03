/** 
 * Variables (the score variables change so they have to be 'let' variables to work)
 * 
*/
let yourScore = 0;
let ramScore = 0;
const yourChoice = document.getElementById("your_choice");
const ramGen = document.getElementById("ram_gen");
const yourScore_span = document.getElementById("your_score");
const ramScore_span = document.getElementById("ram_score");
const gameResult = document.getElementById("result");

/**
 * The Select 'event' function is actioned when the player clicks on a weapon
 */
 function select() {
    let hammer_div = document.getElementById("hammer");
    let fist_div = document.getElementById("fist");
    let dagger_div = document.getElementById("dagger");
    hammer_div.addEventListener('click', function () {
        runGame("hammer");
    })
    fist_div.addEventListener('click', function () {
        runGame("fist");
    })
    dagger_div.addEventListener('click', function () {
        runGame("dagger");
    })
}
select();


// R.A.M. choice of weapon (using Math.ramdom)
function getRamChoice() {
    let weapons = ['hammer', 'fist', 'dagger'];
    let randomNumber = Math.floor(Math.random() * 3);
    return weapons[randomNumber];
}

/** 
 * The 3 functtions below display the results for the 
 * 3 possible outcomes: win, lose or draw:
 */
function win() {
    yourScore++;
    // console.log("you win!");
    yourScore_span.innerText = yourScore;
    gameResult.innerText = "You win!"; 
}

function lose() {
    ramScore++;
    // console.log("you lose");
    ramScore_span.innerText = ramScore;
    gameResult.innerText = "You lose";
}

function draw() {
    // console.log("It's a draw!"); 
    gameResult.innerText = "It's a draw!";  
}


/** 
 * The Game function establishes and display the choices 
 * in weapons (yourWeapon and ramChoice): 
*/
function runGame(yourWeapon) {
    ramChoice = getRamChoice();
    yourChoice.innerHTML = yourWeapon;
    ramGen.innerHTML = ramChoice;
     switch (yourWeapon + ramChoice) {
        case "fistdagger":
        case "fisthammer":
        case "daggerhammer":
            // console.log("You win!");
            win();
            break;
        case "daggerfist":
        case "hammerfist":
        case "hammerdagger":
            // console.log("You lose!");
            lose();
            break;
        case "hammerhammer":
        case "fistfist":
        case "daggerdagger":
            // console.log("It's a draw!");
            draw();
            break;
     }
}

