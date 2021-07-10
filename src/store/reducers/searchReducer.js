import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  queryValue: null,
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
        result: payload.data.results,
        totalPage: payload.data.total_pages,
        totalResult: payload.data.total_results,
        queryValue: payload.queryValue,
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
