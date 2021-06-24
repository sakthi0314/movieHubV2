import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import castAction from "../../store/actions/castAction";
import "./CastAndCrew.scss";

const CastAndCrew = () => {
  const { casts } = useSelector((state) => state.cast);

  console.log(casts);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default CastAndCrew;
