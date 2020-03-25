import React from 'react';
import { withRouter } from 'react-router';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newState = this.state;
    newState.userId = this.props.currentUser.id;
    this.props.createBlog(newState);
  }

  render() {
    return (
      <div>
        <div className="new-blog-container">
          <div className="new-blog-form">
            <h3 className="new-blog-title">Create A New Blog</h3>

            <form onSubmit={this.handleSubmit}>
              <label className="blog-field">title:
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="blog-field"
                />
              </label>
              <label className="blog-field">description:
              <input
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="blog-field"
              />
              </label>
              <button type="submit">create blog</button>
            </form>

          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(BlogForm);
