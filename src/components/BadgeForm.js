import React from "react";

class BadgeForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    Email: "",
    job_title: "",
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
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="first_name"
              value={this.props.formValue.first_name}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="last_name"
              value={this.props.formValue.last_name}
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
              name="job_title"
              value={this.props.formValue.job_title}
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
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}
export default BadgeForm;
