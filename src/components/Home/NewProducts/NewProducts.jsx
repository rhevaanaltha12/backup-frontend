import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewProducts.css";
import axios from "axios";
import useFetch from "../../../utils/useFetch";

export default function NewProducts() {
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
      <section id="new-products">
        <div className="container">
          <div className="row">
            <h1 className="new-product">New Poduct</h1>
            {data.data.map(
              (value, index) =>
                index < 8 && (
                  <div className="col-md-3 mx-auto">
                    <Link
                      to={`/detail-product/${value.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="card">
                        <div className="card-body">
                          <img
                            src={value.attributes.image}
                            className="img-fluid"
                            alt=""
                          />
                          <div className="card-title">
                            {value.attributes.name}
                          </div>
                          <div className="card-price">
                            Rp. {value.attributes.price}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
            <Link to="/all-product">
              <button type="button" className="btn btn-primary">
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
