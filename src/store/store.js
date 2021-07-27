import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers/rootReducer";
import { getFirestore, reduxFirestore } from "redux-firestore";
import {
  getFirebase,
  createFirebaseInstance,
  isLoaded,
} from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import firebase from "firebase/app";
import fbConfig from "../config/fbConfig";
import { useSelector } from "react-redux";
import LoadingSpiner from "../Components/LoadingSpiner/LoadingSpiner";

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }))
    ),
    reduxFirestore(firebase, fbConfig)
  )
);

export const rrfProps = {
  firebase,
  config: {
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirebaseInstance,
};

// Preventing from freaking route
export const IsAuthLoad = ({ children }) => {
  const { auth } = useSelector((state) => state.firebase);
  if (!isLoaded(auth)) return <LoadingSpiner bg={"#111"} />;
  return children;
};

export default store;
