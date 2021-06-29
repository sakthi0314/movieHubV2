import React from "react";
import "./Skeleton.scss";

const SkeletonElement = ({ type }) => {
  const className = `skeleton ${type}`;

  return <div className={className}></div>;
};

export default SkeletonElement;
