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
          {newPostForm}
          <ul className="mapped-post-ul">
            {this.props.posts.map(post => {
              if (post.blog_id === post.blog_id) {
                return (
                    <li className="mapped-post-li">
                      <h3>{post.title}</h3>
                      {console.log(post)}
                      <img src={post.pic_url} alt=""/>
                      <p>{post.text}</p>
                      <button onClick={() => this.props.deletePost(post.id)}>
                        delete post
                      </button>
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

export default PostsIndex;