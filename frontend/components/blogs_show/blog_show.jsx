import React from 'react';
import { Link } from 'react-router-dom';

class BlogsShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.blogId);
  }
  
  render() {
    let title, description, authorId, author;
    
    if (this.props.blog) {
      title = this.props.blog.title;
      description = this.props.blog.description;
      authorId = this.props.blog.author_id;
      
      this.props.requestUser(authorId)
      
      console.log("~~~~~~~~~~~~")
      console.log(this.props)
      console.log("~~~~~^^~~~~~")

      author = null;
    }

    return (
      <div className="single-blog-show">
        <div className="blog-header">
          <h2>{title}</h2>
          <h3>By blogger No.{authorId}</h3>
          <p>{description}</p>
        </div>
        <Link to="/blogs">Back to Blogs Index</Link>
      </div>
    );
  }
};

export default BlogsShow;