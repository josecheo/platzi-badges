import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../images/badge-header.svg";
import Badge from "../components/Badge";
import "../pages/style/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      Email: "",
      jobTittle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
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
                firstName={this.state.form.firstName}
                LastName={this.state.form.lastName}
                avatarUrl="https://s.gravatar.com/avatar/5054521adc02159c30ab9bdb8e175366?s=80"
                jobTitle={this.state.form.jobTittle}
                twittwe={this.state.form.twitter}
                Email={this.state.form.Email}
              />
              ,
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValue={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
