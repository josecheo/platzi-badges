import React from "react";
import "./styles/notFound.css";
import imgNotfound from "../images/Recurso.png";
import { Link } from "react-router-dom";

function notFound() {
  return (
    <React.Fragment>
      <div className="notFound">
        <div className="noFound__col">
          <img className="notFoundImage" src={imgNotfound} alt="NotFount Img" />
        </div>
        <div>
          <h1>404:NOT FOUND</h1>
          <Link className="btn btn-primary" to="/">
            Start
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
export default notFound;
