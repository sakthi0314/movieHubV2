import actionTypes from "../actions/actionTypes";

const initalState = {
  getFavIsLoading: false,
  favaraites: [],
  error: "",
};

const getFavReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_FAV_REQUEST:
      return {
        ...state,
        getFavIsLoading: true,
      };

    case actionTypes.GET_FAV:
      return {
        ...state,
        getFavIsLoading: false,
        favaraites: action.payload,
      };

    case actionTypes.GET_FAV_REQUEST:
      return {
        ...state,
        getFavIsLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getFavReducer;
