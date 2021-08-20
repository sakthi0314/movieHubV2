import React, { useEffect, useState } from "react";
import moment from "moment";
import firebase from "../../config/fbConfig";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiTwotoneDislike,
  AiTwotoneLike,
} from "react-icons/ai";
import "react-lazy-load-image-component/src/effects/blur.css";
import Avatar from "../../assets/avatar.png";
import "./Review.scss";
import { useDispatch } from "react-redux";
import { addLikeAction } from "../../store/actions/LikeReview";
import { dislikeAction } from "../../store/actions/dislikeAction";
import { useSelector } from "react-redux";
import getReview from "../../store/actions/getReview";

const Review = ({
  user,
  review,
  timestamp,
  uid,
  movieId,
  likeCount,
  dislike,
  reviewItem,
}) => {
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.firebase);

  const getProfile = async () => {
    await firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .onSnapshot((snapshot) => {
        setProfile(snapshot.data()?.url);
      });
  };

  // Handle Like
  const handleAddLike = () => {
    dispatch(addLikeAction(movieId, auth.uid));
  };

  const handleDislike = () => {
    dispatch(dislikeAction(movieId, auth.uid));
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getReview(movieId));
  }, [reviewItem]);

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
          <div className="reviews__like">
            <button onClick={handleAddLike}>
              {likeCount < 1 ? <AiOutlineLike /> : <AiTwotoneLike />}
              <span>{likeCount}</span>
            </button>
            <button onClick={handleDislike}>
              {<AiOutlineDislike />}
              <span>{dislike}</span>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Review;
