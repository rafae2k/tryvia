import {
  readTokenFromLocalStorage,
  saveTokenOnLocalStorage,
} from '../../services/localStorage.service';
import fetchTriviaToken from '../../utils/fetchTriviaToken';
import { setTriviaToken } from './tokenActions';

// Fetch Questions actions
export const GET_TRIVIA_QUESTIONS = 'GET_TRIVIA_QUESTIONS';

export const getTriviaQuestions = (state) => ({
  type: GET_TRIVIA_QUESTIONS,
  payload: state,
});

// Thunk
export const fetchQuestions = () => async (dispatch) => {
  try {
    let token = readTokenFromLocalStorage();

    let response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    let data = await response.json();

    if (data.response_code === 0) {
      dispatch(getTriviaQuestions(data.results));
    } else if (data.response_code !== 0) {
      token = await fetchTriviaToken();
      await saveTokenOnLocalStorage(token);
      dispatch(setTriviaToken(token));
      response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
      data = await response.json();
      dispatch(getTriviaQuestions(data.results));
    }
  } catch (error) {
    console.error(error);
  }
};
