import axios from "../../Services/axios";
import { request } from "../../Services/request";
import actionTypes from "./actionTypes";

const randomAction = () => {
  return async (dispatch) => {
    // Requesting to db
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    try {
      // Fetch Data from db
      const { data } = await axios.get(request.fetchNetflixOrignals);

      // Data from db
      dispatch({
        type: actionTypes.FETCH_RANDOM_NETFLIX_IMAGE,
        payload:
          data.results[Math.floor(Math.random() * data.results.length - 1)],
      });
    } catch (error) {
      // failure to fetch
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default randomAction;
