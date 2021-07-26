import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Progress.scss";

const Progress = ({ percentage, value }) => {
  return (
    <div className="progress">
      <div className="progress__item">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: `rgb(245, 197, 24)`,
            textColor: `rgb(245, 197, 24)`,
            trailColor: "#111",
          })}
          value={percentage}
          maxValue={1}
          text={`${value * 100}%`}
        />
      </div>
      <div className="progress__info"></div>
    </div>
  );
};

export default Progress;
