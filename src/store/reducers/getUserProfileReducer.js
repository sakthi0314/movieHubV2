import actionTypes from "../actions/actionTypes";

const initialState = {
  profileUrlLoading: false,
  url: "https://i1.wp.com/lzraic.lv/wp-content/uploads/2017/03/profile.jpg",
  profileUrlError: null,
};

const getUserProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REQ_USER_PROFILE:
      return { ...state, profileUrlLoading: true };

    case actionTypes.USER_PROFILE:
      return {
        ...state,
        profileUrlLoading: false,
        url: payload,
      };

    case actionTypes.FAILED_USER_PROFILE:
      return {
        ...state,
        profileUrlError: payload,
      };

    default:
      return state;
  }
};

export default getUserProfileReducer;
