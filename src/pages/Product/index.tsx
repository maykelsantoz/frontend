import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useRouteMatch } from 'react-router-dom';

import { ProductDetail } from '../../components/Product/styles';

interface RepositoryParams {
  _id: string;
}

interface Attributy {
  productName: string,
  image: string,
  from: string,
  nutrients: string,
  quantity: number,
  price: number,
  organic: boolean,
  description: string,
}

const Product: React.FC = () => {
  //const [attributes, setAttributes] = useState<Attributy[]>([]);
  const [attributes, setAttributes] = useState<Attributy | null>(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {

    api.get(`products/${params._id}`).then(response => {
      setAttributes(response.data)
    });

  }, [params._id])


  return (
    <>
      {attributes && (
        <ProductDetail>
          <div className="container" >
            <figure className="product" >

              {attributes.organic ? (<div className="product__organic">
                <h5>Organic!</h5>
              </div>) : (
                  <div className="not-organic" />)}

              <Link className="product__back" to={"/"}>
                <span className="emoji-left" role="img" aria-label="emoji-left">👈</span><p>Back</p>
              </Link>

              <div className="product__hero">
                <span className="product__emoji product__emoji--1">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--2">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--3">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--4">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--5">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--6">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--7">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--8">
                  {attributes.image}
                </span>
                <span className="product__emoji product__emoji--9">
                  {attributes.image}
                </span>
              </div>

              <h2 className="product__name">{attributes.productName}</h2>
              <div className="product__details">
                <p>
                  <span className="emoji-left" role="img" aria-label="emoji-left">🌍</span>From{' '}
                  {attributes.from}
                </p>
                <p>
                  <span className="emoji-left" role="img" aria-label="emoji-left">❤️</span>
                  {attributes.nutrients}
                </p>
                <p>
                  <span className="emoji-left" role="img" aria-label="emoji-left">📦</span>
                  {attributes.quantity}
                </p>
                <p>
                  <span className="emoji-left" role="img" aria-label="emoji-left">💳</span>R${' '}
                  {attributes.price}
                </p>
              </div>

              <Link to={'/'} className="product__link">
                <span className="emoji-left" role="img" aria-label="emoji-left">🛒</span>
                <span>Add to shopping cart (R${attributes.price})</span>
                <span className="emoji-right" role="img" aria-label="emoji-right">🛒</span>
              </Link>

              <p className="product__description">{attributes.description}</p>
            </figure>
          </div>
        </ProductDetail>
      )}
    </>
  );
};

export default Product;
