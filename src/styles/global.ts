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
    height: 100%;
  }

  body {
    padding: 1rem 3rem 10rem;
    line-height: 1.7;
    font-family: 'Nunito Sans', sans-serif;
    color: #555;
    min-height: 30vh;
    background: linear-gradient(to bottom right, #9be15d, #00e3ae);
    -webkit-font-smoothing: antialiased;
    background-repeat: no-repeat;
    height: 100%;
    background-attachment: fixed;
  }

  @media only screen and (max-width: 400px) {



    html {
    font-size: 24.5%;
    box-sizing: border-box;
    height: 50%;
  }

  body {
    padding: 1rem 3rem 10rem;
    line-height: 1.7;
    font-family: 'Nunito Sans', sans-serif;
    color: #555;
    min-height: 30vh;
    background: linear-gradient(to bottom right, #9be15d, #00e3ae);
    -webkit-font-smoothing: antialiased;
    background-repeat: no-repeat;
    height: 50%;
    background-attachment: fixed;
  }
  }

`;
