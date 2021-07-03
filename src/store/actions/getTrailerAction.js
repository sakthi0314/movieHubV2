import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "../actions/actionTypes";

const getTrailerAction = (type, id) => {
  return async (dispatch) => {
    // requesting...
    dispatch({ type: actionTypes.SEND_REQUEST });

    try {
      const { data } = await axios.get(
        `/${type}/${id}/videos?api_key=${APP_KEY}&language=en-US`
      );
      // get Data
      dispatch({ type: actionTypes.GET_TRAILER, payload: data.results });
    } catch (error) {
      //   Failure to fetch data
      dispatch({ type: actionTypes.REQUEST_FAILURE, payload: error.message });
    }
  };
};

export default getTrailerAction;
