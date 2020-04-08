import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(() => {
    //   this.props.history.push(`/feed`)
    // })
    // this.props.requestUser(this.props.currenUser)
  }

  render() {
    return (
      <div>
        <button className="blog-show-follow-button">
          {this.props.blog.title ? this.props.blog.title : null }
        </button>
      </div>
    )
  }
};

export default withRouter(DemoButton);