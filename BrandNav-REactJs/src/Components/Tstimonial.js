import React, { useState } from "react";

import "./style.css";
import { review } from "./DummyData";

export default function Tstimonial() {
  const [itemIndex, setItemIndex] = useState(1);

  const prevClick = () => {
    console.log("item index===>", itemIndex);
    if (itemIndex == 1) {
      setItemIndex(review.length - 2);
      console.log("ggg==>", itemIndex);
    } else {
      setItemIndex(itemIndex - 3);
      console.log("hhhh", itemIndex);
    }
  };

  const nextClick = () => {
    if (itemIndex == review.length - 2) {
      setItemIndex(1);
      console.log(itemIndex);
    } else {
      console.log(itemIndex);
      setItemIndex(itemIndex + 3);
    }
  };

  return (
    <>
      <section id="Testimonial-Section">
        <div className="container-wrapper">
          <h4>
            Trusted by Thousands of <br /> Happy Customer
          </h4>
          <p id="Sub-Content">
            These are the stories of our customers who have joined us with great
            <br /> pleasure when using this crazy feature.
          </p>
          <div className="Slider">
            <section id="testimonials">
              <div className="testimonial-box-container">
                {review.map((item, key) => (
                  <>
                    <div
                      className={
                        key + 1 === itemIndex || key + 1 === itemIndex + 1 || key + 1 === itemIndex + 2 ? "testimonial-box" : "nbox"
                      }
                    >
             
                      <div className="box-top">
              
                        <div className="profile">
                  
                          <div className="profile-img">
                            <img src={`./images/${item.priimg}`} alt="" />
                          </div>
                      
                          <div className="name-user">
                            <strong>{item.name}</strong>
                            <span>{item.place}</span>
                          </div>
                        </div>
              
                        <div className="reviews">
                          <strong id="rating">4.5</strong>

                          <i className="fas fa-star" />

                     
                        </div>
                      </div>
                   
                      <div className="client-comment">
                        <p>“{item.description}”.</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </section>
          </div>
          <div className="control-pointers">
            <div id="positions">
							<div id="control-pointers-pos-1">
								
							</div>
							<div id="control-pointers-pos-2">
								
							</div>
							<div id="control-pointers-pos-2">
								
							</div>
							<div id="control-pointers-pos-2">
								
							</div>

						</div>
            <div id="controller">
              <div id="arrow-left" className="arrows" onClick={prevClick}>
							<i class="fa fa-arrow-right" id="arrow" ></i>
              </div>
              <div id="arrow-right" className="arrows" onClick={nextClick}>
							<i class="fa fa-arrow-left" id="arrow" ></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
