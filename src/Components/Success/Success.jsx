import React from "react";
import reactDom from "react-dom";
import "./Success.scss";

const Success = ({ openModel, setOpenModule, name }) => {
  if (!openModel) return null;

  return reactDom.createPortal(
    <>
      <div className="success">
        <div className="success__container">
          <h1>Thank you {name}, We will contact soon</h1>
          <button onClick={() => setOpenModule(false)}>Done</button>
        </div>
      </div>
    </>,
    document.getElementById("success")
  );
};

export default Success;
