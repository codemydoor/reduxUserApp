import React, { PureComponent } from "react";
import "../css/style.css";

class UsersForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-input">
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-input">
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-input">
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
            placeholder="Gen"
          />
        </div>
        <button className="button" type="submit">
          Add User
        </button>
      </form>
    );
  }
}

export default UsersForm;
