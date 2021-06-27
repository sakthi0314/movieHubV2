import React from "react";
import moment from "moment";
import "./Review.scss";

const Review = ({ user, profile, review, timestamp }) => {
  return (
    <>
      <li className="reviews">
        <div className="reviews__img">
          <img src={profile} alt={user} />
        </div>
        <div className="reviews__info">
          <p>{user}</p>
          <i>{moment(timestamp.toDate()).calendar()}</i>
          <p>{review}</p>
        </div>
      </li>
    </>
  );
};

export default Review;
