import React from "react";
import Produk1 from "../../../assets/Produk1.png";
import Produk2 from "../../../assets/Produk2.png";
import Produk3 from "../../../assets/Produk3.png";
import Produk4 from "../../../assets/Produk4.png";
import Produk5 from "../../../assets/Produk5.png";
import Produk6 from "../../../assets/Produk6.png";
import Produk7 from "../../../assets/Produk7.png";
import Produk8 from "../../../assets/Produk8.png";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Home/Navbar/Navbar";
import "./LaptopCategory.css";
import useFetch from "../../../utils/useFetch";
export default function LaptopCategory() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?filters[categories][name][$eq]=Laptop"
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data.data);
  return (
    <div>
      <Navbar />
      <section id="laptop-category">
        <div className="container">
          <div className="row">
            <h1 className="new-product">Laptop</h1>
            {data.data.map((value) => (
              <div className="col-md-3 mx-auto">
                <Link
                  to={"/detail-product/" + value.id}
                  style={{ textDecoration: "none" }}
                >
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
