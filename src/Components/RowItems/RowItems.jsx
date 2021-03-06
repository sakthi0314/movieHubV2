import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";
import trancate from "../../utilities/trancate";
import classes from "./RowItems.module.scss";

const SingleSlide = ({ title, date, poster, id, media_type }) => {
  return (
    <Link to={`/${media_type}/${id}`} className={classes.RowItems}>
      <div className={classes["RowItems__img"]}>
        <LazyLoadImage
          placeholderSrc={request.NO_IMG}
          alt={title}
          effect="blur"
          src={poster ? `${request.IMG_URL}/${poster}` : request.NO_IMG}
        />
      </div>
      <div className={classes["RowItems__info"]}>
        <h4>{trancate(title, 18)}</h4>
        <p>{date}</p>
      </div>
    </Link>
  );
};

export default trackWindowScroll(SingleSlide);
