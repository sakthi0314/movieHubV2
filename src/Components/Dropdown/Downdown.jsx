import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PopularAction from "../../store/actions/PopularAction";
import TrendingAction from "../../store/actions/TrendingAction";
import "./Downdown.scss";

const Downdown = ({ options, defaultType }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(defaultType);

  console.log(select);

  // Dom elements
  const DOM = {
    linkOne: document.querySelector(".one"),
    linkTwo: document.querySelector(".two"),
    linkThree: document.querySelector(".three"),
  };

  useEffect(() => {
    dispatch(PopularAction(select));
    dispatch(TrendingAction(select));
    // eslint-disable-next-line
  }, [select]);

  const linkClickOne = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((element) => {
      element.classList.remove("active");
      setSelect("one");
    });

    e.target.parentNode.classList.add("active");
  };

  const linkClickTwo = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((element) => {
      element.classList.remove("active");
      setSelect("Two");
    });

    e.target.parentNode.classList.add("active");
  };

  const linkClickThree = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((element) => {
      element.classList.remove("active");
      setSelect("three");
    });

    e.target.parentNode.classList.add("active");
  };

  return (
    <div className="dropdown">
      <ul className="dropdown__list ">
        <li className="active">
          <a onClick={linkClickOne} className="one">
            One
          </a>
        </li>
        <li>
          <a className="two" onClick={linkClickTwo}>
            two
          </a>
        </li>
        <li>
          <a onClick={linkClickThree} className="three">
            Three
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Downdown;
