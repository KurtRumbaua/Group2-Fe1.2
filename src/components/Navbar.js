import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbarstyles.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Member #1
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/ellis">
              Member #2
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/clyde">
              Member #3
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/jan">
              Member #4
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/arjay">
              Member #5
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/von">
              Member #6
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
