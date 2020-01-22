import React from "react";
import "./style/Badge.css";
import LogoPlaztiConf from "../images/badge-header.svg";
import Gravatar from "../components/Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={LogoPlaztiConf} alt="Logo"></img>
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            firstName={this.props.firstName}
            lastName={this.props.lastName}
            email={this.props.email}
          />
          <h1>
            {this.props.firstName} <br></br> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}
export default Badge;
