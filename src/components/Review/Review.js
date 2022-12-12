import React from "react";
import "./Review.css";
import P1 from "../asserts/p1.png"
import P2 from "../asserts/p2.png"
import P3 from "../asserts/p3.png"

export const Review = () => {


  return (
    <div>
      <div className="x-el x-el-div c1-1 c1-2 c1-cj c1-b c1-c c1-d c1-4i c1-e c1-f c1-g snipcss-CsKjs">
        {/* <h2
          aria-level={2}
          data-aid="REVIEWS_SECTION_TITLE_RENDERED"
          data-font-scaled="true"
          className="x-el c1-1 c1-2 c1-2t c1-2i c1-2c c1-r c1-2g c1-b c1-52 c1-49 c1-57 c1-58 c1-59"
        >
          Reviews
        </h2> */}
        
        <div className="testimonials">
        <div className="inner">
          <h1>Reviews</h1>
          <div className="border" />
          <div className="row">
            <div className="col">
              <div className="testimonial">
                <img src={P1} alt="" />
                <div className="name">Full name</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="col">
              <div className="testimonial">
                <img src={P2} alt="" />
                <div className="name">Full name</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="col">
              <div className="testimonial">
                <img src={P3} alt="" />
                <div className="name">Full name</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      </div>
   
    </div>
  );
};
