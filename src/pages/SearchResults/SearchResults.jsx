import React from "react";
import { useSelector } from "react-redux";
import Grid from "../../Components/Grid/Grid";
import "./SearchResults.scss";

const SearchResults = () => {
  const { isLoading, result } = useSelector((state) => state.searchResults);

  return (
    <div className="searchResult">
      <div className="searchResult__container">
        <div className="searchResult__columnOne">
          <div className="searchResult__columnOne--result">
            <div className="searchResult__columnOne--header">
              <h1>Search Result</h1>
            </div>
            <ul>
              <li>
                <span>Movie</span>
                <span>0</span>
              </li>
              <li>
                <span>Tv Shows</span>
                <span>0</span>
              </li>
              <li>
                <span>People</span>
                <span>0</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="searchResult__columnTwo">
          <Grid result={result} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
