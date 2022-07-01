import React from "react";
import Logo from "../../../assets/success.png";
import "./Success.css";
export default function Success() {
  return (
    <div>
      <section id="success">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card text-center">
                <div className="card-body">
                  <img className="img-fluid" src={Logo} alt="" />
                  <div className="card-subtitle">Welcome to Store</div>
                  <div className="card-title">
                    Kamu sudah berhasil terdaftar bersama kami. Let’s grow up
                    now.
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-dashboard"
                  >
                    My Dashboard
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-shopping"
                  >
                    Go To Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
