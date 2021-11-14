// === action types
// function for the login form
export const UPDATE_CONNECT_FIELD = 'UPDATE_CONNECT_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOG_OUT = 'LOG_OUT';
// function for the register form
export const UPDATE_SIGNUP_FIELD = 'UPDATE_SIGNUP_FIELD';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const SAVE_USER_REGISTER = 'SAVE_USER_REGISTER';
// function for unsubscribe
export const DELETE_SUBMIT = 'DELETE_SUBMIT';

// === action creators
export const updateConnectField = (name, newValue) => ({
  type: UPDATE_CONNECT_FIELD,
  name: name,
  newValue: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveUserData = (token, nickname, isLogged) => ({
  type: SAVE_USER_DATA,
  token: token,
  nickname: nickname,
  logged: isLogged,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const updateSignUpField = (name, newValue) => ({
  type: UPDATE_SIGNUP_FIELD,
  name: name,
  newValue: newValue,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const saveUserRegister = (token, nickname, isSigned) => ({
  type: SAVE_USER_REGISTER,
  token: token,
  nickname: nickname,
  signed: isSigned,
});

export const deleteSubmit = () => ({
  type: DELETE_SUBMIT,
});
