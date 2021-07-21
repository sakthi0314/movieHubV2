import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPopularPerson from "../../store/actions/getPopularPerson";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Personpage.scss";
import { request } from "../../Services/request";
import { Link } from "react-router-dom";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";

const PersonPage = () => {
  const dispatch = useDispatch();
  const { result, totalPage } = useSelector((state) => state.popularPerson);
  const { page } = useSelector((state) => state.pageReducer);

  useEffect(() => {
    dispatch(getPopularPerson(page));
    window.scroll(0, 0);
  }, [page]);

  return (
    <div className="popularPerson">
      <div className="popularPerson__container">
        <h1>Popular Person</h1>

        <ul className="popularPerson__grid">
          {result.map((res, key) => (
            <Link
              to={`/person/${res.id}`}
              key={key}
              className="popularPerson__grid--link"
            >
              <div className="popularPerson__grid--img">
                <LazyLoadImage
                  effect="blur"
                  placeholderSrc={request.NO_IMG}
                  src={
                    res.profile_path
                      ? `${request.IMG_URL}/${res.profile_path}`
                      : `${request.NO_IMG}}`
                  }
                />
              </div>

              <div className="popularPerson__grid--name">
                <h6>{res.name}</h6>
                <p>{res.known_for_department}</p>
              </div>
            </Link>
          ))}
        </ul>

        <CustomPagination noOfPages={totalPage} />
      </div>
    </div>
  );
};

export default trackWindowScroll(PersonPage);
