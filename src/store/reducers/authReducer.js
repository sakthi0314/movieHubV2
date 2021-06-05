import actionTypes from "../actions/actionTypes";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        authError: null,
      };

    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authError: action.payload,
      };

    case actionTypes.LOGOUT:
      console.log("logout success");
      return {
        ...state,
        authError: null,
      };

    case actionTypes.LOGOUT_ERROR:
      console.log("logout failure");
      return {
        ...state,
        authError: action.payload,
      };

    case actionTypes.SIGNUP:
      console.log("Sign up success");
      return {
        ...state,
        authError: null,
      };

    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
