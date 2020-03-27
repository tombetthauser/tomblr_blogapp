import React from 'react';
import { Link } from 'react-router-dom';
import PostsIndexContainer from '../posts_index/posts_index_container';
import PostsFormContainer from '../posts_form/post_form_container';
import SearchField from '../search_field/search_field_container';
import DemoButton from '../demo_user_button/demo_user_container';
import LogoutButton from '../logout_button/logout_button_container';

const BACKGROUNDS = [
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSIzMCI+CjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzAwYTlmMSI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iMTgiIGZpbGw9IiMyNmJhZjQiPjwvcmVjdD4KPC9zdmc+",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjhkMjAzIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZjYyOSIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMMCA4NEwyOCAxMDBMNTYgODRMNTYgNTBMMjggMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZTUwMyIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI5MCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI5MCIgZmlsbD0iZ3JleSI+PC9yZWN0Pgo8cmVjdCB4PSIyNSIgd2lkdGg9IjI1IiBoZWlnaHQ9IjkwIiBmaWxsPSIjY2NjIj48L3JlY3Q+Cjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI5MCI+CjxnIHRyYW5zZm9ybT0ic2NhbGUoMSAxLjUpIj4KPHJlY3Qgd2lkdGg9Ijk5IiBoZWlnaHQ9Ijk5IiBmaWxsPSIjNmQ2OTVjIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI0Mi40MiIgaGVpZ2h0PSI0Mi40MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAgMCkgcm90YXRlKDQ1KSIgZmlsbD0iIzYyNWY1MyI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iOTkiIGhlaWdodD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIiBmaWxsPSIjNzE2ZjY0Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI5OSIgaGVpZ2h0PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDYwKSByb3RhdGUoLTQ1KSIgZmlsbD0iIzcxNmY2NCI+PC9yZWN0Pgo8L2c+Cjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCI+CjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0iI2JiZDgxNyI+PC9yZWN0Pgo8ZyB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiPgo8cmVjdCB3aWR0aD0iOTkiIGhlaWdodD0iMjUiIGZpbGw9IiNhOWNlMDAiPjwvcmVjdD4KPHJlY3QgeT0iLTUwIiB3aWR0aD0iOTkiIGhlaWdodD0iMjUiIGZpbGw9IiNhOWNlMDAiPjwvcmVjdD4KPC9nPgo8L3N2Zz4=",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzliYTdiNCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iI2RlZiI+PC9jaXJjbGU+CjxwYXRoIGQ9Ik0wIDQwIEE0MCA0MCA0NSAwIDAgNDAgMCBBNDAgNDAgMzE1IDAgMCA4MCA0MCBBNDAgNDAgNDUgMCAwIDQwIDgwIEE0MCA0MCAyNzAgMCAwIDAgNDBaIiBmaWxsPSIjOWJhN2I0Ij48L3BhdGg+Cjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NSIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNzUiIGhlaWdodD0iMTAwIiBmaWxsPSJzbGF0ZWdyYXkiPjwvcmVjdD4KPGNpcmNsZSBjeD0iNzUiIGN5PSI1MCIgcj0iMjguMyUiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZT0iIzlhYTZiMiIgZmlsbD0ibm9uZSI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjAiIHI9IjI4LjMlIiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2U9IiM5YWE2YjIiIGZpbGw9Im5vbmUiPjwvY2lyY2xlPgo8Y2lyY2xlIGN5PSIxMDAiIHI9IjI4LjMlIiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2U9IiM5YWE2YjIiIGZpbGw9Im5vbmUiPjwvY2lyY2xlPgo8L3N2Zz4=",
];




// background - color: #fff;
// "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%236200fe' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E",

const AVATARS = [
  "https://66.media.tumblr.com/7d376efd024eadd902a8bb60c8155c94/tumblr_o51oavbMDx1ugpbmuo4_540.png",
  "https://66.media.tumblr.com/ee9b9564d7e54380837579452cde04f6/tumblr_o51oavbMDx1ugpbmuo5_540.png",
  "https://66.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_540.png",
  "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_540.png"
];

class BlogsShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.blogId);
    document.querySelector(".blog-show-header-image-div").style.background = `url(${BACKGROUNDS[(this.props.match.params.blogId * 50) % BACKGROUNDS.length]})`;
    document.querySelector(".blog-show-avatar-circle").style.backgroundImage = `url(${AVATARS[(this.props.match.params.blogId * 50) % AVATARS.length]})`;
  }

  renderLogoutDemoButton() {
    if (this.props.currentUser) {
      return (<LogoutButton />)
    } else {
      return (<DemoButton />)
    }
  }

  render() {

    console.log("~~~~~~~~~~~~~~~~~~~~~")
    console.log(this.props.blog)
    console.log("~~~~~~~~~~~~~~~~~~~~~")

    let 
      deleteButton,
      description, 
      blogAuthor, 
      createdAt, 
      authorId, 
      author, 
      title, 
      month, 
      year, 
      pass,
      day
    ;
    
    if (this.props.blog) {
      description = this.props.blog.description;
      authorId = this.props.blog.author_id;
      title = this.props.blog.title;
      
      this.props.requestUser(authorId);

      author = this.props.blog.user.username[0].toUpperCase() + this.props.blog.user.username.slice(1).toLowerCase();
      createdAt = this.props.blog.created_at;

      [month, year, day] = [createdAt.slice(5, 7), createdAt.slice(0, 4), createdAt.slice(8, 10)];
      
      pass = this.props.blog.user.password_digest;
      deleteButton = null;
      
      if (this.props.currentUser && (authorId === this.props.currentUser.id)) {
        deleteButton = <Link onClick={() => {
          this.props.deleteBlog(this.props.match.params.blogId);
        }} to="/">delete blog</Link>
      }
    }

    return (
      <div className="blog-show-main-div">
        { this.renderLogoutDemoButton() }
        < SearchField />
        <div className="blog-show-header-image-div"></div>
        <div className="blog-show-avatar-circle"></div>
        <div className="blog-header">
          <h2 className="blog-show-title">{title}</h2>
          <p className="blog-show-subtitle">{description}</p>
          <p className="blog-show-credits">Created by {author} on {month}/{day}/{year}</p>
        </div>
        <div className="single-blog-show">
          <PostsIndexContainer />
          { deleteButton }
        </div>
      </div>
    );
  }
};

export default BlogsShow;