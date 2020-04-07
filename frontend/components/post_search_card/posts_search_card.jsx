import * as tomLibrary from '../../util/tom_library'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import React from 'react';

const AVATARS = tomLibrary.AVATARS; 

class PostSearchCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followText: null,
      isFollowed: null,
      blogId: null,
    }
  }

  componentDidMount() {
    this.state.blogId = this.props.post.blog_id;
    this.setFollowState(this.state.blogId);
  }

  followClick(blogId) {
    if (this.state.isFollowed) {
      // this.props.unFollowBlog(this.props.blog.id);
      this.state.isFollowed = false;
      this.setState({ followText: "Follow" })
    } else {
      // this.props.followBlog(this.props.blog.id);
      this.state.isFollowed = true;
      this.setState({ followText: "Unfollow" })   
    }
  }

  setFollowState(blogId) {
    if (this.props.currentUser) {
      let followedBlogIds = this.props.currentUser.follows.map(follow => follow.followed_blog_id);
      if (followedBlogIds.includes(blogId)) {
        this.state.followText = 'Unfollow';
        this.state.isFollowed = true;
      } else {
        this.state.followText = 'Follow';
        this.state.isFollowed = false;
      }
    } else {
      this.state.followText = null;
    }
  }

  render() {
    return (
      <li className="search-post-li">
        <div className="search-search-post-header-div">
          <Link to={`/blogs/${this.props.post.blog_id}`}>
            <div className="search-profile-user-image" style={{ backgroundImage: `url("${AVATARS[(this.props.post.blog_id) % AVATARS.length]}")` }} alt=""></div>
          </Link>
          <Link to={`/blogs/${this.props.post.blog_id}`}>
            <h3 className="search-post-h3">{this.props.blog.title.length > 25 ? (this.props.blog.title.slice(0, 25) + "...") : this.props.blog.title}</h3>
          </Link>
          <span className="search-follow-span" onClick={() => this.followClick(this.props.post.blog_id)}>{ this.state.followText }</span>
        </div>
        <Link to={`/blogs/${this.props.post.blog_id}`}>
          <img className="search-image" src={this.props.post.photoUrl ? this.props.post.photoUrl : this.props.post.pic_url} alt="" />
        </Link>
        <div className="search-post-bottom-div">
          <h4 className="search-post-h4">{this.props.post.title}</h4>
          <p className="search-post-p">{this.props.post.text}</p>
          <p className="search-post-author">posted by
              <Link to={`/search/${this.props.post.author.username}`}>
              <span className="search-post-author-link">
                {" " + this.props.post.author.username}
              </span>
            </Link>
          </p>
        </div>
      </li>
    )
  }
}

export default withRouter(PostSearchCard);