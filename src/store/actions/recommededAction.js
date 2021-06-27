import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionType from "./actionTypes/";

const recommededAction = (id, type) => {
  return async (dispatch) => {
    // Requesting...
    dispatch({ type: actionType.SEND_REQUEST });

    try {
      const { data } = await axios.get(
        `/${type}/${id}/recommendations?api_key=${APP_KEY}&language=en-US&page=1`
      );

      // Data from db..
      dispatch({ type: actionType.RECOMMMENDED, payload: data.results });
    } catch (error) {
      // Failure to get data..
      dispatch({ type: actionType.REQUEST_FAILURE, payload: error.message });
    }
  };
};

export default recommededAction;
