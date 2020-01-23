import { Link } from "react-router-dom";
import React from "react";
import Logo from "../images/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Navbar">
          <div className="container-fluid">
            <Link className="Navbar__brand" to="/">
              <img className="Navbar__brand-logo" src={Logo} alt="Logo"></img>
              <span className="font-weight-light">Platzi</span>
              <span className="font-weight-bold">Conf</span>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Navbar;
