import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      pic_url: "",
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newState = this.state;
    newState.blog_id = this.props.match.params.blogId
    this.props.createPost(newState);
  }

  render() {
    return (
      <div>
        <div className="new-post-container">
          <div className="new-post-form">
            <div className="new-post-top-div">
              <h3 className="new-post-title">Create a New Post</h3>
            </div>

            <form onSubmit={this.handleSubmit}>
              <label className="post-field">
                <input
                  placeholder="Title"
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="post-field-input-title"
                />
              </label>
              <label className="post-field">
                <input
                  placeholder="Your image URL here..."
                  type="text"
                  value={this.state.pic_url}
                  onChange={this.update('pic_url')}
                  className="post-field-input-picurl"
                />
              </label>
              <label className="post-field">
                <textarea
                  placeholder="Your text here..."
                  type="text"
                  value={this.state.text}
                  onChange={this.update('text')}
                  className="post-field-input-text"
                />
              </label>
              <div className="new-post-bottom-div">
                <button type="submit">Post</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(PostForm);
