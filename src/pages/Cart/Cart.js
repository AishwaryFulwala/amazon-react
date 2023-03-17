import React from 'react';
import { useSelector } from 'react-redux';

import './Cart.css';
import Product from '../../components/Product/Product';
import SubTotal from '../../components/SubTotal/SubTotal';

const Cart = () => {
  const { cart } = useSelector((state) => state?.cartReducer);
  const { user } = useSelector((state) => state?.authReducer);

  return (
      <div className="cart">
          <img
              className="adImg"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
          />

          <h3 className="nameTitle">Hello, {user || 'Guest'} </h3>
          <h2 className="cartTitle">Your shopping Cart</h2>

          <div className="cartProductDiv">
              <div className="cartProduct">
                 {cart.map((item, index) => (
                      <Product
                          key={index}
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                          remove={true}
                      />
                 ))}
              </div>

              <div className="cartTotal">
                  <SubTotal/>
              </div>
          </div>
      </div>
  );
};

export default Cart;
