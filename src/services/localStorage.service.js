const TOKEN = 'token';

// Read token from local localStorage
export const readTokenFromLocalStorage = () => JSON.parse(localStorage.getItem(TOKEN));

// Save token on local localStorage
export const saveTokenOnLocalStorage = async (triviaToken) => localStorage
  .setItem(TOKEN, JSON.stringify(triviaToken));
