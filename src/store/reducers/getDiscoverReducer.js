import actionTypes from "../actions/actionTypes";

const initialState = {
  discoverIsLoading: false,
  result: [],
  totalPage: null,
  totalResult: null,
  error: null,
};

const getDiscoverReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return { ...state, discoverIsLoading: true };

    case actionTypes.DISCOVER:
      console.log(payload);

      return {
        ...state,
        discoverIsLoading: false,
        result: payload.results,
        totalPage: payload.totalPages,
        totalResult: payload.totalResult,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        discoverIsLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default getDiscoverReducer;
