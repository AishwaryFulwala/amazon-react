import { SET_USER } from '../actions/auth';

export const initState = {
  user: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.user
      };

    default:
      return state;
  }
};
