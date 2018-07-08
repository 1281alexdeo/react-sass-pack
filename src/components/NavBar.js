import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container ">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a href="/" className="navbar-brand">
          LoopLAB
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#explore" className="nav-link">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a href="#create" className="nav-link">
                Create
              </a>
            </li>
            <li className="nav-item">
              <a href="#share" className="nav-link">
                Share
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
