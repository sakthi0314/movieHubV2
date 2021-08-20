import actionTypes from "./actionTypes";

const getUserProfile =
  (uid) =>
  (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase();

    // req to db
    disptach({ type: actionTypes.REQ_USER_PROFILE });

    try {
      firestore
        .collection("users")
        .doc(uid)
        .onSnapshot((snap) => {
          disptach({
            type: actionTypes.USER_PROFILE,
            payload: snap.data()?.url,
          });
        });
    } catch (error) {
      disptach({
        type: actionTypes.FAILED_USER_PROFILE,
        payload: error.message,
      });
    }
  };

export default getUserProfile;
