import React from 'react';
import PostFormContainer from '../posts_form/post_form_container';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class PostsSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    let thisBlog = this.props.blogs[this.props.match.params.blogId];
    let deleteButtonText = null;
    let newPostForm = null;

    if (thisBlog && this.props.currentUser) {
      if (thisBlog.author_id === this.props.currentUser.id) {
        newPostForm = <PostFormContainer />;
        deleteButtonText = "delete post"
      }
    }

    // if (parseInt(post.blog_id) === parseInt(this.props.match.params.blogId)) {
    
    return (
      <div>
          {newPostForm}
          <div className="search-header-div"></div>
          <div className="search-header-links-div">
            <ul className="search-header-links-ul">
              <li className="search-header-link-li">Trending</li>
              <li className="search-header-link-li">Staff picks</li>
              <li className="search-header-link-li">Text</li>
              <li className="search-header-link-li">Photos</li>
              <li className="search-header-link-li">GIFs</li>
              <li className="search-header-link-li">Quotes</li>
              <li className="search-header-link-li">Chats</li>
              <li className="search-header-link-li">Audio</li>
              <li className="search-header-link-li">Video</li>
              <li className="search-header-link-li">Asks</li>
            </ul>
          </div>
          <ul className="search-post-ul">
            {this.props.posts.map(post => {
              if (post.text.includes("hi") || post.title.includes("hi")) {
                return (
                    <li className="search-post-li">
                      <h3 className="search-post-h3">{post.title}</h3>
                      {console.log(post)}
                      <img src={post.pic_url} alt=""/>
                      <p className="search-post-p">
                        {post.text}
                        <a onClick={() => this.props.deletePost(post.id)}>
                          { deleteButtonText }
                        </a>
                      </p>
                    </li>
                )
              } else {
                return null
              }
            }).reverse()}
          </ul>
      </div>
    )
  }
}

export default withRouter(PostsSearch);