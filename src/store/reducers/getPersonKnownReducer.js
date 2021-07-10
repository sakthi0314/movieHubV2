import actionTypes from "../actions/actionTypes";

const initialState = {
  personKnownIsLoading: false,
  personKnowns: [],
  error: null,
};

const getPersonKnownReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PERSON_KNOWN_REQUEST:
      return { ...state, personKnownIsLoading: true };

    case actionTypes.PERSON_KNOWN:
      return {
        ...state,
        personKnownIsLoading: false,
        personKnowns: payload,
      };

    case actionTypes.PERSON_KNOWN_FAILURE:
      return {
        ...state,
        personKnownIsLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default getPersonKnownReducer;
