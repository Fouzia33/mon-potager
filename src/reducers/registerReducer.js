import {
  UPDATE_SIGNUP_FIELD,
  SAVE_USER_REGISTER,
  LOG_OUT,
} from 'src/actions/auth';

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  region: '',
  signed: false,
  nickname: null,
  token: null,
  logged: false,
};

function registerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SIGNUP_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case SAVE_USER_REGISTER:
      return {
        ...state,
        signed: true,
        token: action.token,
        nickname: action.nickname,
      };

    case LOG_OUT:
      return {
        ...state,
        username: '',
        password: '',
        logged: false,
        nickname: null,
        token: null,
      };

    default:
      return state;
  }
}
export default registerReducer;
