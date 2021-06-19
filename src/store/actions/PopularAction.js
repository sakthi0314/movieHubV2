import axios from "../../Services/axios";
import actionTypes from "./actionTypes";
import { APP_KEY } from "../../Services/request";

const PopularAction = (type) => {
  return async (dispatch) => {
    // Get Request to db
    dispatch({ type: actionTypes.SEND_REQUEST });

    try {
      // Get Data from db
      const { data } = await axios.get(
        `/movie/${type}?api_key=${APP_KEY}&language=en-US&page=1`
      );
      dispatch({
        type: actionTypes.FETCH_POPULAR,
        payload: data.results,
      });
    } catch (error) {
      //Failure to fetch
      dispatch({
        type: actionTypes.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default PopularAction;
