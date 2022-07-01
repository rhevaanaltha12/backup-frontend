import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Home/Navbar/Navbar";
import useFetch from "../../../utils/useFetch";
import "./Mouse.css";

export default function Mouse() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?filters[categories][name][$eq]=Mouse"
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data.data);
  return (
    <div>
      <Navbar />
      <section id="mouse-category">
        <div className="container">
          <div className="row">
            <h1 className="new-product">Mouse</h1>
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
