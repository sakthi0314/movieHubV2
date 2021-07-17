import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGenresAction from "../../store/actions/getGenresAction";
import sortingData from "../../utilities/sortingData";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import "./MoviePage.scss";

const MoviePage = () => {
  const { genres } = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState(28);
  const [sortIsOpen, setSortIsOpen] = useState(false);

  const handleSortOpen = () => {
    setSortIsOpen(!sortIsOpen);
  };

  useEffect(() => {
    dispatch(getGenresAction("movie"));
  }, []);

  return (
    <div className="movie">
      <div className="movie__container">
        <div className="movie__filter">
          <div className="movie__filter--sort">
            {/* Sort Dropdown */}
            {/* Genes */}
            {/* Date from to */}
            {/* Run time */}
            {/*  */}
          </div>
        </div>
        <div className="movie__results"></div>
      </div>
    </div>
  );
};

export default MoviePage;
