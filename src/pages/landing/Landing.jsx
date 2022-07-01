import React, { useState, useEffect } from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Landing.css";
import Carousel from "../../components/Home/Carousel/Carousel";
import TrenCategories from "../../components/Home/TrendCategories/TrenCategories";
import NewProducts from "../../components/Home/NewProducts/NewProducts";
import Footer from "../../components/Home/Footer/Footer";

import axios from "axios";
export default function Landing() {
  return (
    <div>
      <section id="landing">
        <Navbar />
        <div className="container">
          <div className="row">
            <Carousel />
            <TrenCategories />
            <NewProducts />
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
