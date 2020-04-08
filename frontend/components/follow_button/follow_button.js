import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentUser) {
      document.querySelector(".blog-show-follow-button").style.display = "none";
    }
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
        <button className="blog-show-follow-button" >
          {this.props.currentUser && this.props.currentUser.follows.map(follow => follow.followed_blog_id).includes(parseInt(this.props.match.params.blogId)) ? "UNFOLLOW THIS BLOG" : "FOLLOW THIS BLOG" }
        </button>
      </div>
    )
  }
};

export default withRouter(DemoButton);