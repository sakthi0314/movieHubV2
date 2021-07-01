const addFavAction = (movieId, uid) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    firestore.collection("favaraite").add({
      movieId,
      uid,
    });
  };
};

export default addFavAction;
