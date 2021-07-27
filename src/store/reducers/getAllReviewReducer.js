import actionTypes from "../actions/actionTypes";

const initialState = {
  allReviewIsLoading: false,
  percentage: 0,
  allReqError: null,
};

const getAllReviewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REQ_ALL_REVIEW:
      return { ...state, allReviewIsLoading: true };

    case actionTypes.GET_ALL_REVIEW:
      return {
        ...state,
        allReviewIsLoading: false,
        percentage: payload,
      };

    case actionTypes.ERROR_ALL_REVIEW:
      return {
        ...state,
        allReqError: payload,
      };

    default:
      return state;
  }
};

export default getAllReviewReducer;
