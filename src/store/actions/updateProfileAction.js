import actionTypes from "./actionTypes";

const updateProfileAction = (file) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    const storage = firebase.storage();

    const uploadTask = storage.ref(`profile/${file.name}`).put(file);

    uploadTask.on(
      "state_change",
      (snapshot) => {
        // Progress function
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        dispatch({ type: actionTypes.PROGRESS_UPLOADING, payload: percentage });
      },

      (err) => {
        //   Error function
        dispatch({ type: actionTypes.UPLOAD_ERROR, payload: err.message });
      },
      () => {
        // Completed function
        storage
          .ref("profile")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            // Get Current user
            const user = firebase.auth().currentUser;
            user
              .updateProfile({
                photoURL: url,
              })
              .then(() => {
                return firestore
                  .collection("users")
                  .doc(user.uid)
                  .update({ url })
                  .then(() => {
                    dispatch({
                      type: actionTypes.UPDATE_PROFILE,
                      payload: "Profile updated",
                    });
                  });
              });
          });
      }
    );
  };
};

export default updateProfileAction;
