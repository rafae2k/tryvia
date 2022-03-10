import md5 from 'crypto-js/md5';

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

export function fetchGravatar(gravatarEmail) {
  const HASH = md5(gravatarEmail).toString();
  const URL = `https://www.gravatar.com/avatar/${HASH}`;

  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
}
