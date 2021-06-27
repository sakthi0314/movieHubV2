import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  reviews: [],
  error: "",
};

const getReviewReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
        isLoading: false,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default getReviewReducer;
