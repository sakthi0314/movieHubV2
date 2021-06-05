import axios from "../../Services/axios";
import actionTypes from "./actionTypes";
import { APP_KEY } from "../../Services/request";

const TrendingAction = (type, time) => {
  return async (dispatch) => {
    // Send request to db
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    try {
      // Get Data from db
      const { data } = await axios.get(
        `/trending/${type}/${time}?api_key=${APP_KEY}`
      );
      dispatch({
        type: actionTypes.FETCH_TRENDING,
        payload: data.results,
      });
    } catch (error) {
      // Failure to fetch data
      dispatch({ type: actionTypes.REQUEST_FAILURE, payload: error.message });
    }
  };
};

export default TrendingAction;
