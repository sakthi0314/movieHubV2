import React, { useRef } from "react";
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
import { AiOutlineSend } from "react-icons/ai";
import Review from "../../Components/Review/Review";
import getReview from "../../store/actions/getReview";
import createReview from "../../store/actions/createReview";
import recommededAction from "../../store/actions/recommededAction";
import { Swiper, SwiperSlide } from "swiper/react";
import RowItems from "../../Components/RowItems/RowItems";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const Details = () => {
  const { id, media_type } = useParams();
  const { detail } = useSelector((state) => state.detail);
  const { casts } = useSelector((state) => state.cast);
  const dispatch = useDispatch();
  const reviewRef = useRef();
  const { profile, auth } = useSelector((state) => state.firebase);
  const { reviews, isLoading } = useSelector((state) => state.review);
  const { recommededs } = useSelector((state) => state.recommened);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      reviewContent: reviewRef.current.value,
      displayName: profile.userName,
      userId: auth.uid,
      timestamp: new Date(),
      movieId: id,
    };
    dispatch(createReview(review));

    dispatch(getReview(id));

    reviewRef.current.value = "";
  };

  useEffect(() => {
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = `${
      (detail.name && detail.name) ||
      (detail.title && detail.title) ||
      (detail.original_title && detail.original_title)
    }`;
    // eslint-disable-next-line
  }, [detail]);

  useEffect(() => {
    dispatch(castAction(id, media_type));
    dispatch(getReview(id));
    dispatch(recommededAction(id, media_type));
    dispatch(DetailsAction(id, media_type));
    // eslint-disable-next-line
  }, [id, media_type]);

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

          <div className="header__scroll">
            <div className="header__scroll--mouse">
              <span></span>
            </div>
            <div className="header__scroll--arrow">
              <span></span>
            </div>
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

                <div className="info__rowtwo--lang">
                  <h1>Original Language</h1>
                  <ul>
                    {detail.spoken_languages &&
                      detail.spoken_languages.map((lan, id) => (
                        <p key={id}>{lan.name}</p>
                      ))}
                  </ul>
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

      <div className="review">
        <div className="review__container">
          <div className="review__header">
            <h1>Review</h1>
          </div>

          <div className="review__form">
            <form
              onSubmit={handleSubmit}
              style={{
                opacity: isLoading && ".4",
              }}
            >
              <div className="review__form--input">
                <input
                  type="text"
                  ref={reviewRef}
                  placeholder="Leave your favorable review..."
                />
              </div>

              <div className="review__form--button">
                <button>{<AiOutlineSend />}</button>
              </div>
            </form>
          </div>

          <ul className="review__list">
            {reviews.map((review, id) => (
              <Review
                key={id}
                profile="data:image/jpeg;base64,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"
                user={review.displayName}
                review={review.reviewContent}
                timestamp={review.timestamp}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="recommeded">
        <div className="recommeded__container">
          {recommededs.length >= 1 && (
            <div className="recommeded__header">
              <h1>Recommeded</h1>
            </div>
          )}

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="recommeded__content"
          >
            {recommededs &&
              recommededs.map((recommeded) => (
                <SwiperSlide
                  draggable={true}
                  key={recommeded.id}
                  onClick={() => {
                    document.documentElement.scroll(0, 0);
                  }}
                  className="recommeded__slide"
                >
                  <RowItems
                    id={recommeded.id}
                    title={recommeded.title || recommeded.orginal_name}
                    date={recommeded.release_date}
                    poster={recommeded.backdrop_path}
                    media_type={"movie"}
                    isLoading={isLoading}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Details;
