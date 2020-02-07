import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      pic_url: "", //                                                 <~~~~~~~~~~~~~
      text: "" //                                                     <~~~~~~~~~~~~~
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
            <h3 className="new-post-title">Create A New Post</h3>

            <form onSubmit={this.handleSubmit}>
              <label className="post-field">title:
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="post-field"
                />
              </label>
              <label className="post-field">image url (optional):
                <input
                  type="text"
                  value={this.state.pic_url}
                  onChange={this.update('pic_url')}
                  className="post-field"
                />
              </label>
              <label className="post-field">post text (optional):
                <input
                  type="text"
                  value={this.state.text}
                  onChange={this.update('text')}
                  className="post-field"
                />
              </label>
              <button type="submit">create post</button>
            </form>

          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(PostForm);
