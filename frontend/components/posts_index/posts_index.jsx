import React from 'react';
import PostFormContainer from '../posts_form/post_form_container';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class PostsIndex extends React.Component {
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

    return (
      <div>
          {newPostForm}
          <ul className="mapped-post-ul">
            {this.props.posts.map(post => {
              if (parseInt(post.blog_id) === parseInt(this.props.match.params.blogId)) {
                return (
                    <li className="mapped-post-li">
                      <h3>{post.title}</h3>
                      <img src={post.pic_url} alt=""/>
                      <p className="blog-post-p">
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

export default withRouter(PostsIndex);