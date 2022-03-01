// R.A.M. choice of weapon (using Math.ramdom)
function getRamChoice() {
    let weapons = ['hammer', 'fist', 'dagger'];
    let randomNumber = Math.floor(Math.random() * 3);
    return weapons[randomNumber];
}

function game(yourWeapon) {
    let yourChoice = document.getElementById("your_choice");
    let ramGen = document.getElementById("ram_gen");
    ramChoice = getRamChoice();
    yourChoice.innerHTML = yourWeapon;
    ramGen.innerHTML = ramChoice;
     switch (yourWeapon + ramChoice) {
        case "fistdagger":
        case "fisthammer":
        case "daggerhammer":
            // console.log("You win!");
            gameResult.innerText = "You win!";
            break;
        case "daggerfist":
        case "hammerfist":
        case "hammerdagger":
            // console.log("You lose!");
            gameResult.innerText = "You lose!";
            break;
        case "hammerhammer":
        case "fistfist":
        case "daggerdagger":
            // console.log("It's a draw!");
            gameResult.innerText = "It's a draw!";
            break;
     }
}


function main() {
    let hammer_div = document.getElementById("hammer");
    let fist_div = document.getElementById("fist");
    let dagger_div = document.getElementById("dagger");
    hammer_div.addEventListener('click', function () {
        game("hammer");
        console.log("test: hammer");
    })

    fist_div.addEventListener('click', function () {
        game("fist");
        console.log("test: fist");
    })

    dagger_div.addEventListener('click', function () {
        game("dagger");
        console.log("test: dagger");
    })
}

main();