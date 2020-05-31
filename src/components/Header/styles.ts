import styled from 'styled-components';

export const HeaderStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Megrim&display=swap');

  span {
    font-size: 6rem;
    color: white;
    transform: skewY(-5deg);
    text-align: center;
    position: relative;
    word-spacing: 3px;
  }

  h1 {
    font-family: 'Megrim', sans-serif;
    font-size: 6rem;
    color: white;
    transform: skewY(-5deg);
    text-align: center;
    position: relative;
    word-spacing: 3px;
  }

  h1::before {
    content: '';
    display: block;
    height: 65%;
    width: 49%;
    position: absolute;
    top: 105%;
    left: 50%;
    background: linear-gradient(to bottom, #9be15d, #00e3ae);
    opacity: 0.8;
    z-index: -1;
    transform: skewY(370deg) translate(-50%, -50%);
  }

  .container {
    width: 95rem;
    margin: 0 auto;
  }
`;
