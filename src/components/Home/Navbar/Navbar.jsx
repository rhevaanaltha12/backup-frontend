import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import { AuthContext } from "../../../utils/context/AuthContext";
import "./Navbar.css";
export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [isLogin, setIslogin] = useState(currentUser);
  const [identifier, setIdentifier] = useState("");
  const navigate = useNavigate();

  // const logoutClick = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get("http://localhost:1337/api/auth/local")
  //     .then((response) => {
  //       // localStorage.setItem("data", response.data);
  //       // console.log(response.data);
  //       const user = response.data;
  //       localStorage.setItem("user", user === null);
  //       alert("Logout Success");
  //       localStorage.getItem("user", user === null);
  //       navigate("/login");
  //       alert("berhasil logout");
  //       navigate("/login");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("logout gagal");
  //     });
  // };

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
              {!isLogin && (
                <div className="navbar-nav">
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                  <Link to="/login">
                    <button type="button" class="btn btn-primary">
                      Sign In
                    </button>
                  </Link>
                </div>
              )}

              {isLogin && (
                <div className="navbar-nav">
                  <button type="submit" class="btn btn-primary">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
