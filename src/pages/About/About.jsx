import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiRedux } from "react-icons/si";
import { request } from "../../Services/request";
import randomAction from "../../store/actions/randomAction";
import "./About.scss";

const About = () => {
  // Globe State
  const { randomData } = useSelector((state) => state.random);

  // Dispatch
  const dispatch = useDispatch();

  // Backdrop Image
  const cover = randomData?.backdrop_path
    ? `${request.IMG_URL}/${randomData?.backdrop_path}`
    : `${request.NO_IMG_LAND}`;

  useEffect(() => {
    dispatch(randomAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="about">
      <header
        className="about__header"
        style={{
          backgroundImage: `linear-gradient(
            to top,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.3)
          ),url(${cover})`,
        }}
      ></header>

      <div className="about__container">
        <div className="about__content">
          <div className="about__content--title">
            <h1>About us</h1>
          </div>
          <div className="about__content--desc">
            <p>
              MovieHub is Entertainment based Application, It is only developed
              for testing purpose NOT for commercial use. It's all for fun and
              impoveing my Skills set. All Data render in all over the page was
              fetched from TMDB Database.
            </p>
          </div>
        </div>

        <div className="about__stack">
          <div className="about__content--title">
            <h1>Teach Stack</h1>
          </div>

          <ul className="about__stack--icons">
            <li>
              <FaReact />
            </li>
            <li>
              <SiFirebase />
            </li>
            <li>
              <SiRedux />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
