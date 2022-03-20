import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
 
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
 
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
 
    --link: #5d80d6;
 
    --logo: #5867f2;
  }

#root {
  font-size: 62.5%;
  
}

body, html, .App, #root {
  height: 100vh;
  width: 100 vw;
  background-color: #6441A5;
  cursor: url("https://cdn.custom-cursor.com/db/cursor/32/Rock_Hand_cursor.png"), auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, button, input {
  border: 0;
  outline: 0;

  font-family: 'Poppins', sans-serif;
  cursor: url("https://cdn.custom-cursor.com/db/pointer/32/Rock_Hand_Pointer.png"), auto;
}
`;
