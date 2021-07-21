import actionTypes from "../actions/actionTypes";

const initialState = {
  favaritesIsLoading: false,
  favarites: [],
  error: null,
};

const getfavaritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return { ...state, favaritesIsLoading: true };

    case actionTypes.GET_FAV:
      return {
        ...state,
        favaritesIsLoading: false,
        favarites: payload,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default getfavaritesReducer;
