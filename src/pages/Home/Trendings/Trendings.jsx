import React, { useEffect, useState } from "react";
import RowItems from "../../../Components/RowItems/RowItems";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingAction from "../../../store/actions/TrendingAction";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useDispatch, useSelector } from "react-redux";
import "../WhatsPopular/slider.scss";

const Trendings = () => {
  const { trendings, isLoading } = useSelector((state) => state.trend);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("movie");

  // Tab Functionalities
  const slideOne = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((sibling) =>
      sibling.classList.remove("active")
    );
    e.target.parentNode.classList.add("active");
    setSelect("movies");
  };

  const slideTwo = (e) => {
    [...e.target.parentNode.parentNode.children].forEach((sibling) =>
      sibling.classList.remove("active")
    );
    e.target.parentNode.classList.add("active");
    setSelect("tv");
  };

  useEffect(() => {
    dispatch(TrendingAction(select));
    // eslint-disable-next-line
  }, [select]);

  return (
    <>
      {!isLoading && (
        <div className="slider" style={{ marginTop: "4rem" }}>
          <div className="slider__container">
            <div className="slider__header">
              <h1>Trendings</h1>

              <div className="slider__tab">
                <ul className="slider__tab--list">
                  <li className="slider__tab--item active" onClick={slideOne}>
                    <span className="popular">Movies</span>
                  </li>

                  <li className="slider__tab--item">
                    <span className="now_playing" onClick={slideTwo}>
                      Tv Series
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
              {trendings &&
                trendings.map((el) => (
                  <SwiperSlide
                    draggable={true}
                    key={el.id}
                    className="slider__slide"
                  >
                    <RowItems
                      id={el.id}
                      title={el.title || el.orginal_name || el.name}
                      date={el.release_date || el.first_air_date}
                      poster={el.poster_path}
                      media_type={el.media_type}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Trendings;
