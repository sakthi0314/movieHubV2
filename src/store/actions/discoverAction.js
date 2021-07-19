import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "./actionTypes";

const discoverAction = (creds) => async (dispatch) => {
  // Request
  dispatch({
    type: actionTypes.SEND_REQUEST,
  });

  try {
    const { data } = await axios.get(
      `/discover/movie?api_key=${APP_KEY}&language=${creds.language}&sort_by=${creds.sort}&include_adult=false&include_video=false&page=${creds.page}&vote_count.gte=${creds.votage[0]}&vote_count.lte=${creds.votage[1]}&with_genres=${creds.genre}`
    );

    // Sending data
    dispatch({
      type: actionTypes.DISCOVER,
      payload: {
        results: data.results,
        totalPages: data.total_pages,
        totalResult: data.total_results,
      },
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
