import React from "react";
import { useSelector } from "react-redux";
import DropDown from "../../../Components/Dropdown/Downdown";
import classes from "../WhatsPopular/slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import RownItems from "../../../Components/RowItems/RowItems";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const Trendings = ({ types, defaultType, title }) => {
  const { trendings } = useSelector((state) => state.trend);

  return (
    <div className={classes.slider}>
      <div className={classes["slider__container"]}>
        <div className={classes["slider__header"]}>
          <h1>{title}</h1>
          <DropDown options={types} defaultType={defaultType} />
        </div>

        {/* <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          className={classes["slider__content"]}
        >
          {trendings &&
            trendings.map((el, key) => (
              <SwiperSlide className={classes["slider__slide"]}>
                <RownItems
                  key={key}
                  id={el.id}
                  title={el.name || el.title}
                  date={el.first_air_date || el.release_date}
                  poster={el.poster_path}
                />
              </SwiperSlide>
            ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default Trendings;
