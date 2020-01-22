import React from "react";
import Logo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import "../pages/style/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import Swal from "sweetalert2";

// import md5 from "md5";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      Swal.fire("Good job!", "Registration is successful", "success");
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew__hero__image"
            src={Logo}
            alt="Logo"
          ></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                LastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "Job_Title"}
                twittwe={this.state.form.twitter || "Twitter"}
                email={this.state.form.email}
              />
              ,
            </div>
            <div className=" col-6 Badge__form">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValue={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
