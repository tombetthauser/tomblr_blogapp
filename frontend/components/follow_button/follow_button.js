import React from 'react';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';

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
    setTimeout(() => {
      if (!this.state.isFollowed) {
        let newFollow = {
          followed_blog_id: parseInt(this.props.match.params.blogId),
          follower_id: this.props.currentUser.id,
        };
        this.props.createFollow(newFollow).then(_follow => {
          this.setState({ isFollowed: false, followText: "UNFOLLOW THIS BLOG" });
          document.querySelector(".follow-loading-mask-div").style.display = "none";
          // this.props.requestUser(this.props.currentUser.id);
        })
      } else {
        this.props.fetchFollows().then(() => {
          this.props.follows.forEach(follow => {
            if (follow.follower_id === this.props.currentUser.id && follow.followed_blog_id === parseInt(this.props.match.params.blogId)) {
              this.props.deleteFollow(follow.id);
              this.setState({ isFollowed: false, followText: "FOLLOW THIS BLOG" })
              document.querySelector(".follow-loading-mask-div").style.display = "none";
            }
          });
        });
      }
    }, 750)
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