import actionTypes from "../actions/actionTypes/index";

const initailState = {
  isSumited: false,
};

const contactReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_MESSAGE:
      return {
        ...state,
        isSumited: true,
      };

    default:
      return state;
  }
};

export default contactReducer;
