import actionTypes from "../actions/actionTypes";

const initialState = {
  genresIsLoading: false,
  genres: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return { ...state, genresIsLoading: true };

    case actionTypes.GET_GENRES:
      return {
        ...state,
        genresIsLoading: false,
        genres: payload,
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
