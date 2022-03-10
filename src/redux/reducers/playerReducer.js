import { ADD_PLAYER, SET_SCORE } from '../actions';

const PLAYER_INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = PLAYER_INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PLAYER:
    return { ...state, ...action.payload };
  case SET_SCORE:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default player;
