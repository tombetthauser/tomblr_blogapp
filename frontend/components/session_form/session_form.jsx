import React from "react";
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const emailInput = (this.props.formType === 'signup') ? (
      <label>email:
            <input type="text" onChange={this.update('email')} value={this.state.email} />
      </label>
    ) : "";

    return (
      <div className="login-form-container">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <label>username:
            <input type="text" onChange={this.update('username')} value={this.state.username}/>
          </label>
          { emailInput }
          <label>password:
            <input type="password" onChange={this.update('password')} value={this.state.password}/>
          </label>
          <button type="submit">{this.props.formType}</button>
        </form>
        {/* <p className="signin-or-login" >{this.props.formType} or {this.props.navLink}</p> */}
      </div>
    )
  }
}

export default SessionForm;