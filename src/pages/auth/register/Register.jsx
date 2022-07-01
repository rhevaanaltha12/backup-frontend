import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Home/Navbar/Navbar";
import Footer from "../../../components/Home/Footer/Footer";
export default function Register() {
  return (
    <div>
      <Navbar />
      <section id="register">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Create Account</div>
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <Link to="/success">
                      <button
                        type="submit"
                        className="btn btn-primary btn-register"
                      >
                        Sign Up Now
                      </button>
                    </Link>
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btn-primary btn-signin"
                      >
                        Back To Sign In
                      </button>
                    </Link>
                  </form>
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
