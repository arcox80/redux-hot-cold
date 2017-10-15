import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === actions.NEW_GAME) {
    return Object.assign({}, initialState, {
      correctAnswer: action.correctAnswer
    });
  } else if (action.type === actions.TOGGLE_INFO) {
    return Object.assign({}, state, {
      showInfoModal: !state.showInfoModal
    });
  } else if (action.type === actions.ADD_CARD) {
    let lists = state.lists.map((list, index) => {
      if (index !== action.listIndex) {
        return list;
      }
      return Object.assign({}, list, {
        cards: [...list.cards, {
          text: action.text
        }]
      });
    });

    return Object.assign({}, state, {
      lists
    });
  }
  return state;
};