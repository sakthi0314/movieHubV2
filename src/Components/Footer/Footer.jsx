import React, { useRef } from "react";
import Logo from "../../assets/Logo.svg";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import "./Footer.scss";
import { useDispatch, useSelector } from "react-redux";
import contactAction from "../../store/actions/contactAction";

const Footer = () => {
  const nameRef = useRef();
  const messageRef = useRef();
  const { auth, profile } = useSelector((state) => state.firebase);
  const { isSumited } = useSelector((state) => state.contact);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: nameRef.current.value,
      message: messageRef.current.value,
      uid: auth.uid,
    };

    dispatch(contactAction(contact));

    nameRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div
      className="footer"
      style={{
        display: auth.uid ? "block" : "none",
      }}
    >
      <div className="footer__container">
        <div className="footer__one">
          <div className="footer__logo">
            <img src={Logo} alt="logo" />
          </div>
          {/* Links */}
          <ul className="footer__links">
            <li>
              <a href="https://www.themoviedb.org/documentation/api">
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a href="https://www.themoviedb.org/documentation/api">
                <AiFillTwitterCircle />
              </a>
            </li>

            <li>
              <a href="https://www.themoviedb.org/documentation/api">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          {/* Power by */}
          <div className="footer__power">
            <h1>Powered By</h1>
            <p>
              This web application is depand on{" "}
              <a
                href="https://www.themoviedb.org/documentation/api"
                target="_blank"
                rel="noreferrer"
              >
                TMDB
              </a>{" "}
              api. All you seen movies, tv series and etc. This Data provided by
              TMDB database. This application is only for testing and learing
              stuffs NOT for commercial use.
            </p>

            <span>all right reserved by Moviehub copyright @2021</span>
          </div>
        </div>
        <div className="footer__two">
          <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <div className="footer__input">
              <input type="text" placeholder="Enter your name" ref={nameRef} />
            </div>

            <div className="footer__input">
              <textarea type="text" placeholder="Message" ref={messageRef} />
            </div>

            <div className="footer__btn">
              <button>Submit</button>
            </div>

            <div className="footer__success">
              {isSumited && <p>Thanks for contact us {profile.userName}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
