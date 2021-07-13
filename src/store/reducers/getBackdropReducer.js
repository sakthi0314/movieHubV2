import actionTypes from "../actions/actionTypes";

const initialState = {
  backdropIsLoadind: false,
  backdrops: [],
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        backdropIsLoadind: true,
      };

    case actionTypes.GET_BACKDROP:
      return {
        ...state,
        backdropIsLoadind: false,
        backdrops: payload,
      };

    case actionTypes.REQUEST_FAILURE:
      return {
        ...state,
        backdropIsLoadind: false,
        error: payload,
      };

    default:
      return state;
  }
};
