import React from "react";
import Hero from "../../../assets/Hero.png";
export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Hero} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
