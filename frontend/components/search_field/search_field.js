import React from 'react';
import { withRouter } from 'react-router';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    console.log(this.state.searchText)
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.searchText}`)
  }

  render() {
    return (
      <form 
        className="splashpage-searchbox-div" 
        onSubmit={this.handleSubmit}
      >
        <label className="splashpage-searchbox-t">
          t
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
