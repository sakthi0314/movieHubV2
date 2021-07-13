import { APP_KEY } from "../../Services/request";
import axios from "../../Services/axios";
import actionTypes from "./actionTypes";

const getbackdropAction = (id) => {
  return async (dispatch) => {
    //Request
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}&append_to_response=images`
      );
      // Sending Data..
      dispatch({
        type: actionTypes.GET_BACKDROP,
        payload: data.images.backdrops,
      });
    } catch (error) {
      // Catcting Error
      dispatch({ type: actionTypes.REQUEST_FAILURE, payload: error.message });
    }
  };
};

export default getbackdropAction;
