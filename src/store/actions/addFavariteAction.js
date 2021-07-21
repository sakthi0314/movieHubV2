import actionTypes from "./actionTypes";

const addFavariteAction =
  (creds) =>
  (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // Send request
    disptach({ type: actionTypes.SEND_REQUEST });

    firestore
      .collection("favaraites")
      .add({
        uid: creds.uid,
        movieID: creds.movieID,
        title: creds.title,
        media_type: creds.media_type,
        poster: creds.poster,
      })
      .then(() =>
        disptach({
          type: actionTypes.ADD_TO_FAV,
        })
      )
      .catch((error) =>
        disptach({ type: actionTypes.REQUEST_FAILURE, payload: error.message })
      );
  };

export default addFavariteAction;
