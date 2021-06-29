import React from "react";
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const LandSlideSkeleton = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden", margin: "3rem 0" }}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        className="upcoming__content"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
          <SwiperSlide draggable={true} key={el.id} className="upcoming__slide">
            <SkeletonElement type="land" />
            {/* <ShimmerAnimate /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandSlideSkeleton;
