import {
  GET_TRIVIA_QUESTIONS,
} from '../actions/triviaApi';

const QUESTIONS_INITIAL_STATE = [];

const questions = (state = QUESTIONS_INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TRIVIA_QUESTIONS:
    return action.payload;
  default:
    return state;
  }
};

export default questions;
