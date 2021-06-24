import actionType from "../actions/actionTypes";
import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";

const DetailsAction = (id, type) => {
  return async (dispatch) => {
    // Request tp db
    dispatch({
      type: actionType.SEND_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `/${type}/${id}?api_key=${APP_KEY}&language=en-US`
      );

      // Date from db
      dispatch({ type: actionType.GET_DETAIL, payload: data });
    } catch (error) {
      // Failure to fetch data
      dispatch({
        type: actionType.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default DetailsAction;
