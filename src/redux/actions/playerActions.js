export const ADD_PLAYER = 'ADD_PLAYER';
export const SET_SCORE = 'SET_SCORE';

export const addPlayer = (state) => ({
  type: ADD_PLAYER,
  payload: state,
});

export const setScore = (state) => ({
  type: SET_SCORE,
  payload: state,
});
