import React from 'react';
import BlogFormContainer from '../blogs_form/blog_form_container';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

class BlogsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBlogs();
  }
  
  render() {
    let newBlogForm = null;
    
    if (this.props.currentUser) {
      newBlogForm = <BlogFormContainer />;
    }

    return (
      <div>
          <ul className="mapped-blog-ul">
            {this.props.blogs.map(blog => (
              <Link to={`/blogs/${blog.id}`} className="mapped-blog-link">
                <li className="mapped-blog-li">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                </li>
              </Link>
            ))}
            { newBlogForm }
          </ul>
      </div>
    )
  }
}

export default BlogsIndex;