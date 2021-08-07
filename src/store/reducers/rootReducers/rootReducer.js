import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "../authReducer";
import PopularReducer from "../PopularReducer";
import TrendingReducer from "../TrendingReducer";
import upcomingReducer from "../upcomingReducer";
import randomReducer from "../randomReducer";
import contactReducer from "../contactReducer";
import detailReducer from "../detailReducer";
import castReducer from "../castReducer";
import getReviewReducer from "../getReviewReducer";
import recommededReducer from "../recommededReducer";
import uploadProfileReducer from "../uploadProfileReducer";
import getProfileURLReducer from "../getProfileURLReducer";
import getTrailerReducer from "../getTrailarReducer";
import getTrailerKeyReducer from "../getTrailerKeyReducer";
import searchReducer from "../searchReducer";
import pageReducer from "../pageReducer";
import getPersonInfoReducer from "../getPersonInfoReducer";
import getPersonKnownReducer from "../getPersonKnownReducer";
import getPersonCreditReducer from "../getPersonCreditReducer";
import getBackdropReducer from "../getBackdropReducer";
import getGenresReducer from "../getGenresReducer";
import getDiscoverReducer from "../getDiscoverReducer";
import getLanguageReducer from "../getLanguagesReducer";
import getPopularPersonReducer from "../getPopularPersonReducer";
import getfavaritesReducer from "../getFavaritesReducer";
import addFavariteReducer from "../addFavariteReducer";
import getAllReviewReducer from "../getAllReviewReducer";
import getUserProfileReducer from "../getUserProfileReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  popular: PopularReducer,
  trend: TrendingReducer,
  upcoming: upcomingReducer,
  random: randomReducer,
  contact: contactReducer,
  detail: detailReducer,
  cast: castReducer,
  review: getReviewReducer,
  recommened: recommededReducer,
  uploadProfile: uploadProfileReducer,
  getProfile: getProfileURLReducer,
  getTrailer: getTrailerReducer,
  trailerKey: getTrailerKeyReducer,
  searchResults: searchReducer,
  pageReducer: pageReducer,
  personInfo: getPersonInfoReducer,
  personKnow: getPersonKnownReducer,
  personCredit: getPersonCreditReducer,
  backdrop: getBackdropReducer,
  genre: getGenresReducer,
  discover: getDiscoverReducer,
  language: getLanguageReducer,
  popularPerson: getPopularPersonReducer,
  addFavarite: addFavariteReducer,
  getfavarites: getfavaritesReducer,
  getAllReview: getAllReviewReducer,
  profileURL: getUserProfileReducer,
});

export default rootReducer;
