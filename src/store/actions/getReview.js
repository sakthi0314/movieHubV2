import actionTypes from "./actionTypes";

const getReview = (movieId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // send request..
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    firestore
      .collection("reviews")
      .where("movieId", "==", movieId)
      .get()
      .then((snapshots) => {
        const reviews = [];

        snapshots.forEach((document) => {
          reviews.push({ ...document.data() });
        });

        dispatch({
          type: actionTypes.GET_REVIEW,
          payload: reviews,
        });
      })
      .catch((err) =>
        dispatch({ type: actionTypes.REQUEST_FAILURE, payload: err.message })
      );
  };
};

export default getReview;
