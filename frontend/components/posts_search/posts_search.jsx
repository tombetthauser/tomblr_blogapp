import React from 'react';
import PostFormContainer from '../posts_form/post_form_container';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SearchField from '../search_field/search_field_container';
import DemoButton from '../demo_user_button/demo_user_container';
import LogoutButton from '../logout_button/logout_button_container';


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

const STOP_WORDS = ["", "etc", "just", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"];

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
      searchTerm: ""
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderLogoutDemoButton() {
    if (this.props.currentUser) {
      return (<LogoutButton/>)
    } else {
      return (<DemoButton/>)
    }
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

    const ALL_USERS = shuffle(this.props.posts).map(post => {
      return `${post.author.username.toUpperCase()}`;
    });

    const RELATED_WORDS = [];

    const SHUFFLED_POSTS = shuffle(this.props.posts);

    let searchTerm = this.props.searchTerm ? this.props.searchTerm : "";

    for (let i = 0; i < SHUFFLED_POSTS.length; i++) {
      let words = SHUFFLED_POSTS[i].text.split(" ");
      for (let j = 0; j < words.length; j++) {
        let word = words[j].toLowerCase();
        if (
            !STOP_WORDS.includes(word) && 
            !RELATED_WORDS.includes(word) &&
            word !== searchTerm.toLowerCase() &&
            !word.includes(",") &&
            !word.includes(".") &&
            !word.includes("!") &&
            !word.includes("_") &&
            !word.includes("0") &&
            !word.includes("1") &&
            !word.includes("2") &&
            !word.includes("3") &&
            !word.includes("4") &&
            !word.includes("5") &&
            !word.includes("6") &&
            !word.includes("7") &&
            !word.includes("8") &&
            !word.includes("9") &&
            !word.includes("?")
          ) {
          RELATED_WORDS.push(word)
          if (RELATED_WORDS.length >= 3) { break; }
        }
      }
      if (RELATED_WORDS.length >= 3) { break; }
    }

    const SELECT_USERS = [];

    ALL_USERS.forEach(ele => {
      if (!SELECT_USERS.includes(ele)) {
        SELECT_USERS.push(ele)
      }
    })
    
    return (
      <div>
          {this.renderLogoutDemoButton()}
          {newPostForm}
          <SearchField />
          <div className="search-header-div"></div>
          <div className="search-header-links-div">
            <ul className="search-header-links-ul">
              <li>Trending Users:</li>
              { SELECT_USERS.slice(0, 5).map( user => {
                return(<li><Link to={`/search/${user}`}>{user.toLowerCase()}</Link></li>)
              })}
            </ul>
          </div>
          <div className="search-header-searchterms-div">
          <h3 class="search-header-searchterms-title">{ searchTerm === "" ? "RECENT POSTS" : searchTerm.toUpperCase() }</h3>
            <span class="search-header-searchterms-related">related:</span>
            <ul class="search-header-searchterms-ul">
              {RELATED_WORDS.map( word => {
                return(<li><Link to={`/search/${word}`}>#{word}</Link></li>)
              })}
            </ul>
          </div>
          <ul className="search-post-ul">
            {shuffle(this.props.posts).map(post => {
              if (
                post.text.toUpperCase().includes(searchTerm.toUpperCase()) || 
                post.title.toUpperCase().includes(searchTerm.toUpperCase()) || 
                post.author.username.toUpperCase().includes(searchTerm.toUpperCase())
              ) {
                return (
                    <li className="search-post-li">
                      <div className="search-search-post-header-div">
                        <Link to={`/blogs/${post.blog_id}`}>
                          <img className="search-profile-user-image" src="https://hezway.ipower.com/poolsafeinc/wp-content/uploads/2017/06/profile.png" alt=""/>
                        </Link>
                        <h3 className="search-post-h3">{post.title}</h3>
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