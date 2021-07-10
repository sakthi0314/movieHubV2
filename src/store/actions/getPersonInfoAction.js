import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "../actions/actionTypes";

const getPersonInfoAction = (id) => {
  return async (dispatch) => {
    // Get Request to db
    dispatch({
      type: actionTypes.PERSON_INFO_REQUEST,
    });
    try {
      const { data } = await axios.get(
        `/person/${id}?api_key=${APP_KEY}&language=en-US`
      );
      // Send data to reducer
      dispatch({
        type: actionTypes.PERSON_INFO,
        payload: data,
      });
    } catch (error) {
      // Failure to get
      dispatch({
        type: actionTypes.PERSON_INFO_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default getPersonInfoAction;
