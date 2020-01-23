import React from "react";
import Logo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import "../pages/styles/BadgeEdit.css";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import Swal from "sweetalert2";

// import md5 from "md5";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      Swal.fire("Good job!", "Edit is successful", "success");
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <div className="BadgeEdit__hero">
          <img
            className="img-fluid BadgeEdit__hero__image"
            src={Logo}
            alt="Logo"
          ></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "Job_Title"}
                twittwe={this.state.form.twitter || "Twitter"}
                email={this.state.form.email}
              />
              ,
            </div>
            <div className=" col-6 Badge__form">
              <h1>Edit Attendant</h1>
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
export default BadgeEdit;
