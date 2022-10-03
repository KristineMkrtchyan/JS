let text = document.querySelector('.game-over-text')
let cell = document.querySelectorAll('.cell')
let restart = document.querySelector('.restart')

const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winStates: [

        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        ['0', '4', '8'],
        ['2', '4', '6']
    ]
};

function wichPlayerIs ()  {
    if ( game.xTurn) {
        text.innerHTML = "player 1 turn"
        text.style.display = "block"
       } else  {
        text.innerHTML = "player 2 turn"
        text.style.display = "block"
       };
};

function checkWinners (){
    if (!document.querySelectorAll('.cell:not(.disabledCell)').length) {
        text.style.display = "block";
        text.textContent = 'Nobody Wins!'
    }

    game.winStates.forEach(winning => {
        const xWins = winning.every(state => game.xState.includes(state))
        const oWins = winning.every(state => game.oState.includes(state))

        if (xWins || oWins) {
            cell.forEach(cell => cell.classList.add('disabledCell'))
            text.style.display = "block";
            text.textContent = xWins ? 'X wins!' : 'O wins!'
        }
    })
};


document.addEventListener('click', event => {
    const target = event.target
    const isCell = target.classList.contains('cell')
    const isDisabled = target.classList.contains('disabledCell')

    wichPlayerIs();

    if (isCell && !isDisabled) {
        const cellValue = target.dataset.value
      
        game.xTurn === true ? game.xState.push(cellValue) : game.oState.push(cellValue)

        target.classList.add('disabledCell')
        target.classList.add(game.xTurn ? 'x': 'o')

        game.xTurn = !game.xTurn
        
    }

    checkWinners();
});

restart.addEventListener('click', () => {
    text.style.display = "block";
    cell.forEach(cell => {cell.classList.remove('disabledCell', 'x', 'o')});

    game.xTurn = true
    game.xState = []
    game.oState = []
});