import actionTypes from "../actions/actionTypes";

const initailState = {
  isLoading: false,
  detail: {},
  error: "",
};
const detailReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
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

export default detailReducer;
