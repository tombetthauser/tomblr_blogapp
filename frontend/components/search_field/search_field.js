import React from 'react';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.searchText !== "") {
      this.props.history.push(`/search/${this.state.searchText}`)
    } else {
      this.props.history.push(`/search/`)
    }
  }

  render() {
    return (
      <form 
        className="splashpage-searchbox-div" 
        onSubmit={this.handleSubmit}
      >
        <label className="splashpage-searchbox-t" onClick={() => this.props.history.push(`/`)}>
          <Link to="/">t</Link>
        </label>
        <input 
          className="splashpage-searchbox-input" 
          onChange={this.update('searchText')} 
          value={this.state.searchText}
          placeholder="Search Tomblr" 
          type="text" 
        />
      </form>
    );
  }
}

export default withRouter(PostForm);
