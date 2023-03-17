import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import './SubTotal.css';
import Checkout from '../../components/Checkout/Checkout';

const SubTotal = () => {
  const { cart } = useSelector((state) => state?.cartReducer);
  const { user } = useSelector((state) => state?.authReducer);

  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let sum = 0;
    cart.forEach((i) => {
      sum = sum + i.price;
    });
    setTotal(sum);
  }, [cart]);

  const checkout = () => {
    if (user) {
      handleOpen();
    } else {
      navigate('/SignIn');
    }
  };

  return (
      <div className="subtotal">
          <CurrencyFormat
              renderText={(value) => (
                  <>
                      <p>
                           Subtotal({cart.length} items): <strong>{value}</strong>
                      </p>
                      <small className="giftDiv">
                          <input className='giftInput' type="checkbox" /> This order contains a gift
                      </small>
                  </>
              )}
              decimalScale={2}
              value={total}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
          />

          <button className={!total && 'disable'} disabled={!total} onClick={checkout}>Proceed to Checkout</button>

          {open && <Checkout handleClose={handleClose}/>}
      </div>
  );
};

export default SubTotal;
