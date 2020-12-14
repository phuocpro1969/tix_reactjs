const initialState = {
  infoUser: null,
  messError: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_LOGIN_SUCCESS": {
      return { ...state, infoUser: action.payload };
    }
    case "SAVE_USER_LOGOUT": {
      return { ...state, infoUser: action.payload };
    }
    case "SHOW_ERROR_MESS_BY_REG": {
      return { ...state, messError: action.payload };
    }
    case "RESET_ERR_MESS": {
      return { ...state, messError: action.payload };
    }
    default:
      return { ...state };
  }
};
export default UserReducer;
