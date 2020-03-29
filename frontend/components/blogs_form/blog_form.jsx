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
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newState = this.state;
    newState.userId = this.props.currentUser.id;
    this.props.createBlog(newState).then(blog => {
      this.props.history.push(`/blogs/${blog.blog.id}`)
    });
  }

  closeModal() {
    document.querySelector(".new-blog-outer-div").style.display = "none";
  }
  
  openModal() {
    alert("open")
    document.querySelector(".new-blog-outer-div").style.display = "flex";
  }

  render() {
    return (
      <div>
        <div className="new-blog-outer-div">
          <div className="new-blog-container">
            <button className="new-blog-close-modal" onClick={this.closeModal}>x</button>
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
                <button className="new-blog-cancel" onClick={this.closeModal}>cancel</button>
                <button className="new-blog-submit" type="submit">create blog</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogForm);
