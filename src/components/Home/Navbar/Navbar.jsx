import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link to="/" className="navbar-brand my-auto" href="#">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to={"/categories"}>
                Categories
              </Link>
              <a className="nav-link" href="#">
                Reward
              </a>
              <Link className="nav-link" to="/register">
                Sign Up
              </Link>
              <Link to="/login">
                <button type="button" class="btn btn-primary">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
