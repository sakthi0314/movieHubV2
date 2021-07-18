import React from "react";
import { Pagination } from "@material-ui/lab";
import "./CustomPagination.scss";
import pageAction from "../../store/actions/pageAction";
import { useDispatch } from "react-redux";

const CustomPagination = ({ noOfPages }) => {
  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <Pagination
        color="primary"
        count={noOfPages}
        onChange={(e) => dispatch(pageAction(e.target.textContent))}
      />
    </div>
  );
};

export default CustomPagination;
