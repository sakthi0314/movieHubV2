import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { request } from "../../Services/request";
import classes from "./SingleSlide.module.scss";

const SingleSlide = ({ title, date, poster, id }) => {
  return (
    <Link to={`/${id}`} className={classes.singleSlide}>
      <div className={classes["singleSlide__img"]}>
        <LazyLoadImage
          alt={title}
          effect="blur"
          src={poster ? `${request.IMG_URL}/${poster}` : request.NO_IMG}
        />
      </div>
      <div className={classes["singleSlide__info"]}>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
    </Link>
  );
};

export default SingleSlide;
