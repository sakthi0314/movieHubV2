import actionTypes from "./actionTypes";

const getAllReview = (uid) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // send request...
    dispatch({
      type: actionTypes.REQ_ALL_REVIEW,
    });

    // Get data from db...
    firestore
      .collection("reviews")
      .where("userId", "==", uid)
      .get()
      .then((snapshots) => {
        const reviews = [];

        snapshots.forEach((document) => {
          reviews.push({ ...document.data() });
        });

        // send to Reducer
        dispatch({
          type: actionTypes.GET_ALL_REVIEW,
          payload: reviews.length,
        });
      })
      // Failure to get...
      .catch((err) =>
        dispatch({ type: actionTypes.ERROR_ALL_REVIEW, payload: err.message })
      );
  };
};

export default getAllReview;
