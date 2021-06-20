import actionTypes from "./actionTypes";
import axios from "../../Services/axios";
import { request } from "../../Services/request";

const upcomingAction = () => {
  return async (dispatch) => {
    // Requesting to db
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    try {
      // Data from db
      const { data } = await axios.get(request.fetchUpcoming);
      dispatch({
        type: actionTypes.FETCH_UPCOMING,
        payload: data.results,
      });
    } catch (error) {
      // failure to fetch
      dispatch({
        type: actionTypes.SEND_REQUEST,
        payload: error.message,
      });
    }
  };
};

export default upcomingAction;
