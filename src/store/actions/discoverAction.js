import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import actionTypes from "./actionTypes";

const discoverAction =
  (type, languageSelect, sortDropDownSeleted, page, votage, genre, runTime) =>
  async (dispatch) => {
    // Request
    dispatch({
      type: actionTypes.SEND_REQUEST,
    });

    try {
      const { data } = await axios.get(
        `/discover/${type}?api_key=${APP_KEY}&sort_by=${sortDropDownSeleted}&page=${page}&vote_count.gte=${votage[0]}&vote_count.lte=${votage[1]}&with_genres=${genre}&with_original_language=${languageSelect}&with_runtime.gte=${runTime[0]}&with_runtime.lte=${runTime[1]}`
      );

      // Sending data
      dispatch({
        type: actionTypes.DISCOVER,
        payload: {
          type,
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
