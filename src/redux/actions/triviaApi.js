import { readToken } from '../../services/localStorage.service';

// Fetch Questions actions
export const GET_TRIVIA_QUESTIONS = 'GET_TRIVIA_QUESTIONS';

export const getTriviaQuestions = (state) => ({
  type: GET_TRIVIA_QUESTIONS,
  payload: state,
});

// Thunk
export function fetchQuestions() {
  const token = readToken();
  const URL = `https://opentdb.com/api.php?amount=5&token=${token}`;
  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch(getTriviaQuestions(data.results));
    } catch (error) {
      console.error(error);
    }
  };
}
