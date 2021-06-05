import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrendingAction from "../../../store/actions/TrendingAction";
import DropDown from "../../../Components/Dropdown/Downdown";
import classes from "../Sliders/Slider.module.scss";

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
import SingleSlide from "../../../Components/SingleSlide/SingleSlide";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);

const Trendings = () => {
  const { trendings } = useSelector((state) => state.trend);

  return (
    <div className={classes.slider}>
      <div className={classes["slider__container"]}>
        <div className={classes["slider__header"]}>
          <h1>Trendings</h1>
          <DropDown options={["day", "week"]} defaultType={"week"} />
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
              slidesPerView: 6,
            },
          }}
          className={classes["slider__content"]}
        >
          {trendings &&
            trendings.map((el, key) => (
              <SwiperSlide>
                <SingleSlide
                  key={key}
                  id={el.id}
                  title={el.name || el.title}
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

export default Trendings;
