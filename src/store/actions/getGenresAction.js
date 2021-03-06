import actionTypes from "../actions/actionTypes";
import { APP_KEY } from "../../Services/request";
import axios from "../../Services/axios";

const getGenresAction = (type) => async (dispatch) => {
  // Requesting
  dispatch({
    type: actionTypes.SEND_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${APP_KEY}&language=en-US`
    );

    dispatch({
      type: actionTypes.GET_GENRES,
      payload: data.genres,
    });
  } catch (error) {
    //Catching error
    dispatch({
      type: actionTypes.REQUEST_FAILURE,
      payload: error.message,
    });
  }
};

export default getGenresAction;
