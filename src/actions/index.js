export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
  correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO
});

//onNewGame
//feedback
//onGuess
//count
//guesses