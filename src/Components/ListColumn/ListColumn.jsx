import React from "react";
import { request } from "../../Services/request";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ListColumn.scss";
import trancate from "../../utilities/trancate";

const ListColumn = ({ result }) => {
  return (
    <>
      {result.length >= 1 &&
        result.map((res) => (
          <div className="listColumn">
            <Link
              to={`/${res.media_type}/${res.id}`}
              className="listColumn__img"
            >
              <LazyLoadImage
                src={
                  res.poster_path
                    ? `${request.IMG_URL}/${res.poster_path}`
                    : request.NO_IMG
                }
                effect="blur"
                alt={res.title}
              />
            </Link>
            <div className="listColumn__content">
              <h1>{res.title || res.name || res.original_title}</h1>
              <i>{res.release_date || res.first_air_date}</i>
              <p>{trancate(res.overview, 120)}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default ListColumn;
