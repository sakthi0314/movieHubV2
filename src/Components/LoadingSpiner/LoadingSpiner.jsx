import React from "react";
import Loader from "react-spinners/PulseLoader";

const LoadingSpiner = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(0, 0, 0)",
      }}
    >
      <Loader color="rgb(245, 197, 24)" size={20} margin={2} loading={true} />
    </div>
  );
};

export default LoadingSpiner;
