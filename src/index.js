import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// setup Redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Demo class compnent
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>
  // Demo Function component react-route=dom thêm  thẻ BrowserRouter bao toàn bộ App và import
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
