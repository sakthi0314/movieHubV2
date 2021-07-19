import actionTypes from "./actionTypes";

const filterLangages = (searchTerm, languages) => (dispatch) => {
  dispatch({
    type: actionTypes.FILTER_LANGUAGES,
    payload: {
      searchTerm,
      languages,
    },
  });
};

export default filterLangages;
