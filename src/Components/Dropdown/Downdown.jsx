import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PopularAction from "../../store/actions/PopularAction";
import TrendingAction from "../../store/actions/TrendingAction";
import classes from "./Downdown.module.scss";

const Downdown = ({ options, defaultType }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(defaultType);

  useEffect(() => {
    dispatch(PopularAction(select));
    dispatch(TrendingAction(select, "week"));
    // eslint-disable-next-line
  }, [select]);

  return (
    <div className={classes.dropdown}>
      <select onChange={(e) => setSelect(e.target.value)}>
        {options.map((option, id) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Downdown;
