import actionTypes from "../actions/actionTypes";

const initialState = {
  personInfoIsLoading: false,
  person: {},
  error: null,
};

const getPersonInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PERSON_INFO_REQUEST:
      return {
        ...state,
        personInfoIsLoading: true,
      };

    case actionTypes.PERSON_INFO:
      return {
        ...state,
        personInfoIsLoading: false,
        person: payload,
      };

    case actionTypes.PERSON_INFO_FAILURE:
      return {
        ...state,
        personInfoIsLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default getPersonInfoReducer;
