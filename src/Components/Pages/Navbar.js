import "./Navbar.css";
import { Nav } from "react-bootstrap";
import { UserContext } from "../../index";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { user } = useContext(UserContext);
  if (user !== null) {
    return (
      <>
        <Nav className="nav">
          <Link to="/" className="site-title">
            Site Name
          </Link>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/UserList">User list</Link>
            </li>
            <li>
              <Link to="/LoggOut">Logout user: {user} </Link>
            </li>
          </ul>
        </Nav>
      </>
    );
  } else if (user === null) {
    return (
      <>
        <Nav className="nav">
          <Link to="/" className="site-title">
            React Router Task
          </Link>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/UserList">User list</Link>
            </li>
            <li>
              <Link to="/Loggin">Login</Link>
            </li>
          </ul>
        </Nav>
      </>
    );
  }
}

export default Navbar;
