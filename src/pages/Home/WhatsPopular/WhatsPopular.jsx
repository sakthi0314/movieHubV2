import React, { useEffect, useState } from "react";
import RowItems from "../../../Components/RowItems/RowItems";
import "./slider.scss";
import { useDispatch, useSelector } from "react-redux";
import PopularAction from "../../../store/actions/PopularAction";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const WhatsPopular = () => {
  const { popular } = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("popular");

  // Tab Functionalities
  const slideOne = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((sibling) =>
      sibling.classList.remove("active")
    );
    e.target.parentNode.classList.add("active");
    setSelect("popular");
  };

  const slideTwo = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((sibling) =>
      sibling.classList.remove("active")
    );
    e.target.parentNode.classList.add("active");
    setSelect("now_playing");
  };

  const slideThree = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((sibling) =>
      sibling.classList.remove("active")
    );
    e.target.parentNode.classList.add("active");
    setSelect("top_rated");
  };

  useEffect(() => {
    dispatch(PopularAction(select));
    // eslint-disable-next-line
  }, [select]);

  return (
    <>
      <div className="slider">
        <div className="slider__container">
          <div className="slider__header">
            <h1>What's Popular</h1>

            <div className="slider__tab">
              <ul className="slider__tab--list">
                <li className="slider__tab--item active" onClick={slideOne}>
                  <span className="popular">Popular</span>
                </li>

                <li className="slider__tab--item">
                  <span className="now_playing" onClick={slideTwo}>
                    Now Playing
                  </span>
                </li>

                <li className="slider__tab--item">
                  <span className="top_rated" onClick={slideThree}>
                    Top Rated
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="slider__content"
          >
            {popular &&
              popular.map((el) => (
                <SwiperSlide key={el.id} className="slider__slide">
                  <RowItems
                    id={el.id}
                    title={el.title || el.orginal_name}
                    date={el.release_date}
                    poster={el.poster_path}
                    media_type={"movie"}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WhatsPopular;
