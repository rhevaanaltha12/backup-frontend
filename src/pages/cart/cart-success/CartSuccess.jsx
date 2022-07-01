import React from "react";
import Logo from "../../../assets/success.png";
import "./CardSuccess.css";
export default function CartSuccess() {
  return (
    <div>
      <section id="cart-success">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card text-center">
                <div className="card-body">
                  <img className="img-fluid" src={Logo} alt="" />
                  <div className="card-subtitle">Transaction Processed!</div>
                  <div className="card-title">
                    Silahkan tunggu konfirmasi email dari kami dan kami akan
                    menginformasikan resi secept mungkin!
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
