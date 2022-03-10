import { saveToken } from '../../services/localStorage.service';

// Token actions
export const GET_TRIVIA_TOKEN = 'GET_TRIVIA_TOKEN';

export const getTriviaToken = (state) => ({
  type: GET_TRIVIA_TOKEN,
  payload: state,
});

// Thunk
export function fetchToken() {
  const URL = 'https://opentdb.com/api_token.php?command=request';
  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      saveToken(data.token);
      dispatch(getTriviaToken(data.token));
    } catch (error) {
      console.error(error);
    }
  };
}
