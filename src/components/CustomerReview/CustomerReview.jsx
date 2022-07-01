import React from "react";
import Review1 from "../../assets/review1.png";
import Review2 from "../../assets/review2.png";
import Review3 from "../../assets/review3.png";
import "./CustomerReview.css";
export default function CustomerReview() {
  return (
    <div>
      <section id="customer-review">
        <div className="container">
          <div className="row">
            <h1 className="review-text">Customer Review (3)</h1>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2 me-auto my-auto">
                    <img src={Review1} alt="" />
                  </div>
                  <div className="col-md-8 me-auto my-auto">
                    <div className="review-name">Hazza Risky</div>
                    <div className="review-description">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2 me-auto my-auto">
                    <img src={Review2} alt="" />
                  </div>
                  <div className="col-md-8 me-auto my-auto">
                    <div className="review-name">Anna Sukkirata</div>
                    <div className="review-description">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like
                      readable English.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2 me-auto my-auto">
                    <img src={Review3} alt="" />
                  </div>
                  <div className="col-md-8 me-auto my-auto">
                    <div className="review-name">Hanifa Aura</div>
                    <div className="review-description">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
