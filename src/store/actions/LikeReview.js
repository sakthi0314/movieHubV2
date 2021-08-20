import actionTypes from "./actionTypes";

const addLikeAction =
  (movieId, userId) =>
  (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("reviews")
      .limit(1)
      .where("movieId", "==", movieId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          doc.ref.update({ likeCount: doc.data().likeCount + 1 });
        });
      })
      .then(() => {
        dispatch({ type: actionTypes.ADD_LIKE });
      });
  };

export { addLikeAction };
