import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  upcomings: [],
  error: "",
};

const upcomingReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.FETCH_UPCOMING:
      return {
        ...state,
        isLoading: false,
        upcomings: action.payload,
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

export default upcomingReducer;
