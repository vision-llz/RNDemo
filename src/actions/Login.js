export const login = (name) => {
  return (dispatch) => dispatch({ type: 'changeName', info: name });
};
