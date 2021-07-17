import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "./actionTypes";

const discoverAction = (type, sort, genre, page) => async (dispatch) => {
  // Request
  dispatch({
    type: actionTypes.SEND_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${APP_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`
    );
    // Sending data
    dispatch({
      type: actionTypes.DISCOVER,
      payload: data,
    });
  } catch (error) {
    // Catching Error
    dispatch({
      type: actionTypes.REQUEST_FAILURE,
      payload: error.message,
    });
  }
};

export default discoverAction;
