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
import "./GadgetCategory.css";
import useFetch from "../../../utils/useFetch";
export default function GadgetCategory() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?filters[categories][name][$eq]=Smartphone"
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data.data);
  return (
    <div>
      <Navbar />
      <section id="gadget-category">
        <div className="container">
          <div className="row">
            <h1 className="new-product">Smartphone</h1>
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
            {/* <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <img src={Produk2} className="img-fluid" alt="" />
                  <div className="card-title">MacBook Pro M1</div>
                  <div className="card-price">Rp. 35.300.000</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <img src={Produk3} className="img-fluid" alt="" />
                  <div className="card-title">Laptop Asus</div>
                  <div className="card-price">Rp. 11.500.000</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <img src={Produk4} className="img-fluid" alt="" />
                  <div className="card-title">Laptop Lenovo</div>
                  <div className="card-price">Rp. 11.000.000</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <img src={Produk5} className="img-fluid" alt="" />
                  <div className="card-title">AMD Ryzen</div>
                  <div className="card-price">Rp. 12.300.000</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <img src={Produk6} className="img-fluid" alt="" />
                  <div className="card-title">Monitor Xiaomi</div>
                  <div className="card-price">Rp. 6.000.000</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <img src={Produk7} className="img-fluid" alt="" />
                  <div className="card-title">Iphone 8</div>
                  <div className="card-price">Rp. 7.500.000</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card">
                <div className="card-body">
                  <img src={Produk8} className="img-fluid" alt="" />
                  <div className="card-title">Keyboard Fantech</div>
                  <div className="card-price">Rp. 300.000</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
