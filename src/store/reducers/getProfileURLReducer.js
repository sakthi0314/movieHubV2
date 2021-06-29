import actionTypes from "../actions/actionTypes";

let initailState = {
  profilePicture: "",
};

const getProfileURLReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_IMG:
      return {
        ...state,
        profilePicture: action.payload,
      };

    default:
      return state;
  }
};

export default getProfileURLReducer;
