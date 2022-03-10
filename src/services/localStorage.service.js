const TOKEN = 'token';

// Read token from local localStorage
export const readToken = () => JSON.parse(localStorage.getItem(TOKEN));

// Save token on local localStorage
export const saveToken = (triviaToken) => localStorage
  .setItem(TOKEN, JSON.stringify(triviaToken));
