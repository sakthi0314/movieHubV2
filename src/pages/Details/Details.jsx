import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { request } from "../../Services/request";
import DetailsAction from "../../store/actions/DetailsAction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaPlay } from "react-icons/fa";
import "./Details.scss";
import CastSlider from "../../Components/CastSlider/CastSlider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import castAction from "../../store/actions/castAction";
import numeral from "numeral";
const Details = () => {
  const { id, media_type } = useParams();
  const { detail } = useSelector((state) => state.detail);
  const { casts } = useSelector((state) => state.cast);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(DetailsAction(id, media_type));
    dispatch(castAction(id, media_type));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = `${
      (detail.name && detail.name) ||
      (detail.title && detail.title) ||
      (detail.original_title && detail.original_title)
    }`;
  }, [detail]);

  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `linear-gradient(
  to right,
  rgba(0, 0, 0, 1),
  rgba(0, 0, 0, 0.3)
),url("${request.IMG_URL}/${detail.backdrop_path}")`,
        }}
      >
        <div className="header__container">
          <div className="header__image">
            <LazyLoadImage
              src={`${request.IMG_URL}/${detail.poster_path}`}
              effect="blur"
              alt={detail.id}
            />
          </div>
        </div>
      </header>

      <div className="info">
        <div className="info__container">
          <div className="info__rowone">
            <h1 className="info__rowone--title">
              {detail.title || detail.name || detail.original_title}
            </h1>
            <i className="info__rowone--tagline"> {detail.tagline}</i>
            <h4>Overview</h4>
            <p className="info__rowone--desc">{detail.overview}</p>
            <div className="info__rowone--trailer">
              <button onClick={() => alert("Hello")}>
                <span>{<FaPlay />}</span>
                Watch Trailer
              </button>
            </div>
          </div>

          <div className="info__rowtwo">
            <div className="info__rowtwo--genre">
              <h1>Genres</h1>
              <ul>
                {detail.genres &&
                  detail.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>

              <ul className="info__rowtwo--detail">
                <div className="info__rowtwo--date">
                  <h1>Released Date</h1>
                  <p>{detail.release_date || detail.first_air_date}</p>
                </div>

                <div className="info__rowtwo--rating">
                  <h1>Vote Avenger</h1>
                  <Rating
                    initialRating={detail.vote_average / 2 || 4.3}
                    readonly
                    emptySymbol={<AiOutlineStar />}
                    fullSymbol={<AiFillStar />}
                  />
                </div>

                <div className="info__rowtwo--status">
                  <h1>Status</h1>
                  <p>{detail.status}</p>
                </div>

                <div className="info__rowtwo--status">
                  <h1>Original Language</h1>

                  {detail.spoken_languages &&
                    detail.spoken_languages.map((lan) => <p>{lan.name}</p>)}
                </div>

                <div className="info__rowtwo--status">
                  <h1>Budget</h1>

                  {detail.budget ? (
                    <p>$ {`${numeral(detail.budget).format("0,0")}`}</p>
                  ) : (
                    "Not mentioned"
                  )}
                </div>

                <div className="info__rowtwo--status">
                  <h1>Revenue</h1>

                  {detail.budget ? (
                    <p>$ {`${numeral(detail.revenue).format("0,0")}`}</p>
                  ) : (
                    "Not mentioned"
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cast">
        <div className="cast__container">
          <div className="cast__rowone">
            <h1>Top Billed Cast</h1>
            <CastSlider cast={casts.cast} />
          </div>

          <div className="cast__rowtwo">
            <h1>
              <Link to={`/cast/${media_type}/${id}`}>Full Cast & Crew</Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
