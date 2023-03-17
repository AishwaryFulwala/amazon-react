import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../actions/cart';

const initState = {
  cart: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case EMPTY_CART:
      return {
        cart: action.cart
      };

    case ADD_TO_CART:
      return {
        cart: [...state.cart, action.payload]
      };

    case REMOVE_FROM_CART:
      state.cart.splice(state.cart.findIndex((i) => action?.id === i.id), 1);
      return {
        cart: [...state.cart]
      };

    default:
      return state;
  }
};
