var gameScores = {
    playerOne: 0,
    playerTwo: 0,
};

const select = document.querySelector('select');
select.addEventListener('change', () => gameGoal = select.value)

let gameGoal = select.value;


const playerOneSpan = document.querySelector('#score-player-1')
const playerTwoSpan = document.querySelector('#score-player-2')

function updateScoreBoard () {
    playerOneSpan.innerText = gameScores.playerOne;
    playerTwoSpan.innerText = gameScores.playerTwo;
}

function checkWinner() {
    if (gameScores.playerOne == gameGoal){
        playerOneSpan.classList.add('winner');
        playerTwoSpan.classList.add('loser');
        disablePlayerButtons()
    }
    
    if (gameScores.playerTwo == gameGoal){
        playerOneSpan.classList.add('loser');
        playerTwoSpan.classList.add('winner');
        disablePlayerButtons()
    }
}


const btnPlayerOne = document.querySelector('.btn-player-1');
const btnPlayerTwo = document.querySelector('.btn-player-2');

btnPlayerOne.addEventListener('click', function () {
   gameScores.playerOne +=1;
   updateScoreBoard(); 
   checkWinner();
});


btnPlayerTwo.addEventListener('click', function () {
    gameScores.playerTwo +=1;
    updateScoreBoard(); 
    checkWinner();
 });

const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', function () {
   gameScores.playerOne = 0;
   gameScores.playerTwo = 0; 
   updateScoreBoard();
   playerOneSpan.classList.remove('loser');
   playerOneSpan.classList.remove('winner');
   playerTwoSpan.classList.remove('loser');
   playerTwoSpan.classList.remove('winner');
   enablePlayerButtons();
});


function disablePlayerButtons () {
    btnPlayerOne.disabled = true;
    btnPlayerTwo.disabled = true;
    btnPlayerOne.classList.add('button-disabled')
    btnPlayerTwo.classList.add('button-disabled')
}

function enablePlayerButtons () {
    btnPlayerOne.disabled = false;
    btnPlayerTwo.disabled = false;
    btnPlayerOne.classList.remove('button-disabled')
    btnPlayerTwo.classList.remove('button-disabled')
}