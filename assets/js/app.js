// R.A.M. choice of weapon (using Math.ramdom)
function getRamChoice() {
    const weapons = ['hammer', 'fist', 'dagger'];
    const randomNumber = Math.floor(Math.random() * 3);
    return weapons[randomNumber];
}

function game() {
    ramChoice = getRamChoice();
}

function main() {
    const hammer_div = document.getElementById("hammer");
    const fist_div = document.getElementById("fist");
    const dagger_div = document.getElementById("dagger");
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