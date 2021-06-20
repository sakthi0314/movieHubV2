import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "../authReducer";
import heroCoverImageReducer from "../heroCoverImageReducer";
import PopularReducer from "../PopularReducer";
import TrendingReducer from "../TrendingReducer";
import upcomingReducer from "../upcomingReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  heroImages: heroCoverImageReducer,
  popular: PopularReducer,
  trend: TrendingReducer,
  upcoming: upcomingReducer,
});

export default rootReducer;
