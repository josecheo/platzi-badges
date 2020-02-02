import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles/Badges.css";
import BadgeList from "../components/BadgeList";
import Logo from "../images/badge-header.svg";
import api from "../api";
import Loading from "../components/Loading";
import MiniLoader from "../components/MiniLoader";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data)
      return <Loading></Loading>;
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
          {this.state.loading && <MiniLoader></MiniLoader>}
        </div>
      </div>
    );
  }
}

export default Badges;
