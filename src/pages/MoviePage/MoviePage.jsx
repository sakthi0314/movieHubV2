import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGenresAction from "../../store/actions/getGenresAction";
import sortingData from "../../utilities/sortingData";
import { BiChevronRight, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Chip, Slider } from "@material-ui/core";
import getLanguagesAction from "../../store/actions/getLanguagesAction";
import filterLanguageAction from "../../store/actions/filterLangages";
import discoverAction from "../../store/actions/discoverAction";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import ListColumn from "../../Components/ListColumn/ListColumn";
import Grid from "../../Components/Grid/Grid";
import noResult from "../../assets/noResult.svg";
import "./MoviePage.scss";

const MoviePage = () => {
  const { genres } = useSelector((state) => state.genre);
  const { languages } = useSelector((state) => state.language);
  const { isLoading, result, totalPage } = useSelector(
    (state) => state.discover
  );
  const [genre, setGenre] = useState(28);
  const [sortIsOpen, setSortIsOpen] = useState(true);
  const [fliterIsOpen, setFilterIsOpen] = useState(false);
  const [votage, setvotage] = useState([0, 10]);
  const [sortDropDownIsOpen, setSortDropDownIsOpen] = useState(false);
  const [sortDropDownSeleted, setDropDownSelected] =
    useState("popularity.desc");
  const [languageSelect, setLanguageSelect] = useState("English");
  const [languageCode, setLanguageCode] = useState("en");
  const [runTime, setRunTime] = useState([0, 360]);
  const [languageDropDownIsOpen, setLanguageDropDownIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [isFiltered, setIsFilter] = useState(false);
  const { page } = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();

  // Hide & Show Sortig DropDown
  const handleSortOpen = () => {
    setSortIsOpen(!sortIsOpen);
  };

  // Hide & Show Filter DropDown
  const handleFilterOpen = () => {
    setFilterIsOpen(!fliterIsOpen);
  };

  // Getting Votage Value
  const handleSlide = (event, newValue) => {
    setvotage(newValue);
    setIsFilter(true);
  };

  // Geting Runtime Value
  const handleRunTimeSlide = (event, newValue) => {
    setRunTime(newValue);
    setIsFilter(true);
  };

  // Hide & Show SortList DropDown
  const handleSortList = () => {
    setSortDropDownIsOpen(!sortDropDownIsOpen);
  };

  // Hide & Show  Languages
  const handleLanguage = () => {
    setLanguageDropDownIsOpen(!languageDropDownIsOpen);
  };

  // Filtering  Languages
  const filterLanguage = (e) => {
    setFilterValue(e.target.value);
    dispatch(filterLanguageAction(filterValue, languages));
    setIsFilter(true);
  };

  const handleFilterSort = () => {
    dispatch(
      discoverAction(
        "movie",
        languageCode,
        sortDropDownSeleted,
        page,
        votage,
        genre,
        runTime
      )
    );

    window.scroll(0, 0);
  };

  useEffect(() => {
    dispatch(getLanguagesAction());
    dispatch(getGenresAction("movie"));
    dispatch(
      discoverAction(
        "movie",
        languageCode,
        sortDropDownSeleted,
        page,
        votage,
        genre,
        runTime
      )
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(
      discoverAction(
        "movie",
        languageCode,
        sortDropDownSeleted,
        page,
        votage,
        genre,
        runTime
      )
    );
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="movie">
      <div className="movie__container">
        <div className="movie__filter">
          {/* Sort Dropdown */}
          <div className="movie__filter--sort">
            <div className="movie__filter--sortHeader" onClick={handleSortOpen}>
              <span>Sort</span>
              <span>{sortIsOpen ? <BiChevronDown /> : <BiChevronRight />}</span>
            </div>

            <div
              className="movie__filter--sortBody"
              style={{
                display: sortIsOpen ? "block" : "none",
              }}
            >
              <div className="movie__filter--dropdown">
                <p>Sort Results By</p>

                <div className="select-box">
                  <div
                    className={`option__container ${
                      sortDropDownIsOpen && "activeOption"
                    }`}
                  >
                    {sortingData.map((sort, key) => (
                      <div className="option" key={key}>
                        <input
                          type="radio"
                          name="sort"
                          id={sort}
                          className="radio"
                        />
                        <label
                          htmlFor={sort}
                          onClick={(e) => {
                            setDropDownSelected(e.target.textContent);
                            setSortDropDownIsOpen(false);
                            setIsFilter(true);
                          }}
                        >
                          {sort}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="selected" onClick={handleSortList}>
                    <span>{sortDropDownSeleted}</span>
                    <span>
                      {sortDropDownIsOpen ? <BiChevronUp /> : <BiChevronDown />}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filteing  */}
          <div className="movie__filter--filtering">
            <div
              className="movie__filter--filteringHeader"
              onClick={handleFilterOpen}
            >
              <span>Filters</span>
              <span>
                {fliterIsOpen ? <BiChevronDown /> : <BiChevronRight />}
              </span>
            </div>
            <div
              className="movie__filter--filteringBody"
              style={{
                display: fliterIsOpen ? "block" : "none",
              }}
            >
              {/* Genres */}
              <div className="movie__filter--filteringGenre">
                <p>Genres</p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {genres.length > 1 &&
                    genres.map((genre, key) => (
                      <Chip
                        key={key}
                        label={genre.name}
                        color="primary"
                        variant="outlined"
                        clickable
                        onClick={() => {
                          setGenre(genre.id);
                          setIsFilter(true);
                        }}
                        style={{
                          margin: "1em 1em 0 0",
                          padding: "0 .4em",
                          fontSize: "1rem",
                        }}
                      />
                    ))}
                </div>
              </div>

              {/* Laungaes */}
              <div className="movie__filter--filteringLanguage">
                <p>Language</p>

                <div className="select-box">
                  <div
                    className={`option__container ${
                      languageDropDownIsOpen && "activeOption"
                    }`}
                  >
                    <form className="search">
                      <input
                        type="text"
                        value={filterValue}
                        onChange={filterLanguage}
                        placeholder="Search..."
                      />
                    </form>
                    {languages.map((language, key) => (
                      <div className="option" key={key}>
                        <input
                          type="radio"
                          name="sort"
                          id={language.english_name}
                          className="radio"
                        />
                        <label
                          htmlFor={language.english_name}
                          onClick={(e) => {
                            setLanguageSelect(e.target.textContent);
                            setLanguageCode(language.iso_639_1);
                            setLanguageDropDownIsOpen(false);
                          }}
                        >
                          {language.english_name}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="selected" onClick={handleLanguage}>
                    <span>{languageSelect}</span>
                    <span>
                      {languageDropDownIsOpen ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Vote */}
              <div className="movie__filter--votage">
                <p>User Score</p>

                <Slider
                  value={votage}
                  onChange={handleSlide}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={10}
                />
              </div>

              {/* Runtime */}
              <div className="movie__filter--votage">
                <p>Runtime</p>

                <Slider
                  value={runTime}
                  onChange={handleRunTimeSlide}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={360}
                />
              </div>
            </div>
          </div>

          <div className="movie__filter--search">
            <button
              style={{
                opacity: isFiltered ? "1" : ".4",
              }}
              onClick={handleFilterSort}
            >
              Search
            </button>
          </div>
        </div>
        <div className="movie__results">
          <Grid result={result} isLoading={isLoading} />
          <ListColumn result={result} isLoading={isLoading} />
          {totalPage >= 2 && <CustomPagination noOfPages={totalPage} />}
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

export default MoviePage;
