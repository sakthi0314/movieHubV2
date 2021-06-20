import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { request } from "../../Services/request";
import "./NetflixTrailer.scss";

const NetflixTrailer = ({ image, title, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="netflixTrailer">
        <div className="netflixTrailer__image">
          <img src={`${request.IMG_URL}/${image}`} alt={title} />
        </div>
        <div className="netflixTrailer__icon" onClick={handleShow}>
          <BsPlayFill />
        </div>
      </div>
    </>
  );
};

export default NetflixTrailer;
