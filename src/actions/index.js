export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1
});


//onNewGame
//feedback
//onGuess
//count
//guesses