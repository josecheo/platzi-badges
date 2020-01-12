import React from "react";
import "./style/Badge.css";
import LogoPlaztiConf from "../images/badge-header.svg";

class Badges extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={LogoPlaztiConf} alt="Logo"></img>
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://s.gravatar.com/avatar/5054521adc02159c30ab9bdb8e175366?s=80"
            alt="Avatar"
          ></img>
          <h1>
            Jose <br></br> Alvarez
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@josealvarez</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}
export default Badges;
