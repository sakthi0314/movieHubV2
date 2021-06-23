import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsAction from "../../store/actions/DetailsAction";

const Details = () => {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  console.log(detail);

  useEffect(() => {
    dispatch(DetailsAction());
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rebeccapurple",
        display: "grid",
        placeItems: "center",
      }}
    >
      <h1>Hello {id}</h1>
    </div>
  );
};

export default Details;
