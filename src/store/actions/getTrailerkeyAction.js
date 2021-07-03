import actionTypes from "./actionTypes";

const getTrailerKeyAction = (key) => {
  return {
    type: actionTypes.GET_TRAILER_KEY,
    payload: key,
  };
};

export default getTrailerKeyAction;
