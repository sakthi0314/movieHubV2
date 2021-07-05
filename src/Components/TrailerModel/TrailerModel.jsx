import { useState } from "react";
import reactDom from "react-dom";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import getTrailerKeyAction from "../../store/actions/getTrailerkeyAction";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./TrailerModel.scss";

const TrailerModel = ({
  closeModel,
  modelIsOpen,
  videoList,
  setModelIsOpen,
}) => {
  const [showPlayer, setPlayer] = useState(false);
  const { key } = useSelector((state) => state.trailerKey);
  const dispatch = useDispatch();

  if (!modelIsOpen) return null;

  const closeModelHandler = () => {
    setModelIsOpen(false);
    setPlayer(false);
  };

  return reactDom.createPortal(
    <>
      <div className="trailerModel__overlay" onClick={closeModelHandler} />
      {showPlayer ? (
        <VideoPlayer url={key} />
      ) : (
        <div className="trailerModel">
          <header className="trailerModel__header">
            <button onClick={closeModel}>
              <GrFormClose />
            </button>
            <h1>select video to play</h1>
          </header>

          <ul className="trailerModel__list">
            {videoList.length >= 1 &&
              videoList.map((video, index) => (
                <li
                  onClick={() => {
                    setPlayer(true);
                    dispatch(getTrailerKeyAction(video.key));
                  }}
                  key={video.id}
                >
                  {index + 1}. {video.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>,
    document.getElementById("selector")
  );
};

export default TrailerModel;
