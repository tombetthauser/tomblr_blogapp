import React from 'react';
import PostFormContainer from '../posts_form/post_form_container';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class PostsSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "cats"
    }
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
              <li>Trending</li>
              <li>Staff picks</li>
              <li>Text</li>
              <li>Photos</li>
              <li>GIFs</li>
              <li>Quotes</li>
              <li>Chats</li>
              <li>Audio</li>
              <li>Video</li>
              <li>Asks</li>
            </ul>
          </div>
          <div className="search-header-searchterms-div">
            <h3 class="search-header-searchterms-title">{this.state.searchTerm.toUpperCase()}</h3>
            <span class="search-header-searchterms-related">RELATED:</span>
            <ul class="search-header-searchterms-ul">
              <li>ANIMALS</li>
              <li>VIDEO</li>
              <li>DOGS</li>
              <li>KITTENS</li>
              <li>CUTE</li>
            </ul>
          </div>
          <ul className="search-post-ul">
            {this.props.posts.map(post => {
              if (post.text.includes(this.state.searchTerm) || post.title.includes(this.state.searchTerm)) {
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