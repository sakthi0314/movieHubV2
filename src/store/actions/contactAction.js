import actionTypes from "../actions/actionTypes/index";

const contactAction = (contact) => {
  return (disptach, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("contacts")
      .add({
        name: contact.name,
        message: contact.message,
      })
      .then(() => disptach({ type: actionTypes.SUBMIT_MESSAGE }))
      .catch((err) => console.log(err.message));
  };
};

export default contactAction;
