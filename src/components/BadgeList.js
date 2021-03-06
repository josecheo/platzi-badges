import React from "react";
import "./styles/BadgeList.css";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.first_name} ${badge.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredResults(result);
  }, [badges, query]);
  return { query, setQuery, filteredResults };
}

function BadgeList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredResults } = useSearchBadges(badges);

  if (filteredResults.length === 0) {
    return (
      <div>
        <div className="form-grup">
          <input
            type="text"
            className="form-control mb-4 formulario"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <h3> No hay Badges</h3>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-grup">
        <input
          type="text"
          className="form-control mb-4 formulario"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <ul className="list-unstyled">
        {filteredResults.map(badge => {
          return (
            <Link
              key={badge.id}
              className="Link text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
              <div className="BadgesListItem">
                <Gravatar
                  className="BadgesListItem__avatar"
                  first_name={badge.first_name}
                  last_name={badge.last_name}
                  alt={`${badge.first_name} ${badge.last_name}`}
                />

                <div>
                  <strong>
                    {badge.first_name} {badge.last_name}
                  </strong>
                  <strong className="Badge__twitter">
                    <br />@{badge.twitter}
                  </strong>

                  <br />
                  {badge.job_title}
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgeList;
