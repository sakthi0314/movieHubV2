import actionTypes from "./actionTypes";

const getFavAction = (uid) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    // Requesting...
    dispatch({ type: actionTypes.GET_FAV_REQUEST });

    await firestore
      .collection("favaraites")
      .where("userID", "==", uid)
      .get()
      .then((snapshot) => {
        const favaraites = [];
        snapshot.forEach((document) => {
          favaraites.push({ ...document.data() });
          // Get data...
          dispatch({ type: actionTypes.GET_FAV, payload: favaraites });
        });
      })
      .catch((err) =>
        // error to fetch data...
        dispatch({ type: actionTypes.GET_FAV_FAILURE, payload: err.message })
      );
  };
};

export default getFavAction;
