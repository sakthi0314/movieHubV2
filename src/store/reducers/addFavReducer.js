import actionTypes from "../actions/actionTypes";

const initailState = {
  isFavloading: false,
  isFavarited: false,
  error: "",
};

const addFavReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAV_REQUEST:
      return {
        ...state,
        isloading: true,
      };

    case actionTypes.ADD_FAV:
      return {
        ...state,
        isloading: false,
        isFavarited: true,
      };

    case actionTypes.ADD_FAV_REQUEST:
      return {
        ...state,
        isloading: false,
        error: action.paylaod,
      };

    default:
      return state;
  }
};

export default addFavReducer;
