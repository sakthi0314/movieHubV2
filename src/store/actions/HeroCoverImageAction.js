import actionTypes from "./actionTypes";
import axios from "../../Services/axios";
import { request } from "../../Services/request";

const HeroCoverImageAction = () => {
  return async (dispatch) => {
    // Send Request to db
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    try {
      // Fetch Data from db
      const { data } = await axios.get(request.fetchNetflixOrignals);
      console.log(data);

      dispatch({
        type: actionTypes.FETCH_COVER_IMG,
        payload: data.results,
      });
    } catch (error) {
      // Failure to Fetch Data
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default HeroCoverImageAction;
