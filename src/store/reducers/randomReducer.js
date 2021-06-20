import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  randomData: {},
  error: "",
};

const randomReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_RANDOM_NETFLIX_IMAGE:
      return {
        ...state,
        isLoading: false,
        randomData: action.payload,
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

export default randomReducer;
