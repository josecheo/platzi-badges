import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/platziconf-logo.svg";
import "./style/BadgeDetails.css";
import PageLoading from "../components/Loading";
import Badge from "../components/Badge";
import api from "../api";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <h1>Error: {this.state.error}</h1>;
    }
    const badge = this.state.data;
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={Logo} alt="LogoPlatziCof" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                jobTitle={badge.jobTitle}
                twitter={badge.twitter}
              />
            </div>
            <div className="col-6 Container__actions">
              <div>
                <h1>A C T I O N S</h1>

                <div>
                  <Link
                    className="btn btn-primary mb-3 button__edit"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <button className="btn btn-danger button__edit">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeDetails;
