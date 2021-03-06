import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import store, { IsAuthLoad, rrfProps } from "./store/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import "./Styles/base.scss";

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <IsAuthLoad>
        <App />
      </IsAuthLoad>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
