import actionTypes from "./actionTypes";

const createReview = (review) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // send request..
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    firestore
      .collection("reviews")
      .add({ ...review })
      .then(() => {
        dispatch({
          type: actionTypes.CREATE_REVIEW,
          payload: review,
        });
      })
      .catch((err) =>
        dispatch({ type: actionTypes.REQUEST_FAILURE, payload: err.message })
      );
  };
};

export default createReview;
