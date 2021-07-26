import actionTypes from "../actions/actionTypes";

const initialState = {
  addFavariteIsLoading: false,
  docID: null,
  error: null,
};

const addFavariteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REQ_TO_FAV:
      return { ...state, addFavariteIsLoading: true };

    case actionTypes.ADD_TO_FAV:
      return {
        ...state,
        addFavariteIsLoading: false,
        docID: payload,
      };

    case actionTypes.REQ_TO_REMOVE_FAV:
      return {
        ...state,
        addFavariteIsLoading: true,
      };

    case actionTypes.REMOVE_TO_FAV:
      return {
        ...state,
        docID: null,
        addFavariteIsLoading: false,
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

export default addFavariteReducer;
