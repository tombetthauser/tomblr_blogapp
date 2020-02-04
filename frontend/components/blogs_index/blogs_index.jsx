import React from 'react';
import { Link } from 'react-router-dom';

class BlogsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBlogs()
  }
  
  render() {
    return (
      <div>
          <ul className="mapped-blog-ul">
            {this.props.blogs.map(blog => (
              <Link to="#" className="mapped-blog-link">
                <li className="mapped-blog-li">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </li>
              </Link>
            ))}
          </ul>
      </div>
    )
  }
}

export default BlogsIndex;