import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../../assets/Detail.png";
import useFetch from "../../utils/useFetch";
import "./Detail.css";
export default function Detail() {
  const { id } = useParams();
  const [produk, setProduk] = useState({});
  const storage = JSON.parse(localStorage.getItem("user"));
  const { jwt } = storage;
  const [item, setItem] = useState([]);

  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/products/${id}`
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data.data);

  const checkoutHandler = (e) => {
    console.log(`JWT: ${jwt}`);
    e.preventDefault();
    axios
      .post(
        "http://localhost:1337/api/cart-items",
        {
          data: {
            product: data.data.id,
            count: 1,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response);

        alert("Success");
      })
      .catch(function (err) {
        console.log(err);

        alert("Failure");
      });
  };

  return (
    <div>
      <section id="detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <img
                src={data.data.attributes.image}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6 my-auto">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">{data.data.attributes.name}</div>
                  <div className="card-price">{data.data.attributes.price}</div>
                  <div className="card-description">
                    {data.data.attributes.description}
                  </div>
                  {/* <Link to="/cart"> */}
                  <button
                    type="submit"
                    onClick={checkoutHandler}
                    className="btn btn-primary btn-checkout"
                  >
                    Checkout
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
          ;
        </div>
      </section>
    </div>
  );
}
