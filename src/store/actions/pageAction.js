import actionTypes from "./actionTypes";

const pageAction = (pageNumber) => {
  return {
    type: actionTypes.SET_PAGE,
    payload: pageNumber,
  };
};

export default pageAction;
