import React from "react";
import ReactPlayer from "react-player/lazy";
import "./VideoPlayer.scss";

const VideoPlayer = ({ url }) => {
  return (
    <>
      <div className="videplayer__overylay" />
      <div className="videplayer">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${url}`}
          controls={true}
          volume={true}
          playing={true}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default VideoPlayer;
