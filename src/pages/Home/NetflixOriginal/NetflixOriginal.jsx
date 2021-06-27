import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NetflixLogo from "../../../assets/NetflixLogo.png";
import HeroCoverImageAction from "../../../store/actions/HeroCoverImageAction";
import { Swiper, SwiperSlide } from "swiper/react";
import NetflixTrailer from "../../../Components/NetflixTrailer/NetflixTrailer";
import "./NetflixOriginal.scss";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import randomAction from "../../../store/actions/randomAction";
import { request } from "../../../Services/request";

const NetflixOriginal = () => {
  const { coverImage } = useSelector((state) => state.heroImages);
  const { randomData } = useSelector((state) => state.random);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeroCoverImageAction());
    dispatch(randomAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="netflixOriginal"
      style={{
        backgroundImage: `linear-gradient(
          to right,
          rgba(245, 197, 24, 1),
          rgba(245, 197, 24, 0.3)
        ) ,url("${request.IMG_URL}${randomData?.backdrop_path}")`,
      }}
    >
      <div className="netflixOriginal__container">
        <div className="netflixOriginal__header">
          <div className="netflixOriginal__header--logo">
            <img src={NetflixLogo} alt="NetflixLogo" />
          </div>
        </div>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="netflixOriginal__content"
        >
          {coverImage &&
            coverImage?.map((el) => (
              <SwiperSlide
                draggable={true}
                key={el.id}
                className="netflixOriginal__slide"
              >
                <NetflixTrailer
                  key={el.id}
                  id={el.id}
                  title={el.name || el.title || el.original_name}
                  image={el.backdrop_path}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NetflixOriginal;
