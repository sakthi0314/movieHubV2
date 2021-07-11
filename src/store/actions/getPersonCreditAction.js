import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "./actionTypes";

const getPersonCreditAction = (id, type) => {
  return async (dispatch) => {
    // Requesting....
    dispatch({
      type: actionTypes.PERSON_CREDIT_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `person/${id}/${type}?api_key=${APP_KEY}&language=en-US`
      );
      // Send data to Reducer...
      dispatch({
        type: actionTypes.PERSON_CREDIT,
        payload: data.cast,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PERSON_CREDIT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export default getPersonCreditAction;
