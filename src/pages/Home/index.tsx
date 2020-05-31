import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { ProductList } from './styles';

interface Producty {
  _id: number,
  productName: string,
  image: string,
  from: string,
  nutrients: string,
  quantity: Number,
  price: Number,
  organic: boolean,
  description: string,
}

const Home: React.FC = () => {

  const [products, setProducts] = useState<Producty[]>(() => {
    const storagedProducts = localStorage.getItem(
      '@NodeFarm:products',
    );

    if (storagedProducts) {
      return JSON.parse(storagedProducts);
    }
    return [];
  });


  useEffect(() => {
    api.get(`/products/`).then(response => {
      setProducts(response.data)
    });
  }, [])


  return (
    <>
      <ProductList>
        {products.map(product => (
          <div className="cards-container" key={product._id}>
            <figure className="card">
              <span className="card__emoji" role="img" aria-label="card__emoji">
                {product.image}
              </span>
              <div className="card__title-box">
                <h2 className="card__title">{product.productName}</h2>
              </div>

              <div className="card__details">
                <div className="card__detail-box ">
                  <div className={"card__detail card__detail--organic"}>{!product.organic ? product.organic : 'Organic!'}</div>
                </div>
                <div className="card__detail-box">
                  <span
                    className="card__detail"
                    role="img"
                    aria-label="card__detail">
                    {product.quantity} {product.image} por 📦
                </span>
                </div>

                <div className="card__detail-box">
                  <span className="card__detail card__detail--price">
                    R$ {product.price}
                  </span>
                </div>
              </div>

              <Link className="card__link" to={`/products/${product._id}`}>
                <span>Detail</span>
                <span className="emoji-right" role="img" aria-label="emoji-right">
                  👉
          </span>
              </Link>
            </figure>
          </div>
        ))}
      </ProductList>
    </>
  );
};

export default Home;
