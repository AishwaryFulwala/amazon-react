export const SET_USER = 'SET_USER';

export const setUser = (email) => {
  return {
    type: SET_USER,
    user: email
  };
};
