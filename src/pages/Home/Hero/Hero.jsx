import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { request } from "../../../Services/request";
import HeroCoverImageAction from "../../../store/actions/HeroCoverImageAction";
import classes from "./Hero.module.scss";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Hero = () => {
  const { coverImage } = useSelector((state) => state.heroImages);
  const dispatch = useDispatch();

  console.log(coverImage);

  useEffect(() => {
    dispatch(HeroCoverImageAction());
    // eslint-disable-next-line
  }, []);

  //  for string slicing
  const trancate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
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
          <SwiperSlide className={classes["hero__container"]}>
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
              <h1>{el.name}</h1>
              <p>{trancate(el.overview, 180)}</p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Hero;

// ${request.IMG_URL}/${coverImage.backdrop_path}
// https://i.ytimg.com/vi/ufqyfkTua8g/maxresdefault.jpg
