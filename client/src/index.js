import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.TOP_LEFT,
});
const notify = () => toast("Wow so easy !");
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
