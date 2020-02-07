import React from 'react';
import PostFormContainer from '../posts_form/post_form_container';
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
    let newPostForm = null;
    
    if (this.props.currentUser) {
      newPostForm = <PostFormContainer />;
    }

    return (
      <div>
          <ul className="mapped-post-ul">
            {this.props.posts.map(post => (
              <Link to={`/posts/${post.id}`} className="mapped-post-link">
                <li className="mapped-post-li">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </li>
              </Link>
            ))}
            { newPostForm }
          </ul>
      </div>
    )
  }
}

export default PostsIndex;