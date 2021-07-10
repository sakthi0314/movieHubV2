import React from "react";
import { Pagination } from "@material-ui/lab";
import "./CustomPagination.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import pageAction from "../../store/actions/pageAction";
import { useDispatch } from "react-redux";

// Custom theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ noOfPages }) => {
  const dispatch = useDispatch();

  return (
    <div className="pagination">
      <ThemeProvider theme={theme}>
        <Pagination
          count={noOfPages}
          onChange={(e) => dispatch(pageAction(e.target.textContent))}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
