import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "../actions/actionTypes";

const searchAction = (query, page, queryValue) => {
  return async (dispatch) => {
    // Requesting..
    dispatch({ type: actionTypes.SEARCH_REQUEST });

    try {
      const { data } = await axios.get(
        `/search/multi?api_key=${APP_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
      );

      // Get data
      dispatch({
        type: actionTypes.SEARCH_RESULTS,
        payload: {
          data,
          queryValue,
        },
      });
    } catch (error) {
      // Failed to get data
      dispatch({
        type: actionTypes.SEARCH_FAILED,
        payload: error.message,
      });
    }
  };
};

export default searchAction;
