import React from 'react';
import "./About.css";

export default () => {
  return (
    <div className="container">
      <h1 className="display-4">About SpaceBar</h1>
      <p className="lead">The Social Media Site for Techies</p>
      <p>SpaceBar is a valuable networking tool for coders to connect in other ways than discussing coding issues.
        Other coder "networks" allow sharing of coding issues but do not promote networking to identify potential collaborators on projects, meetups, speaking engagement, etc.</p>

      <ul className="text-left fa-ul">
        <li><i className="fa-li fa fa-check"></i>User Authentication</li>
        <li><i className="fa-li fa fa-check"></i>Customizable Profiles</li>
        <li><i className="fa-li fa fa-check"></i>News feed</li>
        <li><i className="fa-li fa fa-check"></i>A Blog Feature</li>
        <li><i className="fa-li fa fa-check"></i>Responsive Design</li>
      </ul>

      <ul className="text-left">Contributors
        <li>Jenni - Express, Routing, Mongoose, MongoDB, React Routes/Context UI</li>
        <li>Randy - Front End Design</li>
        <li>Mathieu - Backend/User Authentication, Quality Control</li>
        <li>Shetia - Backend/Frontend News Feed, Blog, Presentation</li>
      </ul>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};

