import React from "react";

class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "tom", password: "password" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    this.props.requestUser(this.props.currenUser)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button className="demo-button-submit" type="submit">Demo User</button>
        </form>
      </div>
    )
  }
}

export default DemoButton;