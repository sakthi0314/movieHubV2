import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, Redirect } from "react-router-dom";
import { request } from "../../Services/request";
import DetailsAction from "../../store/actions/DetailsAction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CastSlider from "../../Components/CastSlider/CastSlider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import Rating from "react-rating";
import castAction from "../../store/actions/castAction";
import numeral from "numeral";
import Review from "../../Components/Review/Review";
import getReview from "../../store/actions/getReview";
import createReview from "../../store/actions/createReview";
import recommededAction from "../../store/actions/recommededAction";
import { Swiper, SwiperSlide } from "swiper/react";
import RowItems from "../../Components/RowItems/RowItems";
import addFavAction from "../../store/actions/addFavAction";
import getFavAction from "../../store/actions/getFavAction";
import getTrailerAction from "../../store/actions/getTrailerAction";
import TrailerModel from "../../Components/TrailerModel/TrailerModel";
import "./Details.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/swiper.scss";

const Details = () => {
  const { id, media_type } = useParams();
  const { detail } = useSelector((state) => state.detail);
  const { casts } = useSelector((state) => state.cast);
  const dispatch = useDispatch();
  const reviewRef = useRef();
  const { profile, auth } = useSelector((state) => state.firebase);
  const { reviews, isLoading } = useSelector((state) => state.review);
  const { recommededs } = useSelector((state) => state.recommened);
  const { isFavarited } = useSelector((state) => state.addFav);
  const { favaraites } = useSelector((state) => state.getFav);
  const { videoList, isTrailerLoading } = useSelector(
    (state) => state.getTrailer
  );
  const [modelIsOpen, setModelIsOpen] = useState(false);

  const cover = detail.backdrop_path
    ? `${request.IMG_URL}/${detail.backdrop_path}`
    : `${request.NO_IMG_LAND}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Review Details
    const review = {
      reviewContent: reviewRef.current.value,
      displayName: profile.userName,
      userId: auth.uid,
      timestamp: new Date(),
      movieId: id,
    };

    // Creating New Review
    dispatch(createReview(review));
    dispatch(getReview(id));
    reviewRef.current.value = "";
  };

  // Add Favarite
  const handleFav = () => {
    // MovieCreds for send favarite to db
    const movieCreds = {
      userId: auth.uid,
      movieID: id,
      imgURL: detail.poster_path,
      title: detail.title || detail.name || detail.original_title,
      movieType: media_type,
      isFav: isFavarited,
      createdTime: new Date(),
    };
    dispatch(addFavAction(movieCreds));
  };

  // PlayTrailer
  const handleTrailer = () => {
    setModelIsOpen(true);
    dispatch(getTrailerAction(media_type, id));
  };

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getFavAction(auth.uid));
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

  // Routing guard
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `linear-gradient(
  to right,
  rgba(0, 0, 0, 1),
  rgba(0, 0, 0, 0.3)
),url("${cover}")`,
        }}
      >
        <div className="header__container">
          <div className="header__image" id="image">
            <LazyLoadImage
              src={`${request.IMG_URL}/${detail.poster_path}`}
              effect="blur"
              alt={detail.id}
            />
          </div>

          <div className="header__scroll">
            <div className="header__scroll--mouse">
              <span />
            </div>
            <div className="header__scroll--arrow">
              <span />
            </div>
          </div>
        </div>
      </header>

      <div className="info">
        <div className="info__container">
          <div className="info__rowone">
            <div className="info__rowone--favo">
              <h1 className="info__rowone--title">
                {detail.title || detail.name || detail.original_title}
              </h1>

              <button
                className="info__rowone--fav"
                id="favarite"
                onClick={handleFav}
              >
                <span>
                  {isFavarited ? <BsBookmarksFill /> : <BsBookmarks />}
                </span>
              </button>
            </div>
            <i className="info__rowone--tagline"> {detail.tagline}</i>
            <h4>Overview</h4>
            <p className="info__rowone--desc">{detail.overview}</p>
            <div className="info__rowone--button">
              <button onClick={handleTrailer} className="btn-primary">
                <span>{<FaPlay />}</span>
                Watch Trailer
              </button>
              <button className="btn-secondary">Play Movie</button>
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
            <h1>Write Review</h1>
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
                uid={review.userId}
                profile={review?.profilePicture}
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

      <TrailerModel
        modelIsOpen={modelIsOpen}
        closeModel={() => setModelIsOpen(false)}
        videoList={videoList}
        isTrailerLoading={isTrailerLoading}
        setModelIsOpen={setModelIsOpen}
      />
    </>
  );
};

export default Details;
