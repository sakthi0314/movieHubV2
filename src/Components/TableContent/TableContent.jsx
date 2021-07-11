import React from "react";
import "./TableContent.scss";

const TableContent = ({ credits }) => {
  return (
    <div className="tableContent">
      {credits.map((credit) => (
        <div className="tableContent__content">
          <h1>
            {credit.release_date || credit.first_air_date || "Not Yet Mention"}
          </h1>
          <p>
            {credit.title || credit.name || credit.original_title || "-"}{" "}
            <b>"as"</b> <span>{credit.character || "-"}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default TableContent;
