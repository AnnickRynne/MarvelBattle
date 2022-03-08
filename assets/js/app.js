/** 
 * Variables (the score variables change so they have to be 'let' variables to work)
 * 
 */
let yourScore = 0;
let ramScore = 0;
let coolname = [];
let yourName = document.getElementById("coolname");

const yourChoice = document.getElementById("your_choice");
const ramGen = document.getElementById("ram_gen");
const yourScore_span = document.getElementById("your_score");
const ramScore_span = document.getElementById("ram_score");
const gameResult = document.getElementById("result");
const hammer_div = document.getElementById("hammer");
const fist_div = document.getElementById("fist");
const dagger_div = document.getElementById("dagger");
const btn = document.getElementById("button");
const hideGame_sect = document.getElementById("game");
const hideRegister_sect = document.getElementById("register");

/**
 * 2 actions with the eventListener: 
 * - The game is hidden until the player clicks on START
 * - Therefore the player must first enter a name and click on the button to start playing
 */
btn.addEventListener("click", function () {
    if (hideGame_sect.style.display = "none" && yourName.value != "") {
        hideGame_sect.style.display = "block";
        hideRegister_sect.style.display ="none";
        coolname.push(yourName.value);
        return coolname;
    } else {
        alert("Enter a name to start the game!");
    }
})


/**
 * The Select 'event' function is actioned when the player clicks on a weapon
 */
function select() {
    // let hammer_div = document.getElementById("hammer");
    // let fist_div = document.getElementById("fist");
    // let dagger_div = document.getElementById("dagger");
    hammer_div.addEventListener('click', function () {
        runGame("Hammer");
    })
    fist_div.addEventListener('click', function () {
        runGame("Fist");
    })
    dagger_div.addEventListener('click', function () {
        runGame("Dagger");
    })
}
select();


// R.A.M. choice of weapon (using Math.ramdom)
function getRamChoice() {
    let weapons = ['Hammer', 'Fist', 'Dagger'];
    let randomNumber = Math.floor(Math.random() * weapons.length);
    return weapons[randomNumber];
}

/** 
 * The 3 functtions below display the results for the 
 * 3 possible outcomes: win, lose or draw:
 */

// Display 'You win' player's score goes up 1 point
function win() {
    yourScore++;
    yourScore_span.innerText = yourScore;
    gameResult.innerText = coolname + ", it's a win!";
}

// Display 'You lose'  R.A.M. computer score goes up 1 point
function lose() {
    ramScore++;
    ramScore_span.innerText = ramScore;
    gameResult.innerText = coolname + " ...You lose";
}

// Display 'It's a draw!'; score-board does not change
function draw() {
    gameResult.innerText = "It's a draw!";
}


/** 
 * The runGame function establishes and display the choices 
 * in weapons (yourWeapon and ramChoice): 
 */
function runGame(yourWeapon) {
    ramChoice = getRamChoice();
    yourChoice.innerHTML = yourWeapon;
    ramGen.innerHTML = ramChoice;
    switch (yourWeapon + ramChoice) {
        case "FistDagger":
        case "HammerFist":
        case "DaggerHammer":
            // console.log("You win!");
            win();
            break;
        case "DaggerFist":
        case "FistHammer":
        case "HammerDagger":
            // console.log("You lose!");
            lose();
            break;
        case "HammerHammer":
        case "FistFist":
        case "DaggerDagger":
            // console.log("It's a draw!");
            draw();
            break;
    }
}