import React from 'react';
import { Link } from 'react-router-dom';

class BlogsShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBlog(this.props.blogId)
  }
  
  render() {
    console.log("~~~~~~~~~~~~")
    console.log(this.props)
    console.log("~~~~~~~~~~~~")
    // const blogId = this.state.match.params.blogId;
    return (
      <div className="single-blog-show">
        <div className="blog-header">
          <h2>Blog #{} Blog Title</h2>
          <h3>by somebody, date</h3>
          <p>blog description</p>
        </div>
        <Link to="/blogs">Back to Blogs Index</Link>
      </div>
    );
  }
};

export default BlogsShow;