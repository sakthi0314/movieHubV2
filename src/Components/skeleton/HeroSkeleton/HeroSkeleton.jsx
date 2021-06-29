import React from "react";
import SkeletonElement from "../../../Components/skeleton/SkeletonElement/SkeletonElement";
import ShimmerAnimate from "../ShimmerAnimate/ShimmerAnimate";

const HeroSkeleton = () => {
  return (
    <div
      className="heroSkeleton"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <SkeletonElement type="hero" />
      <ShimmerAnimate />
    </div>
  );
};

export default HeroSkeleton;
