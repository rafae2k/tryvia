import { SET_USER_RANKING } from '../actions/rankingActions';

const RANKING_INITIAL_STATE = [];

const ranking = (state = RANKING_INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_RANKING:
    return [...state, action.payload];
  default:
    return state;
  }
};

export default ranking;
