import React from "react";
import RowItems from "../../Components/RowItems/RowItems";
import "./PersonKnownSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const PersonKnownSlider = ({ personKnowns }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      className="personKnownSlider__content"
    >
      {personKnowns.length >= 1 &&
        personKnowns.map((personKnown) => (
          <SwiperSlide
            className="personKnownSlider__slide"
            key={personKnown.id}
          >
            <RowItems
              id={personKnown.id}
              title={
                personKnown.title ||
                personKnown.orginal_name ||
                personKnown.name
              }
              date={personKnown.rpersonKnownease_date}
              poster={personKnown.poster_path}
              media_type={personKnown.media_type}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default PersonKnownSlider;
