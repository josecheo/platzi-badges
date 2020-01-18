import React from "react";
import "./style/BadgeList.css";

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
              <div key={badge.id} className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarUrl}
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
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
