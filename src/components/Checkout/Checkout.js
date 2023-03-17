import React, { useState } from 'react';
import './Checkout.css';

const KeepMountedModal = (props) => {
  const { handleClose } = props;

  const [cardNo, setCardNo] = useState(0);
  // const [cvvNo, setCVVNo] = useState(0);
  // const [expiryDate, setExpriyDate] = useState(0);
  // const [password, setPassword] = useState(0);

  return (
      <>
          <div className={'modalMainContainer'} onClick={handleClose} />
          <div className={'modal'}>
              <div className={'modalHeader'}>
                  <h2 className={'heading'}>Payment </h2>
              </div>
              <div className="modalBody">
                  <form>
                      <h4>Card Number</h4>
                      <input type="number" value={cardNo} onChange={e => setCardNo(e.target.value)} />
                  </form>
              </div>
          </div>
      </>
  );
};

export default KeepMountedModal;
