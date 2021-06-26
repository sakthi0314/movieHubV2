import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "../authReducer";
import heroCoverImageReducer from "../heroCoverImageReducer";
import PopularReducer from "../PopularReducer";
import TrendingReducer from "../TrendingReducer";
import upcomingReducer from "../upcomingReducer";
import randomReducer from "../randomReducer";
import contactReducer from "../contactReducer";
import detailReducer from "../detailReducer";
import castReducer from "../castReducer";
import getReviewReducer from "../getReviewReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  heroImages: heroCoverImageReducer,
  popular: PopularReducer,
  trend: TrendingReducer,
  upcoming: upcomingReducer,
  random: randomReducer,
  contact: contactReducer,
  detail: detailReducer,
  cast: castReducer,
  review: getReviewReducer,
});

export default rootReducer;
