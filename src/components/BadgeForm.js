import React from "react";

class BadgeForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    Email: "",
    jobTitle: "",
    twitter: "",
    avatarUrl: ""
  };

  //   handleChange = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   handleClick = e => {
  //     console.log(this.state);
  //   };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValue.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValue.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              value={this.props.formValue.email}
            />
          </div>
          <div className="form-group">
            <label>Job Tittle</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValue.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValue.twitter}
            />
          </div>

          <button
            // onClick={this.handleClick}
            type="submit"
            className="btn btn-primary"
            // onClick={this.props.onSubmit}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default BadgeForm;
