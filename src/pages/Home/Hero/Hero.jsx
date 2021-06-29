import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../../Services/request";
import trancate from "../../../utilities/trancate";
import HeroCoverImageAction from "../../../store/actions/HeroCoverImageAction";
import classes from "./Hero.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

const Hero = () => {
  const { coverImage } = useSelector((state) => state.heroImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeroCoverImageAction());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className={classes.hero}
      >
        {coverImage &&
          coverImage.map((el) => (
            <SwiperSlide className={classes["hero__container"]} key={el.id}>
              <div
                className={classes["hero__cover"]}
                style={{
                  backgroundImage: ` linear-gradient(
                to right,
                rgba(245, 197, 24, 1),
                rgba(245, 197, 24, 0.3)
              ),url("${request.IMG_URL}/${el.backdrop_path}")`,
                }}
              ></div>
              <div className={classes["hero__content"]}>
                <h1>{el.title || el.original_name}</h1>
                <p>{trancate(el.overview, 180)}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Hero;
