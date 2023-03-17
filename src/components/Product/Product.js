import React from 'react';
import { useDispatch } from 'react-redux';

import './Product.css';
import { addToCart, removeFromCart } from '../../redux/actions/cart';

const Product = ({ id, title, image, price, rating, remove }) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(id, title, image, price, rating));
  };

  const onRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
      <div className="product">
          <div className="productTitle">
              <p>{title}</p>
              <p className="productPrice">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="productRating">
                  {Array(rating).fill('').map((_, i) => (
                      <p key={i}>🌟</p>
                  ))}
              </div>
          </div>
          <img src={image} alt="" />
          {remove
            ? <button className="productButton" onClick={onRemoveFromCart}>Remove from cart</button>
            : <button className="productButton" onClick={onAddToCart}>Add to Cart</button>
          }
      </div>
  );
};

export default Product;
