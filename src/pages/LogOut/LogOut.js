import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../../redux/actions/auth';
import { emptyCart } from '../../redux/actions/cart';

const LogOut = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const setData = () => {
    dispatch(setUser(''));
    dispatch(emptyCart());
    navigate('/');
  };

  useEffect(() => {
    setData();
  }, []);

  return (
        <div></div>
  );
};

export default LogOut;
