import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Logo from "../../Assets/Logo.svg";
import classes from "./Navbar.module.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [searchMenu, setSearchMenu] = useState(true);
  const [navbarHide, setNavbarHide] = useState("0");
  const searchRef = useRef();
  const { auth } = useSelector((state) => state.firebase);

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
          <NavLink to="/" className={classes["navbar__logo"]}>
            <img src={Logo} alt="Logo" />
          </NavLink>

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

            <li className={classes["account__link"]}>
              <NavLink
                to="/account"
                activeClassName="navbar__active"
                className={classes["navbar__username--link"]}
              >
                Account
              </NavLink>
            </li>
          </ul>

          <ul className={classes["navbar__right"]}>
            <li className={classes["navbar__username"]}>
              <NavLink
                to="/account"
                activeClassName="navbar__active"
                className={classes["navbar__username--link"]}
              >
                Account
              </NavLink>
            </li>
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
