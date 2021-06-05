import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  coverImages: [],
  error: "",
};

const heroCoverImageReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_COVER_IMG:
      return {
        ...state,
        isLoading: false,
        coverImage: action.payload,
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

export default heroCoverImageReducer;
