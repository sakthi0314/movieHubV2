import actionTypes from "../actions/actionTypes";

const initialState = {
  discoverIsLoad: false,
  results: [],
  totalPage: null,
  totalResult: null,
  error: "",
};

const discoverReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        discoverIsLoad: true,
      };

    case actionTypes.DISCOVER:
      return {
        ...state,
        discoverIsLoad: false,
        results: payload.results,
        totalPage: payload.total_pages,
        totalResult: payload.total_results,
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

export default discoverReducer;
