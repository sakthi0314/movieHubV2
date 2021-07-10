import actionTypes from "../actions/actionTypes";

const initialState = {
  page: 1,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
