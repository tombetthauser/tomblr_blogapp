import React from "react";
import { Link } from 'react-router-dom';
import BackgroundImages from '../background_images/background_images';
import DemoButton from '../demo_user_button/demo_user_container';
import SearchField from '../search_field/search_field_container';
import { withRouter } from 'react-router-dom';


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
    this.props.processForm(user).then(respnse => {
      this.props.history.push("/search")
    })
    this.props.requestUser(this.props.currenUser)
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
      <div>
        <SearchField />
        <DemoButton />
        <BackgroundImages />
        <div className="background-author-div">
          Posted by <strong className="background-author-name-span">Tom</strong>
          <div className="background-author-image-div"></div>
        </div>
        <div className="tom-links-div">
          <p>Site built by <strong>Tom Betthauser</strong></p>
          <a className="tom-links-link" target="new" href="http://www.tombetthauser.com/">• Portfolio</a>
          <a className="tom-links-link" target="new" href="https://www.linkedin.com/in/tombetthauser/">• LinkedIn</a>
          <a className="tom-links-link" target="new" href="https://github.com/tombetthauser">• GitHub</a>
        </div>

        <header>
          <Link to="/" className="header-link">
            <h1>tomblr</h1>
          </Link>
        </header>
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
        </div>
        <Link className="blogs-index-link-button" to="/search">⎈ here's whats trending</Link>
      </div>
    )
  }
}

export default withRouter(SessionForm);