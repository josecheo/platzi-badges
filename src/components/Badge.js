import React from "react";
import "./style/Badge.css";
import LogoPlaztiConf from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={LogoPlaztiConf} alt="Logo"></img>
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          ></img>
          <h1>
            {this.props.firstName} <br></br> {this.props.LastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twittwe}</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}
export default Badge;
