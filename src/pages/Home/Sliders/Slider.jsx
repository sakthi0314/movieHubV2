import React, { useEffect } from "react";
import DropDown from "../../../Components/Dropdown/Downdown";
import SingleSlide from "../../../Components/SingleSlide/SingleSlide";
import classes from "./Slider.module.scss";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Lazy,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useDispatch, useSelector } from "react-redux";
import PopularAction from "../../../store/actions/PopularAction";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

const Slider = ({ title, types, defaultType }) => {
  const { popular } = useSelector((state) => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PopularAction(defaultType));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.slider}>
      <div className={classes["slider__container"]}>
        <div className={classes["slider__header"]}>
          <h1>{title}</h1>
          <DropDown options={types} defaultType={defaultType} />
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          lazy={true}
          // Responsive breakpoints
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className={classes["slider__content"]}
        >
          {popular &&
            popular.map((el) => (
              <SwiperSlide key={el.id}>
                <SingleSlide
                  id={el.id}
                  title={el.name}
                  date={el.first_air_date || el.relesed_date}
                  poster={el.poster_path}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
