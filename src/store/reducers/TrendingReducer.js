import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  trendings: [],
  error: "",
};
const TrendingReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_TRENDING:
      return {
        ...state,
        isLoading: false,
        trendings: action.payload,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default TrendingReducer;
