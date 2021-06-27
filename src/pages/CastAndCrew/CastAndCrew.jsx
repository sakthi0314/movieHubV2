import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { request } from "../../Services/request";
import castAction from "../../store/actions/castAction";
import DetailsAction from "../../store/actions/DetailsAction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CastAndCrew.scss";
import { IoArrowBack } from "react-icons/io5";
import CastAndCrewList from "../../Components/CastAndCrewList/CastAndCrewList";

const CastAndCrew = () => {
  const { casts } = useSelector((state) => state.cast);
  const { detail } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id, media_type } = useParams();
  const history = useHistory();
  const { auth } = useSelector((state) => state.firebase);

  useEffect(() => {
    document.title = "Cast & Crew";
    window.scroll(0, 0);
    dispatch(DetailsAction(id, media_type));
    dispatch(castAction(id, media_type));
    // eslint-disable-next-line
  }, []);

  // Routing guard
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <header className="castHeader">
        <div className="castHeader__container">
          <div className="castHeader__movieImg">
            <LazyLoadImage
              src={`${
                detail.poster_path
                  ? `${request.IMG_URL}/${detail.poster_path}`
                  : request.NO_IMG
              }`}
              effect="blur"
              alt={detail.id}
            />
          </div>
          <div className="castHeader__info">
            <h1>{detail.title || detail.name}</h1>
            <p onClick={() => history.goBack()}>
              <IoArrowBack />
              <p>Back to main</p>
            </p>
          </div>
        </div>
      </header>

      <div className="castAndCrew">
        <div className="castAndCrew__container">
          <div className="castAndCrew__col--one">
            <h1>
              Cast <span>{casts.cast && casts.cast.length}</span>
            </h1>
            <CastAndCrewList cast={casts.cast} type="cast" />
          </div>

          <div className="castAndCrew__col--one" style={{ marginTop: "4rem" }}>
            <h1>
              Crew <span>{casts.crew && casts.crew.length}</span>
            </h1>
            <CastAndCrewList cast={casts.crew} type="crew" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CastAndCrew;
