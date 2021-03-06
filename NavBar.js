import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/StuedntList">StudentList</Link>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
