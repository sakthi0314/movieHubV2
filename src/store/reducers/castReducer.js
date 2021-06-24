import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  casts: {},
  error: "",
};

const castReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.CAST:
      return {
        ...state,
        casts: action.payload,
        isLoading: false,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default castReducer;
