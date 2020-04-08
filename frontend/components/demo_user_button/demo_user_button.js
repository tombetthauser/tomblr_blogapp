import React from "react";
import { withRouter } from 'react-router';

class DemoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: "tom",
      password: "password",
      blogs: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.fetchBlogs().then(blogs => this.state.blogs = "blogs").then(() => alert(this.state.blogs));
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push(`/feed`)
    })
    this.props.requestUser(this.props.currenUser)
    // this.props.fetchBlogs().then(blogs => {
    //   let keys = Object.keys(blogs.blogs);
    //   keys.forEach(key => {
    //     if (blogs.blogs[key].user.username === this.state.username) {
    //       // this.props.history.push(`/blogs/${key}`)
    //     }
    //   })
    // })
  }

  render() {    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button className="demo-button-submit" type="submit">Demo User</button>
        </form>
      </div>
    )
  }
}

export default withRouter(DemoButton);