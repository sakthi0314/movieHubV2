import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/Logo.svg";
import classes from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import getProfileAction from "../../store/actions/getProfileAction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [searchMenu, setSearchMenu] = useState(true);
  const [navbarHide, setNavbarHide] = useState("0");
  const searchRef = useRef();
  const dispatch = useDispatch();
  const { auth, profile } = useSelector((state) => state.firebase);
  const { profilePicture } = useSelector((state) => state.getProfile);

  // Toggle menu
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  // Search Bar handler
  const searchBarHandler = () => {
    setSearchMenu(!searchMenu);
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

  useEffect(() => {
    searchRef.current.focus();
    dispatch(getProfileAction());
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
            <img src={Logo} alt="Logo" />
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
                activeClassName="navbar__active"
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["navbar__link"]}
                activeClassName="navbar__active"
                to="/tv_shows"
              >
                Tv Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["navbar__link"]}
                activeClassName="navbar__active"
                to="/genres"
              >
                Genres
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["navbar__link"]}
                activeClassName="navbar__active"
                to="/people"
              >
                People
              </NavLink>
            </li>
          </ul>

          <ul className={classes["navbar__right"]}>
            <Link to="/account" className={classes["navbar__avatar"]}>
              <LazyLoadImage
                effect="blur"
                src={profilePicture}
                alt={profile.userName}
              />
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
      >
        <span>
          <BiSearch />
        </span>
        <input
          type="text"
          name="search"
          placeholder="Search for movies, Tv shows..."
          ref={searchRef}
        />
      </form>
    </header>
  );
};

export default Navbar;
