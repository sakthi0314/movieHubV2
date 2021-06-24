import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./CastSlider.scss";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { request } from "../../Services/request";

const CastSlider = ({ cast }) => {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={20} className="cast__content">
      {cast &&
        cast.map((c) => (
          <SwiperSlide draggable={true} key={c.id} className="cast__slide">
            <div className="cast__image">
              <LazyLoadImage
                src={`${
                  c.profile_path
                    ? `${request.IMG_URL}/${c.profile_path}`
                    : request.NO_IMG
                }`}
                effect="blur"
                alt={c.name}
              />
            </div>
            <p>{c.name}</p>
            <i>{c.character}</i>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CastSlider;
