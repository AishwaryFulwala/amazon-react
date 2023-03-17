import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import store from './redux';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn/SignIn';
import LogOut from './pages/LogOut/LogOut';
import Header from './components/Header/Header';

function App () {
  const router = createBrowserRouter([
    {
      element: <Header />,
      children: [
        {
          path: 'Cart',
          element: <Cart />
        },
        {
          path: 'Home',
          element: <Home />
        },
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: 'LogOut',
      element: <LogOut />
    },
    {
      path: 'SignIn',
      element: <SignIn />
    }
  ]);

  return (
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
