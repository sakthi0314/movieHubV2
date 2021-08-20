import actionTypes from "./actionTypes";

const dislikeAction =
  (movieId) =>
  (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("reviews")
      .limit(1)
      .where("movieId", "==", movieId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          doc.ref.update({ dislike: doc.data().dislike + 1 });
        });
      })
      .then(() => {
        dispatch({ type: actionTypes.DISLIKE });
      });
  };

export { dislikeAction };
