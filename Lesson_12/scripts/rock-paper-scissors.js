let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();
document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock'); // playGame returns a string not a function so no need to call it in a function
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper'); // playGame returns a string not a function so no need to call it in a function
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors'); // playGame returns a string not a function so no need to call it in a function
});

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
    autoPlay();
});

document.querySelector('.js-reset-score-button').addEventListener('click', () => {
    resetScore();
});


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    }
    else if (event.key === 'p') {
        playGame('paper');
    }
    else if (event.key === 's') {
        playGame('scissors');
    }
    else if (event.key === 'a') {
        autoPlay();
    }
    else if (event.key === 'Backspace') {
        resetScore();
    }
});

function playGame (playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose!';
        }
        else if (computerMove === 'paper') {
            result = 'You win!';
        }
        else {
            result = 'Tie.';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else {
            result = 'You lose!';
        }
    }
    else { // playerMove === 'rock'
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You lose!';
        }
        else {
            result = 'You win!';
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    }
    else if (result === 'You lose!') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); // convert object to JSON
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="icons/${playerMove}-emoji.png"> <img src="icons/${computerMove}-emoji.png"> Computer`;
}

function resetScore() {
    document.querySelector('.js-show-confirmation').innerHTML =
        `<p>Are you sure you want to reset the score?</p>
          <button class="js-yes-button">Yes</button>
          <button class="js-no-button">No</button>`;
    document.querySelector('.js-yes-button').addEventListener('click', () => {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
        document.querySelector('.js-result').innerHTML = '';
        document.querySelector('.js-moves').innerHTML = '';
        document.querySelector('.js-show-confirmation').innerHTML = '';
    });

    document.querySelector('.js-no-button').addEventListener('click', () => {
        document.querySelector('.js-show-confirmation').innerHTML = '';
    });
}



function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    return computerMove;
}

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalID = setInterval( () => {
            playGame(pickComputerMove());
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.js-auto-play-button').innerHTML = 'Stop Auto Play';
    }
    else {
        clearInterval(intervalID);
        isAutoPlaying = false;
        document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
    }
}