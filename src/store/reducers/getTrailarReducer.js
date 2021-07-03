import actionTypes from "../actions/actionTypes";

const initailState = {
  isTrailerLoading: false,
  videoList: [],
  error: "",
};

const getTrailerReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isTrailerLoading: true,
      };

    case actionTypes.GET_TRAILER:
      return {
        ...state,
        isTrailerLoading: false,
        videoList: action.payload,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        isTrailerLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getTrailerReducer;
