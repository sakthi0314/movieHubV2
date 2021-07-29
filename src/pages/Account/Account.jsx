import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import "./Account.scss";
import { MdPhotoCamera } from "react-icons/md";
import updateProfileAction from "../../store/actions/updateProfileAction";
import useProfile from "../../Hooks/useProfile";
import LoadingSpinnder from "../../Components/LoadingSpiner/LoadingSpiner";
import getfavaritesAction from "../../store/actions/getfavariteAction";
import { request } from "../../Services/request";
import randomAction from "../../store/actions/randomAction";
import Progress from "../../Components/Progress/Progress";
import { Tab, Tabs } from "@material-ui/core";
import Grid from "../../Components/Grid/Grid";
import ListColumn from "../../Components/ListColumn/ListColumn";
import getAllReview from "../../store/actions/getAllReview";

const Account = () => {
  // Local State
  const [type, setType] = useState(0);

  // Globe State
  const { randomData } = useSelector((state) => state.random);
  const { isUploaded } = useSelector((state) => state.uploadProfile);
  const { auth, profile } = useSelector((state) => state.firebase);
  const { favarites } = useSelector((state) => state.getfavarites);
  const { percentage } = useSelector((state) => state.getAllReview);

  // Backdrop Image
  const cover = randomData?.backdrop_path
    ? `${request.IMG_URL}/${randomData?.backdrop_path}`
    : `${request.NO_IMG_LAND}`;

  // Dispatch
  const dispatch = useDispatch();

  // Custom Hook for getting Profile URL
  const url = useProfile();

  // calculating Favarite to Percentage
  let filterPercentage = favarites.length / 100;

  // calculating Favarite to Percentage
  let filterReviewPercentage = percentage / 100;

  // Profile Upload
  const uploadImage = (e) => {
    if (e.target.files[0].type === "image/jpeg") {
      dispatch(updateProfileAction(e.target.files[0]));
    }
  };

  // Filtering movie data's
  const filtereMovie = favarites?.filter((data) => {
    return data.media_type === "movie";
  });

  // Filtering tv data's
  const filtereTv = favarites?.filter((data) => {
    return data.media_type === "tv";
  });

  useEffect(() => {
    document.title = "Moviehub - Account";
    window.scroll(0, 0);
    dispatch(getfavaritesAction(auth.uid));
    dispatch(randomAction());
    dispatch(getAllReview(auth.uid));
    // eslint-disable-next-line
  }, []);

  // Routing guard
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <div
      style={{
        filter: isUploaded ? "blur(4px)" : "blur(0px)",
      }}
    >
      <header
        className="accountHeader"
        style={{
          backgroundImage: `linear-gradient(
          to top,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.3)
        ),url(${cover})`,
        }}
      >
        <div className="accountHeader__container">
          <div className="accountHeader__profile">
            <div className="accountHeader__profile--img">
              <img src={url} alt="profile" />
            </div>

            <input
              type="file"
              id="file"
              className="accountHeader__profile--file"
              onChange={uploadImage}
            />
            <label htmlFor="file" className="accountHeader__profile--label">
              <MdPhotoCamera />
            </label>
          </div>

          <div className="accountHeader__info">
            <div className="accountHeader__info--name">
              <h1>{profile.userName}</h1>
            </div>
            <div className="accountHeader__info--score">
              <div className="accountHeader__info--review">
                <Progress
                  type={"Total Reviews"}
                  value={filterReviewPercentage}
                  percentage={filterReviewPercentage}
                />
              </div>
              <div className="accountHeader__info--favarites">
                <Progress
                  type={"Favarited"}
                  value={filterPercentage}
                  percentage={filterPercentage}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="accountFav">
        <div className="accountFav__container">
          <div className="accountFav__header">
            <Tabs
              value={type}
              indicatorColor="primary"
              textColor="primary"
              onChange={(e, newValue) => {
                setType(newValue);
              }}
            >
              <Tab label="Movies" className="accountFav__header--tab" />
              <Tab label="Tv Shows" className="accountFav__header--tab" />
            </Tabs>
          </div>

          <div className="accountFav__content">
            <Grid result={type === 0 ? filtereMovie : filtereTv} />
            <ListColumn result={type === 0 ? filtereMovie : filtereTv} />
          </div>
        </div>
      </section>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: isUploaded ? "block" : "none",
          zIndex: "10000",
        }}
      >
        <LoadingSpinnder bg={"transparent"} />
      </div>
    </div>
  );
};

export default Account;
