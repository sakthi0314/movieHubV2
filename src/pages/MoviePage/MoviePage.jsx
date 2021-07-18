import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGenresAction from "../../store/actions/getGenresAction";
import sortingData from "../../utilities/sortingData";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { Chip, TextField, Slider } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./MoviePage.scss";
import getLanguagesAction from "../../store/actions/getLanguagesAction";

const MoviePage = () => {
  const { genres } = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState(28);
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const [fliterIsOpen, setFilterIsOpen] = useState(false);
  const { languages } = useSelector((state) => state.language);
  const [value, setValue] = React.useState([0, 100]);

  const handleSortOpen = () => {
    setSortIsOpen(!sortIsOpen);
  };

  const handleFilterOpen = () => {
    setFilterIsOpen(!fliterIsOpen);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    return value / 2;
  };

  useEffect(() => {
    dispatch(getLanguagesAction());
    dispatch(getGenresAction("movie"));
  }, []);

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

                <Autocomplete
                  id="Sort By"
                  options={sortingData}
                  getOptionLabel={(option) => option}
                  style={{ width: "100%", margin: "1em 0" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Sort By" variant="outlined" />
                  )}
                />
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
                    genres.map((genre) => (
                      <Chip
                        label={genre.name}
                        color="primary"
                        variant="outline"
                        clickable
                        onClick={() => setGenre(genre.id)}
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

                <Autocomplete
                  id="None Selected"
                  options={languages}
                  getOptionLabel={(option) => option.english_name}
                  style={{ width: "100%", margin: "1em 0" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="None Selected"
                      variant="outlined"
                    />
                  )}
                />
              </div>

              {/* Vote */}
              <div className="movie__filter--votage">
                <p>User Score</p>

                <Slider
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="movie__results"></div>
      </div>
    </div>
  );
};

export default MoviePage;
