import React from "react";
import "./common.css";
import { Link } from "react-router-dom";

const ExItems = ["Redux", "Hook", "State", "Props"];

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2> <Link to={"/"}>DevManish</Link> </h2>
      </div>
      <div className="items">
        <ul className="items">
          <li className="nav_item">
            <Link to="/profile">My Profile</Link>
          </li>
          <li className="nav_item">
            <Link to="/skills">Skills</Link>
          </li>
          <div className="dropdown">
            <button className="dropbtn">Practical Exercise</button>
            <div className="dropdown-content">
              <Link to="/exercise/intro">What is React.</Link>
              <Link to="/exercise/components">React Components.</Link>
              <Link to="/exercise/state">React State.</Link>
              <Link to="/exercise/props">React Props.</Link>
              <Link to="/exercise/routing">Routing in React.</Link>
              <Link to="/exercise/hooks">Hooks in React.</Link>
              <Link to="/exercise/context-api">Context API.</Link>
              <Link to="/exercise/event-handling">React Event Handling.</Link>
              <Link to="/exercise/api">API Call in React.</Link>
              <Link to="/exercise/redux">Redux in React.</Link>
            </div>
          </div>
          <li className="nav_item">
            <Link to="/about">About Me</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
