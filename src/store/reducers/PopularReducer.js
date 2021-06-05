import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  popular: [],
  error: "",
};
const PopularReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_POPULAR:
      return {
        ...state,
        isLoading: false,
        popular: action.payload,
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

export default PopularReducer;
