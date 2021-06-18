import React, { useEffect } from "react";
import RowItems from "../../../Components/RowItems/RowItems";
import classes from "./slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useDispatch, useSelector } from "react-redux";
import PopularAction from "../../../store/actions/PopularAction";

const WhatsPopular = () => {
  const { popular } = useSelector((state) => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PopularAction("popular"));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.slider}>
      <div className={classes["slider__container"]}>
        <div className={classes["slider__header"]}>
          <h1>What's Popular</h1>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className={classes["slider__content"]}
        >
          {popular &&
            popular.map((el) => (
              <SwiperSlide
                draggable={true}
                key={el.id}
                className={classes["slider__slide"]}
              >
                <RowItems
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

export default WhatsPopular;
