import React, { useEffect, useState } from "react";
import moment from "moment";
import firebase from "../../config/fbConfig";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Avatar from "../../assets/avatar.png";

import "./Review.scss";

const Review = ({ user, review, timestamp, uid }) => {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    await firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .onSnapshot((snapshot) => {
        setProfile(snapshot.data().url);
      });
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <li className="reviews">
        <div className="reviews__img">
          <LazyLoadImage src={profile || Avatar} effect="blur" />
        </div>
        <div className="reviews__info">
          <div className="reviews__header">
            <p>{user}</p>
            <span>( {moment(timestamp.toDate()).calendar()} )</span>
          </div>
          <p>{review}</p>
        </div>
      </li>
    </>
  );
};

export default Review;
