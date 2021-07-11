import actionTypes from "../actions/actionTypes";

const initialState = {
  personCreditIsLoading: false,
  credits: [],
  error: "",
};

const getPersonCreditReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.PERSON_CREDIT_REQUEST:
      return {
        ...state,
        personCreditIsLoading: true,
      };

    case actionTypes.PERSON_CREDIT:
      return {
        ...state,
        personCreditIsLoading: false,
        credits: payload,
      };

    case actionTypes.PERSON_CREDIT_FAILURE:
      return {
        ...state,
        personCreditIsLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default getPersonCreditReducer;
