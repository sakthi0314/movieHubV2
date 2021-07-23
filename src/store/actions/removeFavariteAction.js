import actionTypes from "./actionTypes";

const removeFavariteAction =
  (docID) =>
  (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // Send request
    disptach({ type: actionTypes.SEND_REQUEST });

    firestore
      .collection("favaraites")
      .doc(docID)
      .delete()
      .then(() => {
        disptach({
          type: actionTypes.REMOVE_TO_FAV,
          payload: docID,
        });
      })
      .catch((error) =>
        disptach({ type: actionTypes.REQUEST_FAILURE, payload: error.message })
      );
  };

export default removeFavariteAction;