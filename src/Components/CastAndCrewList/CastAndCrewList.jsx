import React from "react";
import "../../pages/CastAndCrew/CastAndCrew.scss";
import { request } from "../../Services/request";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CastAndCrewList = ({ cast, type }) => {
  return (
    <>
      <ul>
        {cast &&
          cast.map((c) => (
            <li>
              <div className="cast__img">
                <LazyLoadImage
                  src={`${
                    c.profile_path
                      ? `${request.IMG_URL}/${c.profile_path}`
                      : request.NO_IMG
                  }`}
                  effect="blur"
                  alt={c.name}
                />
              </div>
              <div className="cast__info">
                <h1>{c.name}</h1>
                <p>{type === "cast" ? c.character : c.department}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CastAndCrewList;
