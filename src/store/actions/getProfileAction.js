import actionTypes from "./actionTypes";

const getProfileAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    // Get Current user
    const user = firebase.auth().currentUser;

    // Get User URL
    firestore
      .collection("users")
      .doc(user.uid)
      .onSnapshot((snapshot) => {
        dispatch({
          type: actionTypes.GET_PROFILE_IMG,
          payload: snapshot.data().url,
        });
      });
  };
};

export default getProfileAction;
