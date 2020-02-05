import React from 'react';
import { Link } from 'react-router-dom';

class BlogsShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.blogId)
  }
  
  render() {
    console.log("~~~~~~~~~~~~")
    console.log(this.props.blog)
    // console.log(this.props.blog.author_id)
    console.log("~~~~~~~~~~~~")

    // const { title, description } = this.props.blog
    
    // const blogId = this.state.match.params.blogId;

    // if (this.props.blog) {
    //   let { title, description, authorId } = this.props.blog;
    // } else {
    //   let title = "";
    //   let description = "";
    //   let authorId = "";
    // }

    return (
      <div className="single-blog-show">
        <div className="blog-header">
          <h2>{this.props.blog ? this.props.blog.title : ""}</h2>
          <h3>by somebody, date</h3>
          <p>blog description</p>
        </div>
        <Link to="/blogs">Back to Blogs Index</Link>
      </div>
    );
  }
};

export default BlogsShow;