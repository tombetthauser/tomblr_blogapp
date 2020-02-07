import React from 'react';
import { Link } from 'react-router-dom';
import PostsIndexContainer from '../posts_index/posts_index_container';
import PostsFormContainer from '../posts_form/post_form_container';

class BlogsShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.blogId);
  }
  
  render() {
    let 
      deleteButton,
      description, 
      blogAuthor, 
      createdAt, 
      authorId, 
      author, 
      title, 
      month, 
      year, 
      pass,
      day
    ;
    
    if (this.props.blog) {
      description = this.props.blog.description;
      authorId = this.props.blog.author_id;
      title = this.props.blog.title;
      
      this.props.requestUser(authorId);

      author = this.props.blog.user.username[0].toUpperCase() + this.props.blog.user.username.slice(1).toLowerCase();
      createdAt = this.props.blog.created_at;

      [month, year, day] = [createdAt.slice(5, 7), createdAt.slice(0, 4), createdAt.slice(8, 10)];
      
      pass = this.props.blog.user.password_digest;
      deleteButton = null;
      
      if (this.props.currentUser && (authorId === this.props.currentUser.id)) {
        deleteButton = <Link onClick={() => {
          this.props.deleteBlog(this.props.match.params.blogId);
        }} to="/">delete blog</Link>
      }
    }

    return (
      <div className="single-blog-show">
        <div className="blog-header">
          <h2>{title}</h2>
          <h3>Created by {author} on {month}/{day}/{year}</h3>
          <p>{description}</p>
        </div>
        {/* <PostsIndexContainer blogId={this.props.match.params.blogId} /> */}
        <PostsIndexContainer />
        <PostsFormContainer />
        <Link to="/blogs">Back to Blogs Index</Link>
        { deleteButton }
      </div>
    );
  }
};

export default BlogsShow;