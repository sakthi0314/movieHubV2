import actionTypes from "./actionTypes";

const addFavariteAction =
  (creds) =>
  (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // Send request
    disptach({ type: actionTypes.REQ_TO_FAV });

    firestore
      .collection("favaraites")
      .add({
        uid: creds.uid,
        id: creds.id,
        title: creds.title,
        media_type: creds.media_type,
        poster_path: creds.poster_path,
      })
      .then((doc) => {
        disptach({
          type: actionTypes.ADD_TO_FAV,
          payload: doc.id,
        });
      })
      .catch((error) =>
        disptach({ type: actionTypes.REQUEST_FAILURE, payload: error.message })
      );
  };

export default addFavariteAction;
