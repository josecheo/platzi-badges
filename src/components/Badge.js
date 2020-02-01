import React from "react";
import "./styles/Badge.css";
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
            first_name={this.props.first_name}
            last_name={this.props.last_name}
            email={this.props.email}
          />
          <h1>
            {this.props.first_name} <br></br> {this.props.last_name}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.job_title}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}
export default Badge;
