export const EMPTY_CART = 'EMPTY_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
    cart: []
  };
};

export const addToCart = (id, title, image, price, rating) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      title,
      image,
      price,
      rating
    }
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  };
};
