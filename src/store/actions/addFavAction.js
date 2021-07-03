import actionTypes from "./actionTypes";

const addFavAction = (movieCreds) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    dispatch({ type: actionTypes.ADD_FAV_REQUEST });

    try {
      await firestore.collection("favaraites").add({
        userID: movieCreds.userId,
        movieID: movieCreds.movieID,
        movieImgURL: movieCreds.imgURL,
        movieTitle: movieCreds.title,
        movieType: movieCreds.movieType,
        isFav: movieCreds.isFav,
        createdTime: movieCreds.createdTime,
      });
      dispatch({ type: actionTypes.ADD_FAV });
    } catch (error) {
      dispatch({ type: actionTypes.ADD_FAV_FAILURE, payload: error.message });
    }
  };
};

export default addFavAction;
