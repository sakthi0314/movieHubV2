import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { request } from "../../Services/request";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Backdrop.scss";

// Import Swiper styles
import "swiper/swiper.scss";

const Backdrop = ({ backdrops }) => {
  return (
    <div className="backdrop">
      <div className="backdrop__container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="backdrop__content"
        >
          {backdrops.length >= 1 &&
            backdrops.map((backdrop, key) => (
              <SwiperSlide className="backdrop__slide" key={key}>
                <div className="backdrop__slide--img">
                  <LazyLoadImage
                    placeholderSrc={request.NO_IMG}
                    effect="blur"
                    alt={backdrop.aspect_ratio}
                    src={`${request.IMG_URL}/${backdrop.file_path}`}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Backdrop;
