import React from 'react';
import { withRouter } from 'react-router';

const AVATARS = [
  "https://66.media.tumblr.com/7d376efd024eadd902a8bb60c8155c94/tumblr_o51oavbMDx1ugpbmuo4_540.png",
  "https://66.media.tumblr.com/ee9b9564d7e54380837579452cde04f6/tumblr_o51oavbMDx1ugpbmuo5_540.png",
  "https://66.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_540.png",
  "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png",
  "https://66.media.tumblr.com/22d1c50c3e2ca1062a94b47a65bfeb6d/tumblr_o51oavbMDx1ugpbmuo10_540.png",
  "https://66.media.tumblr.com/699953199a7934e420f1793eb78109df/tumblr_peqyvd3q4n1v1eo16_1280.jpg",
];

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      pic_url: "",
      text: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  componentDidMount() {
    document.querySelector(".new-post-div-avatar-div").style.backgroundImage = `url(${AVATARS[(this.props.match.params.blogId) % AVATARS.length]})`;
  }

  handleSubmit(event) {
    event.preventDefault();
    const newState = this.state;
    newState.blog_id = this.props.match.params.blogId
    this.props.createPost(newState).then(() => {
      this.setState({
        title: "",
        pic_url: "",
        text: "",
        photoFile: null,
      });
    });
  }

  handleFile(event) {
    this.setState({ photoFile: event.currentTarget.files[0] })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="new-post-container">
          <div className="new-post-form">
            <div className="new-post-top-div">
              <div class="new-post-div-avatar-div"></div>
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
              <label className="file-field">
                <input type="file" onChange={this.handleFile.bind(this)}/>
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
