import React from "react";
import { useState } from "react";
import "./DropDown.scss";

const DropDown = ({ data }) => {
  const [selected, setSeleted] = useState();
  return (
    <select>
      <option>HEllo</option>
    </select>
  );
};

export default DropDown;
