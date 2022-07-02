import React from "react";
import { Link } from "react-router-dom";
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
                  <div className="card-subtitle">
                    Selamat! Pembayaran Berhasil
                  </div>
                  <div className="card-title">
                    Terima kasih sudah berberlanja di toko kami. Sehat selalu
                    dan terus update barang barang terbaru.
                  </div>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-primary btn-dashboard"
                    >
                      Kembali ke Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
