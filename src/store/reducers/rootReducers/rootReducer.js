import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "../authReducer";
import heroCoverImageReducer from "../heroCoverImageReducer";
import PopularReducer from "../PopularReducer";
import TrendingReducer from "../TrendingReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  heroImages: heroCoverImageReducer,
  popular: PopularReducer,
  trend: TrendingReducer,
});

export default rootReducer;
