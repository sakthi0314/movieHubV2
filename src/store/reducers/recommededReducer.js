import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  recommededs: [],
  error: "",
};

const recommededReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.RECOMMMENDED:
      return {
        ...state,
        isLoading: false,
        recommededs: action.payload,
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

export default recommededReducer;
