import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/Logo.svg";
import classes from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useProfile from "../../Hooks/useProfile";
import searchAction from "../../store/actions/searchAction";
import { request } from "../../Services/request";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [searchMenu, setSearchMenu] = useState(true);
  const [navbarHide, setNavbarHide] = useState("0");
  const searchRef = useRef();
  const { auth, profile } = useSelector((state) => state.firebase);
  const dispatch = useDispatch();
  const history = useHistory();
  const url = useProfile();
  const { page } = useSelector((state) => state.pageReducer);
  const { result } = useSelector((state) => state.searchResults);

  // Toggle menu
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  // Search Bar handler
  const searchBarHandler = () => {
    setSearchMenu(!searchMenu);
  };

  // recommending Searching..
  const handleRecommed = () => {
    dispatch(searchAction(searchRef.current.value, page));
  };

  const handleRecommedSearch = () => {
    setSearchMenu(true);
    history.push("/search");
  };

  // Scroll Down nav hide Animation
  let prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavbarHide("0");
    } else {
      setNavbarHide("-20%");
    }
    prevScrollpos = currentScrollPos;
  });

  // handle Search
  const handleSearch = (e) => {
    // Preventing from default behavear
    e.preventDefault();

    // Hide Recommed
    setSearchMenu(true);

    // Scroll up
    window.scroll(0, 0);

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
    // Dispaching Action
    dispatch(searchAction(searchRef.current.value, page));
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    searchRef.current.focus();
    // eslint-disable-next-line
  }, []);

  return (
    <header
      className={classes.header}
      style={{
        top: navbarHide,
        display: auth.uid ? "block" : "none",
      }}
    >
      <nav className={classes.navbar}>
        <div className={classes["navbar__container"]}>
          <Link to="/" className={classes["navbar__logo"]}>
            <LazyLoadImage effect="blur" src={Logo} alt="Logo" />
          </Link>

          <div className={classes["navbar__menu"]}>
            <button onClick={toggleMenuHandler}>
              {toggleMenu ? <FiMenu /> : <IoClose />}
            </button>
          </div>

          <ul
            className={classes["navbar__list"]}
            style={{
              left: toggleMenu && "-100%",
            }}
            onClick={toggleMenuHandler}
          >
            <li>
              <NavLink
                className={classes["navbar__link"]}
                activeClassName={classes["navbar__active"]}
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["navbar__link"]}
                activeClassName={classes["navbar__active"]}
                to="/series"
              >
                Series
              </NavLink>
            </li>

            <li>
              <NavLink
                className={classes["navbar__link"]}
                activeClassName={classes["navbar__active"]}
                to="/people"
              >
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["navbar__link"]}
                activeClassName={classes["navbar__active"]}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>

          <ul className={classes["navbar__right"]}>
            <Link to="/account" className={classes["navbar__avatar"]}>
              <LazyLoadImage effect="blur" src={url} alt={profile.userName} />
            </Link>

            <li>
              <button
                className={classes["navbar__search"]}
                onClick={searchBarHandler}
              >
                <BiSearch />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <form
        className={classes["searchComponent"]}
        style={{
          display: searchMenu && "none",
        }}
        onSubmit={handleSearch}
      >
        <span>
          <BiSearch />
        </span>
        <input
          type="text"
          name="search"
          placeholder="Search for movies, Tv shows..."
          ref={searchRef}
          onChange={handleRecommed}
        />

        <span onClick={() => setSearchMenu(true)}>
          <IoClose />
        </span>
      </form>
      <ul
        className={classes["navbar__recommending"]}
        style={{
          display: searchMenu && "none",
        }}
      >
        {result.map((res, key) => (
          <Link
            key={key}
            onClick={handleRecommedSearch}
            to={`/${res.media_type}/${res.id}`}
            className={classes["navbar__recommending--item"]}
          >
            <div className={classes["navbar__recommending--itemImg"]}>
              <LazyLoadImage
                effect="blur"
                src={
                  res.poster_path
                    ? `${request.IMG_URL}/${res.poster_path}`
                    : `${request.NO_IMG}`
                }
                alt={res.title || res.name || res.original_title}
              />
            </div>
            <div className={classes["navbar__recommending--itemInfo"]}>
              <h6>{res.title || res.name || res.original_title}</h6>
              <p>{res.media_type}</p>
            </div>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
