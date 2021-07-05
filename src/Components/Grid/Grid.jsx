import React from "react";
import RowItem from "../../Components/RowItems/RowItems";
import "./Grid.scss";

const Grid = ({ result }) => {
  return (
    <div className="grid">
      {result.length >= 1 &&
        result.map((res) => (
          <RowItem
            key={res.id}
            id={res.id}
            media_type={res.media_type}
            date={res.release_date}
            title={res.title || res.name || res.original_title}
            poster={res.poster_path}
          />
        ))}
    </div>
  );
};

export default Grid;
