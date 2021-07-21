import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "../actions/actionTypes";

const getPopularPerson = (page) => async (dispatch) => {
  // Requesting
  dispatch({ type: actionTypes.SEND_REQUEST });

  try {
    const { data } = await axios.get(
      `/person/popular?api_key=${APP_KEY}&language=en-US&page=${page}`
    );

    // Sending to reducer
    dispatch({
      type: actionTypes.GET_POPULAR_PERSON,
      payload: {
        results: data.results,
        totalPages: data.total_pages,
        totalResults: data.total_results,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REQUEST_FAILURE,
      payload: error.message,
    });
  }
};

export default getPopularPerson;
