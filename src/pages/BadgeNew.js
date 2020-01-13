import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../images/badge-header.svg";
import Badge from "../components/Badge";
import "../pages/style/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = { form: {} };

  handleChange = e => {
    this.setState({
      form: {
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Logo}></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Jose"
                LastName="Alvarez"
                avatarUrl="https://s.gravatar.com/avatar/5054521adc02159c30ab9bdb8e175366?s=80"
                jobTitle="Frontend Engineer"
                twittwe="joseche0"
              />
              ,
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
