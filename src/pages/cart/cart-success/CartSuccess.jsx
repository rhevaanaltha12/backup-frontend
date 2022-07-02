import React from "react";
import Logo from "../../../assets/success.png";
import "./CardSuccess.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function CartSuccess() {
  const { id } = useParams();
  const storage = JSON.parse(localStorage.getItem("user"));
  const { jwt } = storage;
  const navigate = useNavigate();
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    }
  }
  const data = {
    data: {
      transaction: id
    }
  }

  const confirmPaymentHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:1337/api/transactions/confirm",
        data,
headers
      )
      .then((respon) => {
        console.log(respon);
        // const transactionId = respon.data.data.id;

        alert("Success");
        navigate(`/payment-success`);
      })
      .catch(function (error) {
        console.log(error);

        alert("Failure");
      });
  }

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
                    onClick={confirmPaymentHandler}
                  >
                    Confirm Payment
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-shopping"
                  >
                    My Dashboard
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
