import React from "react";
import "./allpages.css";

const Profile = () => {
  return (
    <div className="myProfile">
      <h1 className="head-text">My Profile</h1>
      <img className="code-mks" src="/mkg.png" alt="profile" />
      <h2>Hello!</h2>
      <h3>My Name Is Manish Kumar.</h3>
      <p className="intro">
        I am a Web &amp; App Developer. I love to build dynamic webapps.
      </p>
    </div>
  );
};

export default Profile;
