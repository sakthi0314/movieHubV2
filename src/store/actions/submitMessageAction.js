import actionTypes from "./actionTypes";

const submitMessageAction = (creds) => {
  return (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("contacts")
      .add({
        name: creds.name,
        message: creds.message,
      })
      .then(() => {
        disptach({
          type: actionTypes.SUBMIT_MESSAGE,
        });
      });
  };
};

export default submitMessageAction;
