import React, { useContext, useState } from "react";
import Image from "../../../assets/pic1.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Home/Navbar/Navbar";
import Footer from "../../../components/Home/Footer/Footer";
import axios from "axios";
import { AuthContext } from "../../../utils/context/AuthContext";
export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const identifierOnChange = (e) => {
    setIdentifier(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: identifier,
        password: password,
      })
      .then((response) => {
        // localStorage.setItem("data", response.data);
        // console.log(response.data);
        const user = response.data;
        dispatch({
          type: "LOGIN",
          payload: user,
        });
        alert("berhasil login");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("login gagal");
      });
  };

  return (
    <div>
      <Navbar />
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5 d-none d-lg-block mx-auto my-auto">
                      <img src={Image} alt="" />
                    </div>
                    <div className="col-md-5 mx-auto my-auto">
                      <div className="card-title">
                        Belanja kebutuhan utama, menjadi lebih mudah
                      </div>
                      <form onSubmit={handleLogin}>
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={identifierOnChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            for="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={passwordOnChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-submit"
                        >
                          Submit
                        </button>
                      </form>
                      <div className="signup-title text-center">
                        Don't have an account?{" "}
                        <Link to="/register" style={{ textDecoration: "none" }}>
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
