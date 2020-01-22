import React from "react";
import "./style/BadgeList.css";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class BadgeList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3> No hay Badges</h3>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <Link key={badge.id}
                className="Link text-reset text-decoration-none"
                to={`/badges/${badge.id}/edit`}
              >
                <div  className="BadgesListItem">
                  <Gravatar
                    className="BadgesListItem__avatar"
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    alt={`${badge.firstName} ${badge.lastName}`}
                  />

                  <div>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                    <strong className="Badge__twitter">
                      <br />@{badge.twitter}
                    </strong>

                    <br />
                    {badge.jobTitle}
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
