import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import './SignIn.css';
import { setUser } from '../../redux/actions/auth';
import { signInUser, createUser } from '../../server/firebase';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setUserData = () => {
    dispatch(setUser(email));
  };

  const signIn = e => {
    e.preventDefault();
    setUserData();
    signInUser(email, password, () => navigate(-1));
  };

  const create = e => {
    e.preventDefault();
    setUserData();
    createUser(email, password, () => navigate(-1));
  };

  return (
        <div className='signIn'>
            <Link to='/' className={'amazonInText'}>
                <div className={'flexDirect'}>
                    <img
                        className="imgLogo"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    />
                    <span className={'imgText'}>.in</span>
                </div>
            </Link>

            <div className='loginDiv'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon&lsquo;s Conditions of Use and Privacy Notice.
                </p>
            </div>

            <div className={'createAC'}>
                <div className={'signUp'}>
                    <h5>New to Amazon?</h5>
                </div>
                <button className='createButton' onClick={create}>Create your Amazon Account</button>
            </div>
        </div>
  );
};

export default SignIn;
