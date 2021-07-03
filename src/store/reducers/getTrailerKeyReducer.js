import actionTypes from "../actions/actionTypes";

const inistalState = {
  key: "",
};

const getTrailerKeyReducer = (state = inistalState, action) => {
  switch (action.type) {
    case actionTypes.GET_TRAILER_KEY:
      return {
        ...state,
        key: action.payload,
      };

    default:
      return state;
  }
};

export default getTrailerKeyReducer;
