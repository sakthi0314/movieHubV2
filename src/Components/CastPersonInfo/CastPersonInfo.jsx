import React from "react";
import "./CastPersonInfo.scss";

const CastPersonInfo = ({ depart, Vote, gender, birthday, Place, KnownAs }) => {
  return (
    <ul className="castPersonInfo">
      <li>
        <h4>Personal Info</h4>
      </li>

      <li>
        <h4>Known For</h4>
        <p>{depart}</p>
      </li>

      <li>
        <h4>Known Credits</h4>
        <p>{Vote} </p>
      </li>

      <li>
        <h4>Gender</h4>
        <p>{gender}</p>
      </li>

      <li>
        <h4>Birthday</h4>
        <p>{birthday}</p>
      </li>

      <li>
        <h4>Place of Birth</h4>
        <p>{Place}</p>
      </li>

      <li>
        <h4>Also Known As</h4>
        {KnownAs ? KnownAs.map((as) => <p>{as || "-"}</p>) : null}
      </li>
    </ul>
  );
};

export default CastPersonInfo;
