import React, { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";
import { Link } from "react-router-dom";
import "./ListAll.css";
import Navbar from "../../components/Home/Navbar/Navbar";
import axios from "axios";

export default function ListAll() {
  // const [dataList, setDataList] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:1337/api/products");
  //       setDataList(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log(dataList);

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data.data);

  return (
    <div>
      <Navbar />
      <section id="list-all">
        <div className="container">
          <div className="row">
            <h1 className="new-product">All Product</h1>
            {data.data.map((value) => (
              <div className="col-md-3 mx-auto">
                <Link
                  to={`/detail-product/${value.id}`}
                  params={{ test: "test" }}
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
