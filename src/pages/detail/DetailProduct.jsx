import React from "react";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import Detail from "../../components/DetailProduk/Detail";
import Navbar from "../../components/Home/Navbar/Navbar";

export default function DetailProduct() {
  return (
    <div>
      <section id="detail-product">
        <div className="container">
          <div className="row">
            <Navbar />
            <Detail />
            <CustomerReview />
          </div>
        </div>
      </section>
    </div>
  );
}
