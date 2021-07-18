import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "./actionTypes";

const getLanguagesAction = () => async (dispatch) => {
  // Requsting..
  dispatch({
    type: actionTypes.SEND_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `/configuration/languages?api_key=${APP_KEY}`
    );
    // Sendng Reducer
    dispatch({
      type: actionTypes.GET_LANGUAGES,
      payload: data,
    });
  } catch (error) {
    // Failure
    dispatch({
      type: actionTypes.REQUEST_FAILURE,
      payload: error.message,
    });
  }
};

export default getLanguagesAction;
