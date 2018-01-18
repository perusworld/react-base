import React from "react";
import { NavLink } from "react-router-dom";
import './DefaultLayout.css';

export class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="mainNav">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerMain" aria-controls="navbarTogglerMain" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">React - Base</a>
              <div className="collapse navbar-collapse" id="navbarTogglerMain">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/home"} activeClassName={"active"}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/settings"} activeClassName={"active"}>Settings</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/logout"} activeClassName={"active"}>Logout</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
