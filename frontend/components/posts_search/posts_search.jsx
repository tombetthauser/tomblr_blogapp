import React from 'react';
import PostFormContainer from '../posts_form/post_form_container';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SearchField from '../search_field/search_field_container';

const shuffle = (a) => {
  let ci = a.length;
  let tv, ri;
  while (0 !== ci) {
    ri = Math.floor(Math.random() * ci);
    ci -= 1;
    tv = a[ci];
    a[ci] = a[ri];
    a[ri] = tv;
  }
  return a;
};

const POPULAR_LINKS = shuffle([
  "kitten",
  "coding",
  "hotdog",
  "banana",
  "puppy",
  "jason",
  "pizza",
  "taco",
  "mike",
  "duck",
  "cat",
  "dog",
  "tom",
]).slice(0, 3);

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
    
    const searchTerm = this.props.searchTerm;

    // if (parseInt(post.blog_id) === parseInt(this.props.match.params.blogId)) {

    return (
      <div>
          {newPostForm}
          <SearchField />
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
          <h3 class="search-header-searchterms-title">{searchTerm.toUpperCase()}</h3>
            <span class="search-header-searchterms-related">popular:</span>
            <ul class="search-header-searchterms-ul">
              {POPULAR_LINKS.map( link => {
                return(<li><Link to={`/search/${link}`}>{link}</Link></li>)
              })}
            </ul>
          </div>
          <ul className="search-post-ul">
            {this.props.posts.map(post => {
              if (post.text.includes(searchTerm) || post.title.includes(searchTerm) || post.author.username.includes(searchTerm)) {
                console.log(post)
                return (
                    <li className="search-post-li">
                      <div className="search-search-post-header-div">
                        <Link to={`/blogs/${post.blog_id}`}>
                          <img className="search-profile-user-image" src="https://hezway.ipower.com/poolsafeinc/wp-content/uploads/2017/06/profile.png" alt=""/>
                        </Link>
                        <h3 className="search-post-h3">{post.title}</h3>
                        {/* <h3 className="search-post-h3">{post.author.username}</h3> */}
                      </div>
                      {console.log(post)}
                      <img className="search-image" src={post.pic_url} alt=""/>
                      <div className="search-post-bottom-div">
                        <p className="search-post-p">{post.text}</p>
                        <p className="search-post-author">posted by 
                          <Link to={`/search/${post.author.username}`}>
                          <span className="search-post-author-link">
                              {" " + post.author.username}
                            </span>
                          </Link>
                        </p>
                      </div>
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