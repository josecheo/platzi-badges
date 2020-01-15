import React from "react";
import "../pages/style/Badges.css";
import Navbar from "../components/Navbar";
import BadgeList from "../components/BadgeList";
import Logo from "../images/badge-header.svg";
class Badges extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Freda",
        lastName: "Grady",
        email: "Leann_Berge@gmail.com",
        jobTitle: "Legacy Brand Director",
        twitter: "FredaGrady22221-7573",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJTDswzSv7w6FtP1UE22DfHMbHMd6t6N8qP_susMsHw_87saoW"
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Major",
        lastName: "Rodriguez",
        email: "Ilene66@hotmail.com",
        jobTitle: "Human Research Architect",
        twitter: "MajorRodriguez61545",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0aaitnN8uBJHkBj_XiuKJVc45xsi7Aok4BZCrlwYFKqVKZ4sx"
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Daphney",
        lastName: "Torphy",
        email: "Ron61@hotmail.com",
        jobTitle: "National Markets Officer",
        twitter: "DaphneyTorphy96105",
        avatarUrl:
          "https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png"
      }
    ]
  };

  render() {
    return (
      <div>
        <Navbar />
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
            <a className="btn btn-primary" href="Badges/new">
              New Badge
            </a>
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
