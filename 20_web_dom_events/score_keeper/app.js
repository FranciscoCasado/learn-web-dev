const p1 = {
    score: 0,
    button: document.querySelector('.js-p1-button'),
    display: document.querySelector('.js-p1-display')
};

const p2 = {
    score: 0,
    button: document.querySelector('.js-p2-button'),
    display: document.querySelector('.js-p2-display')
};

const gameGoals = [5, 7, 11, 15, 21, 25];
const selectGameGoal = document.querySelector('select');
selectGameGoal.addEventListener('change', () => gameData.goal = selectGameGoal.value)

for (let goal of gameGoals){
    const option = document.createElement('option');
    option.text = `${goal}`;
    option.value = goal;
    selectGameGoal.add(option);
}
selectGameGoal.selectedOptions


var gameData = {
    goal: selectGameGoal.value,
    players: [p1, p2]
};

function updateScoreBoard() {
    for (let player of gameData.players) {
        player.display.innerText = player.score;
    }
}

function isWinner(player) {
    return (player.score == gameData.goal)
}

function endGame(winner) {
    winner.display.classList.add('winner');
    for (let player of gameData.players) {
        player != winner && player.display.classList.add('loser');
    }
    disablePlayerButtons()
}

function incrementPlayerScore(player) {
    player.score += 1;
    updateScoreBoard();
    isWinner(player) && endGame(player);
}

p1.button.addEventListener('click', () => {incrementPlayerScore(p1)});
p2.button.addEventListener('click', () => {incrementPlayerScore(p2)});


const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', function () {
    for (let player of gameData.players) {
        player.score = 0;
        player.display.classList.remove('winner', 'loser');
    }
    updateScoreBoard();
    enablePlayerButtons();
});


function disablePlayerButtons() {
    for (let player of gameData.players) {
        player.button.disabled = true;
        player.button.classList.add('button--disabled');
    }
}

function enablePlayerButtons() {
    for (let player of gameData.players) {
        player.button.disabled = false;
        player.button.classList.remove('button--disabled');
    }
}