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


export const ProductDetail = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Megrim&display=swap');

  .product {
    width: 60rem;
    margin: 0 auto;
    margin-top: 4rem;
    background: white;
    box-shadow: 0 3rem 6rem 1rem rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .container {
    width: 95rem;
    margin: 0 auto 0 auto;
    margin-top: 3rem;
  }

  .product__organic {
    position: absolute;
    top: -4rem;
    right: -4rem;
    z-index: 1000;
    height: 11rem;
    width: 11rem;
    background-image: linear-gradient(to bottom, #9be15d, #00e3ae);
    border-radius: 50%;
    transform: rotate(15deg);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product__organic h5 {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.8rem;
    color: white;
  }

  .product__hero {
    position: relative;
    height: 22rem;
    overflow: hidden;
  }

  .product__hero::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to left bottom, #9be15d, #00e3ae);
    opacity: 0.5;
    z-index: 100;
  }

  .product__emoji {
    font-size: 15rem;
    position: absolute;
  }

  .product__emoji--1 {
    top: -4rem;
    left: -2rem;
    z-index: 10;
  }

  .product__emoji--2 {
    top: -6rem;
    left: 9rem;
  }

  .product__emoji--3 {
    top: -4rem;
    right: 15rem;
  }

  .product__emoji--4 {
    top: -5rem;
    right: 2rem;
    z-index: 10;
  }

  .product__emoji--5 {
    bottom: -9rem;
    left: 18rem;
  }

  .product__emoji--6 {
    bottom: -8rem;
    left: 5rem;
  }

  .product__emoji--7 {
    bottom: -12rem;
    right: 14rem;
  }

  .product__emoji--8 {
    bottom: -8rem;
    right: -2rem;
  }

  .product__emoji--9 {
    top: -7rem;
    left: 19rem;
  }

  .product__back:link,
  .product__back:visited {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    z-index: 1000;
    color: #555;
    background-color: white;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
    border-radius: 100rem;
    padding: 0.5rem 2rem;
    transition: all 0.3s;
    display: flex;
    align-items: center;

  }

  .product__back:hover,
  .product__back:active {
    background-color: #79e17b;
  }

  p {
    margin-top: 0.5rem;
  }

  .product__name {
    background: linear-gradient(to bottom, #9be15d, #00e3ae);
    padding: 1rem;
    font-family: 'Megrim', sans-serif;
    font-size: 4rem;
    color: white;
    text-align: center;
    word-spacing: 2px;
  }

  .product__details {
    background-color: #eee;
    padding: 4rem 6rem;
    font-size: 1.9rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;

  }

  .product__description {
    padding: 5rem 6rem;
    font-size: 1.6rem;
    line-height: 1.8;
  }

  .product__link:link,
  .product__link:visited {
    display: block;
    background-color: #79e17b;
    color: white;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem;
    text-align: center;
    transform: scale(1.07) skewX(-20deg);
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .product__link:hover,
  .product__link:active {
    background-color: #9be15d;
    transform: scale(1.1) skewX(-20deg);
  }

  .product__link span {
    transform: skewX(20deg);
  }

  .emoji-left {
    font-size: 2rem;
    margin-right: 1rem;
    margin-top: -0.5rem;

  }

  .emoji-right {
    font-size: 2rem;
    margin-left: 1rem;
  }

  .not-organic {
    display: none;
  }
`;

