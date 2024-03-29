import styled from 'styled-components';

export const Header = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Megrim&display=swap');

  span {
    font-size: 5.5rem;
    color: white;
    transform: skewY(-5deg);
    text-align: center;
    position: relative;
    word-spacing: 3px;
  }

  h1 {
    font-family: 'Megrim', sans-serif;
    font-size: 5.5rem;
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
    width: 43%;
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
    margin: 0 auto 0 auto;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 400px) {

  .container {
    text-align: center;
    align-items: center;
    width: 50rem;
    margin-top: 3rem;
    justify-content: center;
  }

  span {
    font-size: 5.5rem;
    color: white;
    transform: skewY(-5deg);
    text-align: center;
    position: relative;
    word-spacing: 3px;
  }

  h1 {
    font-family: 'Megrim', sans-serif;
    font-size: 5.5rem;
    color: white;
    transform: skewY(-5deg);
    text-align: center;
    position: relative;
    word-spacing: 3px;
    width: 45rem;

    }

    h1::before {
      content: '';
      display: block;
      height: 65%;
      width: 90%;
      position: absolute;
      top: 105%;
      left: 50%;
      background: linear-gradient(to bottom, #9be15d, #00e3ae);
      opacity: 0.8;
      z-index: -1;
      transform: skewY(370deg) translate(-50%, -50%);
    }
  }
`;


export const ProductList = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Megrim&display=swap');

  .cards-container {
    width: 90rem;
    margin: 0 auto;
    margin-top: 6rem;

  }

  .card {
    background: white;
    box-shadow: 0 2rem 6rem 1rem rgba(0, 0, 0, 0.15);
    margin-bottom: 1rem;
    transform: skewX(-20deg);
    display: flex;
    transition: all 0.5s;
  }

  .card__emoji {
    font-size: 5.0rem;
    line-height: 0.4;
    padding: 2.9rem 6rem 0.1rem 1.5rem;
    letter-spacing: -4rem;
    transform: skewX(20deg);

  }

  .card__title-box {
    background: linear-gradient(to bottom, #9be15d, #00e3ae);
    margin-right: auto;
    display: flex;
    align-items: center;
    padding: 0 3rem;
  }

  .card__title {
    font-family: 'Megrim', sans-serif;
    color: white;
    font-size: 2.60rem;
    transform: skewX(20deg);
  }

  .card__details {
    display: flex;
  }

  .card__detail-box {
    align-self: stretch;
    border-right: 1px solid #ddd;
    display: flex;
    align-items: center;
  }

  .card__detail-box:last-child {
    border: none;
  }

  .card__detail {
    font-weight: 300;
    font-size: 1.8rem;
    transform: skewX(20deg);
    padding: 1.75rem;
  }

  .card__detail--organic {
    font-weight: 550;
    text-transform: uppercase;
    font-size: 1.9rem;
    background-image: linear-gradient(to right, #9be15d, #00e3ae);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .card__detail--price {
    font-weight: 550;
    font-size: 1.6rem;
  }

  .card__link:link,
  .card__link:visited {
    flex: 0 0 auto;
    background-color: #79e17b;
    color: white;
    font-size: 1.6rem;
    font-weight: 550;
    text-transform: uppercase;
    text-decoration: none;
    padding: 2.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .card__link:hover,
  .card__link:active {
    background-color: #9be15d;
  }

  .card__link span {
    transform: skewX(20deg);
  }

  .card:hover {
    transform: skewX(-20deg) scale(1.08);
    box-shadow: 0 3rem 8rem 2rem rgba(0, 0, 0, 0.15);
  }

  .emoji-left {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .emoji-right {
    font-size: 2rem;
    margin-left: 1rem;
    margin-top: -0.8rem;
  }

    @media only screen and (max-width: 400px) {

      html {
        font-size: 19.5%;
        box-sizing: border-box;
        width: 20%;
      }
    }

    @media only screen and (max-width: 768px) {

      html {
        font-size: 19.5%;
        box-sizing: border-box;
        width: 10%;
      }
    }

    @media only screen and (max-width: 845px) {

      html {
        font-size: 19.5%;
        box-sizing: border-box;
        width: 10%;
      }
    }
`;
