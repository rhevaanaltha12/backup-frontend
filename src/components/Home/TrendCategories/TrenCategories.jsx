import React from "react";
import Gadget from "../../../assets/Gadget.svg";
import "./TrendCategories.css";
import { Link } from "react-router-dom";
import useFetch from "../../../utils/useFetch";
export default function TrenCategories() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/categories?populate=image"
  );
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  console.log(data.data);
  return (
    <div>
      <section id="trend-categories">
        <div className="container">
          <div className="row">
            <h1 className="trend-title">Trend Categories</h1>
            {data.data.map(
              (value, index) =>
                index < 4 && (
                  <div className="col-md-3 mx-auto mt-4">
                    <Link
                      to={"/" + value.attributes.name}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="card">
                        <div className="card-body">
                          <center>
                            <img
                              className="img-fluid "
                              style={{ width: "25%" }}
                              src={`http://localhost:1337${value.attributes.image.data.attributes.url}`}
                              alt=""
                            />
                          </center>
                          <div className="card-title text-center">
                            {value.attributes.name}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
            )}
            {/* <div className="col-md-2 mx-auto">
              <Link to="/laptop" style={{ textDecoration: "none" }}>
                <div className="card">
                  <div className="card-body">
                    <center>
                      <img className="img-fluid " src={Laptop} alt="" />
                    </center>
                    <div className="card-title text-center">Laptop</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-2 mx-auto">
              <Link to="/computer" style={{ textDecoration: "none" }}>
                <div className="card">
                  <div className="card-body">
                    <center>
                      <img className="img-fluid " src={Computer} alt="" />
                    </center>
                    <div className="card-title text-center">Computer</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-2 mx-auto">
              <Link to="/aksesoris" style={{ textDecoration: "none" }}>
                <div className="card">
                  <div className="card-body">
                    <center>
                      <img className="img-fluid " src={Aksesoris} alt="" />
                    </center>
                    <div className="card-title text-center">Aksesoris</div>
                  </div>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
