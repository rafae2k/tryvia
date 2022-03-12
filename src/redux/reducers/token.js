import {
  SET_TRIVIA_TOKEN,
} from '../actions/tokenActions';

const TOKEN_INITIAL_STATE = '';

const token = (state = TOKEN_INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TRIVIA_TOKEN:
    return action.payload;
  default:
    return state;
  }
};

export default token;
