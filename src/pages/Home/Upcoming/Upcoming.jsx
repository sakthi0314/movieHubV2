import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import upcomingAction from "../../../store/actions/upcomingAction";
import RowItems from "../../../Components/RowItems/RowItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Upcoming.scss";

// Import Swiper styles
import "swiper/swiper.scss";

const Upcoming = () => {
  const dispatch = useDispatch();
  const { upcomings } = useSelector((state) => state.upcoming);

  useEffect(() => {
    dispatch(upcomingAction());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="upcoming">
        <div className="upcoming__header">
          {upcomings.length >= 1 && <h1>Upcoming Movies</h1>}
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="upcoming__content"
        >
          {upcomings.length >= 1 &&
            upcomings.map((el) => (
              <SwiperSlide key={el.id} className="upcoming__slide">
                <RowItems
                  id={el.id}
                  title={el.title || el.orginal_name}
                  date={el.release_date}
                  poster={el.backdrop_path}
                  media_type={"movie"}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Upcoming;
