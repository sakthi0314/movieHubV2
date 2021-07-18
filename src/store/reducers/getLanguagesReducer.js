import actionTypes from "../actions/actionTypes";

const initialState = {
  languagesIsLoading: false,
  languages: [],
  error: null,
};

const getLanguageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return { ...state, languagesIsLoading: true };

    case actionTypes.GET_LANGUAGES:
      return {
        ...state,
        languagesIsLoading: false,
        languages: payload,
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

export default getLanguageReducer;
