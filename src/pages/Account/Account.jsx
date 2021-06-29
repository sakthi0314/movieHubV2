import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { logoutAction } from "../../store/actions/authAction";
import "./Account.scss";
import { MdPhotoCamera } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import updateProfileAction from "../../store/actions/updateProfileAction";
import Avatar from "../../assets/avatar.png";
import getProfileAction from "../../store/actions/getProfileAction";

const Account = () => {
  const dispatch = useDispatch();
  const { auth, profile } = useSelector((state) => state.firebase);
  const { profilePicture } = useSelector((state) => state.getProfile);

  const handleSubmit = () => {
    dispatch(logoutAction());
    return <Redirect to="/login" />;
  };

  const uploadImage = (e) => {
    console.log(e.target.files[0]);

    if (e.target.files[0].type === "image/jpeg") {
      dispatch(updateProfileAction(e.target.files[0]));
    }
  };

  useEffect(() => {
    document.title = "Moviehub - Account";
    dispatch(getProfileAction());
    // eslint-disable-next-line
  }, []);

  // Routing guard
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="account">
      <div className="account__progressbar"></div>
      <div className="account__container">
        <div className="account__profile" id="profile">
          <img
            src={profilePicture || Avatar}
            alt="profile"
            className="account__profile--img"
          />
          <input
            type="file"
            id="file"
            className="account__profile--file"
            onChange={uploadImage}
          />
          <label
            htmlFor="file"
            className="account__profile--upload"
            id="upload"
          >
            {<MdPhotoCamera />}
          </label>
        </div>
        <div className="account__user">
          <input type="text" value={profile.userName} id="userInput" />
          <span>{<MdEdit />}</span>
        </div>

        <button onClick={handleSubmit}>Logut</button>
      </div>
    </div>
  );
};

export default Account;
