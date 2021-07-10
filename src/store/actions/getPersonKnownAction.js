import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "./actionTypes";

const getPersonKnownAction = (id) => {
  return async (dispatch) => {
    // Requesting to db
    dispatch({
      type: actionTypes.PERSON_KNOWN_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `/person/${id}/combined_credits?api_key=${APP_KEY}&language=en-US`
      );

      // Sendind data to reducer
      dispatch({
        type: actionTypes.PERSON_KNOWN,
        payload: data.cast,
      });
    } catch (error) {
      // Failed to get
      dispatch({
        type: actionTypes.PERSON_KNOWN_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default getPersonKnownAction;
