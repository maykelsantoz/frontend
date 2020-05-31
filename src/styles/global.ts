import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 49.5%;
    box-sizing: border-box;
  }

  body {
    padding: 1rem 3rem 10rem;
    line-height: 1.7;
    font-family: 'Nunito Sans', sans-serif;
    color: #555;
    min-height: 30vh;
    background: linear-gradient(to bottom right, #9be15d, #00e3ae);
    -webkit-font-smoothing: antialiased;
  }
`;
