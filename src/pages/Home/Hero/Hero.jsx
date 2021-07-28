import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { request } from "../../../Services/request";
import randomAction from "../../../store/actions/randomAction";
import searchAction from "../../../store/actions/searchAction";
import "./Hero.scss";

const Hero = () => {
  const { randomData } = useSelector((state) => state.random);
  const { page } = useSelector((state) => state.pageReducer);
  const searchRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  // Random Background Image
  const cover = randomData?.backdrop_path
    ? `${request.IMG_URL}/${randomData?.backdrop_path}`
    : `${request.NO_IMG_LAND}`;

  const handleSubmit = (e) => {
    // Prevent Default behaviour
    e.preventDefault();

    // Dispaching Action
    dispatch(
      searchAction(searchRef.current.value, page, searchRef.current.value)
    );

    // Redirecting to seach result page
    if (searchRef.current.value.length >= 1) {
      history.push("/search");
    }
  };

  useEffect(() => {
    dispatch(randomAction());
    // eslint-disable-next-line
  }, []);

  return (
    <header
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
to right,
rgba(0, 0, 0, 1),
rgba(0, 0, 0, 0.3)
),url("${cover}")`,
      }}
    >
      <div className="hero__container">
        <div className="hero__content">
          <h1>Welcome.</h1>
          <h4>
            Millions of movies, TV shows and people to discover. Explore now.
          </h4>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a movie, tv show, person..."
              ref={searchRef}
            />
            <button>Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Hero;
