import actionTypes from "./actionTypes";

const loginAction = (creds) => {
  return (disptach, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        disptach({ type: actionTypes.LOGIN });
      })
      .catch((err) => {
        disptach({ type: actionTypes.LOGIN_ERROR, payload: err.message });
      });
  };
};

const logoutAction = () => {
  return (disptach, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        disptach({ type: actionTypes.LOGOUT });
      })
      .catch((err) => {
        disptach({ type: actionTypes.LOGOUT_ERROR, payload: err.message });
      });
  };
};

const signupAction = (creds) => {
  return (disptach, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          userName: creds.userName,
          initial: creds.userName[0],
        });
      })
      .then(() => {
        disptach({ type: actionTypes.SIGNUP });
      })
      .catch((err) => {
        disptach({ type: actionTypes.SIGNUP_ERROR, payload: err.message });
      });
  };
};

const forgetPasswordAction = (email) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({
          type: actionTypes.FORGET_PASSWORD,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.FORGET_PASSWORD_ERROR,
          payload: err.message,
        });
      });
  };
};

export { loginAction, logoutAction, signupAction, forgetPasswordAction };
