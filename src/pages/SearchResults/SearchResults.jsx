import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "../../Components/Grid/Grid";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import "./SearchResults.scss";
import ListColumn from "../../Components/ListColumn/ListColumn";

const SearchResults = () => {
  const { isLoading, result, totalPage, totalResult, queryValue } = useSelector(
    (state) => state.searchResults
  );
  const { page } = useSelector((state) => state.pageReducer);

  const [movieList, setMovieList] = useState([]);
  const [tvShowList, setTvShowList] = useState([]);

  // Filtering movie data's
  const filtereMovie = result?.filter((data) => {
    if (data.media_type === "movie") {
      return data;
    }
  });

  // Filtering tv  data's
  const filtereTv = result?.filter((data) => {
    if (data.media_type === "tv") {
      return data;
    }
  });

  useEffect(() => {
    document.title = `Search Result - ${queryValue || ""}`;
  }, [queryValue]);

  useEffect(() => {
    setMovieList(filtereMovie);
    setTvShowList(filtereTv);
  }, [result]);

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
          {result.length === 0 && <h1>No Result</h1>}
          <Grid result={result} isLoading={isLoading} />
          <ListColumn result={result} isLoading={isLoading} />
          <CustomPagination noOfPages={totalPage} />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
