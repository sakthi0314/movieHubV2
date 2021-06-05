import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const LoadingSpiner = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "rgb(0, 0, 0)",
      }}
    >
      <BounceLoader color="rgb(245, 197, 24)" size={60} loading={true} />
    </div>
  );
};

export default LoadingSpiner;
