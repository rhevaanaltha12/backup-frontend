import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/Detail.png";
import "./Detail.css";
export default function Detail(props) {
  console.log(props);
  return (
    <div>
      <section id="detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <img src={Image} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6 my-auto">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">Apple Watch 49</div>
                  <div className="card-price">Rp. 5.400.000</div>
                  <div className="card-description">
                    Apple Watch adalah perangkat smart watch yang hadir sebagai
                    perpanjangan tangan dari iPhone-mu.
                  </div>
                  <Link to="/cart">
                    <button
                      type="submit"
                      className="btn btn-primary btn-checkout"
                    >
                      Checkout
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
