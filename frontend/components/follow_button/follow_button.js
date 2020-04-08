import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowed: null,
      followText: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentUser || this.props.blogs[parseInt(this.props.match.params.blogId)].author_id === this.props.currentUser.id) {
      document.querySelector(".blog-show-follow-button").style.display = "none";
    }
    this.state.isFollowed = this.props.currentUser && this.props.currentUser.follows.map(follow => follow.followed_blog_id).includes(parseInt(this.props.match.params.blogId));
    this.state.followText = this.state.isFollowed ? "UNFOLLOW THIS BLOG" : "FOLLOW THIS BLOG";
  }

  handleClick() {
    document.querySelector(".follow-loading-mask-div").style.display = "block";
    if (this.state.isFollowed) {
      setTimeout(() => {
        this.setState({ isFollowed: false, followText: "FOLLOW THIS BLOG" })
        document.querySelector(".follow-loading-mask-div").style.display = "none";
      }, 1000)
    } else {
      setTimeout(() => {
        this.setState({ isFollowed: false, followText: "UNFOLLOW THIS BLOG" })
        document.querySelector(".follow-loading-mask-div").style.display = "none";
      }, 1000)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="blog-show-follow-button" >
          <div className="follow-loading-mask-div"></div>
          { this.state.followText }
        </button>
      </div>
    )
  }
};

export default withRouter(DemoButton);