import actionTypes from "./actionTypes";

const removeFavariteAction =
  (movieID) =>
  (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // Send request
    disptach({ type: actionTypes.SEND_REQUEST });

    firestore
      .collection("favaraites")
      .where("movieId", "==", movieID)
      .get()
      .then((snapshots) => {
        const targetItem = [];

        snapshots.forEach((document) => {
          targetItem.push({ ...document.data() });
        });
      });
  };

export default removeFavariteAction;
