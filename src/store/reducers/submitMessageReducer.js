import actionTypes from "../actions/actionTypes";

const initailState = {
  isSumited: false,
};

const submitMessageReducer = (state = initailState, action) => {
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

export default submitMessageReducer;
