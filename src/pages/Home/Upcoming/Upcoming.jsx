import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import upcomingAction from "../../../store/actions/upcomingAction";
import RowItems from "../../../Components/RowItems/RowItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Upcoming.scss";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const Upcoming = () => {
  const dispatch = useDispatch();
  const { upcomings } = useSelector((state) => state.upcoming);

  console.log(upcomings);

  useEffect(() => {
    dispatch(upcomingAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="upcoming">
      <div className="upcoming__header">
        <h1>Upcoming Movies</h1>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        className="upcoming__content"
      >
        {upcomings &&
          upcomings.map((el) => (
            <SwiperSlide
              draggable={true}
              key={el.id}
              className="upcoming__slide"
            >
              <RowItems
                id={el.id}
                title={el.title || el.orginal_name}
                date={el.release_date}
                poster={el.backdrop_path}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Upcoming;
