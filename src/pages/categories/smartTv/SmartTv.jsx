import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Home/Navbar/Navbar";
import useFetch from "../../../utils/useFetch";
import "./SmartTv.css";
export default function SmartTv() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?filters[categories][name][$eq]=Smart%20TV"
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data.data);
  return (
    <div>
      <Navbar />
      <section id="smarttv-category">
        <div className="container">
          <div className="row">
            <h1 className="new-product">Smart Tv</h1>
            {data.data.map((value) => (
              <div className="col-md-3 mx-auto">
                <Link to="/detail-product" style={{ textDecoration: "none" }}>
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={value.attributes.image}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-title">{value.attributes.name}</div>
                      <div className="card-price">
                        Rp. {value.attributes.price}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
