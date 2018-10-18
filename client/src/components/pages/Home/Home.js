import React, { Component } from 'react';
import Articles from '../../articles/Articles';
import ChatApp from '../../ChatApp/ChatApp';
import "./Home.css";
import Blog from '../Blog/Blog';
import Profile from '../Profile/Profile';
import UsernameForm from '../../ChatApp/UsernameForm';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row text-center mx-auto mt-2">
          {/* Profile */}
          <div id="profile-section" className="col-md-2 container">
            <h6 className="app-display-4">User Profile</h6>
          <Profile></Profile>
          </div>
          {/* News Feed */}
          <div id="newsfeed-section" className="col-md-3 home">
            <h6 className="app-display-4">Latest News</h6>
            <Articles></Articles>
          </div>
          {/* Blog */}
          <div id="blog-section" className="col-md-3 container">
            <h6 className="app-display-4">Posts</h6>
            <Blog></Blog>

          </div>
          {/* Chat */}
          <div id="chat-section" className="col-md-2 container">
            <h6 className="app-display-4">Trending/Chat</h6>
            <ChatApp></ChatApp>
            {/* <UsernameForm></UsernameForm> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;