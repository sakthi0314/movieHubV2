import actionTypes from "../actions/actionTypes";

let initailState = {
  progress: 0,
  isUploaded: false,
  success: null,
  error: "",
};

const uploadProfileReducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.PROGRESS_UPLOADING:
      return {
        ...state,
        progress: action.payload,
        isUploaded: true,
      };

    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        success: action.payload,
        isUploaded: false,
      };

    case actionTypes.UPLOAD_ERROR:
      return {
        ...state,
        error: action.payload,
        isUploaded: false,
      };
    default:
      return state;
  }
};

export default uploadProfileReducer;
