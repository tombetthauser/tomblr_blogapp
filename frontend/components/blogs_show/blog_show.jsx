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
    
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log(this.props.blog)
    console.log("~~~~~~~~~~~~~~~~~~~~~")

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
      <div className="blog-show-main-div">
        <div className="blog-show-header-image-div"></div>
        <div className="blog-show-avatar-circle"></div>
        <div className="blog-header">
          <h2 className="blog-show-title">{title}</h2>
          <p className="blog-show-subtitle">{description}</p>
          <p className="blog-show-credits">Created by {author} on {month}/{day}/{year}</p>
        </div>
        <div className="single-blog-show">
          <PostsIndexContainer />
          { deleteButton }
        </div>
      </div>
    );
  }
};

export default BlogsShow;