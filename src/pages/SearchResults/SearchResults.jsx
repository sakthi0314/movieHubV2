import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "../../Components/Grid/Grid";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import ListColumn from "../../Components/ListColumn/ListColumn";
import noResult from "../../assets/noResult.svg";
import { Redirect } from "react-router-dom";
import "./SearchResults.scss";

const SearchResults = () => {
  //  Local State
  const [movieList, setMovieList] = useState([]);
  const [tvShowList, setTvShowList] = useState([]);

  // Globe State
  const { isLoading, result, totalPage, totalResult, queryValue } = useSelector(
    (state) => state.searchResults
  );
  const { page } = useSelector((state) => state.pageReducer);

  // Filtering movie data's
  const filtereMovie = result?.filter((data) => {
    return data.media_type === "movie";
  });

  // Filtering tv  data's
  const filtereTv = result?.filter((data) => {
    return data.media_type === "tv";
  });

  useEffect(() => {
    document.title = `Search Result - ${queryValue}`;
    // eslint-disable-next-line
  }, [queryValue, page]);

  useEffect(() => {
    setMovieList(filtereMovie);
    setTvShowList(filtereTv);
    // eslint-disable-next-line
  }, [result]);

  // Route Guard
  if (result.length <= 0) {
    return <Redirect to="/" />;
  }

  return (
    <div className="searchResult">
      <div className="searchResult__container">
        <div className="searchResult__columnOne">
          <div className="searchResult__columnOne--result">
            <div className="searchResult__columnOne--header">
              <h1>Search Results "{totalResult || 0}"</h1>
            </div>
            <ul>
              <li>
                <span>Movie</span>
                <span>{movieList.length}</span>
              </li>
              <li>
                <span>Tv Shows</span>
                <span>{tvShowList.length}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="searchResult__columnTwo">
          <Grid result={result} isLoading={isLoading} />
          <ListColumn result={result} isLoading={isLoading} />
          {totalPage > 1 && <CustomPagination noOfPages={totalPage} />}
          {result.length === 0 && (
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <img
                style={{ marginTop: ".4em" }}
                src={noResult}
                alt="no result found"
              />
              <h1>No Result Found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
