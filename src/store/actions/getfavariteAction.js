import actionTypes from "./actionTypes";

const getfavaritesAction =
  (uid) =>
  (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // Send request
    disptach({ type: actionTypes.SEND_REQUEST });

    firestore
      .collection("favaraites")
      .where("uid", "==", uid)
      .get()
      .then((snapshots) => {
        const favaraites = [];

        snapshots.forEach((document) => {
          favaraites.push({ ...document.data() });
        });

        disptach({
          type: actionTypes.GET_FAV,
          payload: favaraites,
        });
      })
      .catch((error) =>
        disptach({ type: actionTypes.REQUEST_FAILURE, payload: error.message })
      );
  };

export default getfavaritesAction;
