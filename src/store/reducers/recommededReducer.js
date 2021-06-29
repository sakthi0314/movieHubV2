import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoadingRec: false,
  recommededs: [],
  error: "",
};

const recommededReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoadingRec: true,
      };

    case actionTypes.RECOMMMENDED:
      return {
        ...state,
        isLoadingRec: false,
        recommededs: action.payload,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoadingRec: false,
      };

    default:
      return state;
  }
};

export default recommededReducer;
