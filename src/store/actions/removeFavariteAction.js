import actionTypes from "./actionTypes";

const removeFavariteAction =
  (id) =>
  async (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // Send request
    disptach({ type: actionTypes.REQ_TO_REMOVE_FAV });

    try {
      const snapshot = await firestore
        .collection("favaraites")
        .limit(1)
        .where("id", "==", id)
        .get();

      const doc = snapshot.docs[0];

      // Deleting
      doc.ref.delete();

      disptach({
        type: actionTypes.REMOVE_TO_FAV,
        payload: doc.id,
      });
    } catch (error) {
      disptach({ type: actionTypes.REQUEST_FAILURE, payload: error.message });
    }
  };

export default removeFavariteAction;
