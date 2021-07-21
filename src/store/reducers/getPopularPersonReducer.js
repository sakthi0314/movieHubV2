import actionTypes from "../actions/actionTypes";

const initialState = {
  personIsLoading: false,
  result: [],
  totalPage: null,
  totalResult: null,
  error: null,
};

const getPopularPersonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return { ...state, personIsLoading: true };

    case actionTypes.GET_POPULAR_PERSON:
      return {
        ...state,
        personIsLoading: false,
        result: payload.results,
        totalPage: payload.totalPages,
        totalResult: payload.totalResults,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        personIsLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default getPopularPersonReducer;
