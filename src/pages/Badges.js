import React from "react";
import { Link } from "react-router-dom";
import "../pages/style/Badges.css";
import BadgeList from "../components/BadgeList";
import Logo from "../images/badge-header.svg";
import api from "../api";
import Loading from "../components/Loading"

class Badges extends React.Component {
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
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) return <Loading></Loading>;
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={Logo}
                alt="Logo Conf"
              ></img>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="Badges/new">
              New Badge
            </Link>
          </div>

          <div className="Badge__list">
            <div className="Badge__container">
              <BadgeList badges={this.state.data}></BadgeList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
