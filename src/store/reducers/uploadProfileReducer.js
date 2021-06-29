import actionTypes from "../actions/actionTypes";

let initailState = {
  progress: 0,
  success: null,
  error: "",
};

const uploadProfileReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.PROGRESS_UPLOADING:
      return {
        ...state,
        progress: action.payload,
      };

    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        success: action.payload,
      };

    case actionTypes.UPLOAD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default uploadProfileReducer;
