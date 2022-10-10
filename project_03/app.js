const gameState = {
    players: ['X', 'O'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

window.addEventListener('DOMContentLoaded', () => {
    const one = Array.from(document.querySelectorAll('.one'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButtn = document.querySelector('#resetbuttn');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';


  
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 6],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7]
];
    
const isValidAction = (one) => {
    if (one.innerText === 'X' || one.innerText === 'O'){
        return false;
    }

    return true;
};

const updateBoard =  (index) => {
    board[index] = currentPlayer;
}

const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}

const userAction = (one, index) => {
    if(isValidAction(one) && isGameActive) {
        one.innerText = currentPlayer;
        one.classList.add(`player${currentPlayer}`);
        changePlayer();
    }
}
    
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
        

    if (currentPlayer === 'O') {
        changePlayer();
    }

    one.forEach(one => {
        one.innerText = '';
    });
}

    one.forEach( (one, index) => {
        one.addEventListener('click', () => userAction(one, index));
    });

    resetButtn.addEventListener('click', resetBoard);
});