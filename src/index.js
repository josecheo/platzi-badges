import React from "react";
import ReactDOM from "react-dom";
import Badges from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
