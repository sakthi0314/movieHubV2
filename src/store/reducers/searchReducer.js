import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  result: [],
  totalPage: null,
  totalResult: null,
  error: "",
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.SEARCH_RESULTS:
      return {
        ...state,
        isLoading: false,
        result: payload.results,
        totalPage: payload.total_pages,
        totalResult: payload.total_results,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
