import axios from "../../Services/axios";
import actionTypes from "./actionTypes";
import { APP_KEY } from "../../Services/request";

const castAction = (id, type) => {
  return async (dispatch) => {
    // Requesting...
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `/${type}/${id}/credits?api_key=${APP_KEY}&language=en-US`
      );
      // Data from db...
      dispatch({
        type: actionTypes.CAST,
        payload: data,
      });
    } catch (error) {
      // Failure to fetch
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default castAction;
