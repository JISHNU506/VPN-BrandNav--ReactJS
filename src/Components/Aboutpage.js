import React from "react";

import "./style.css";

export default function Aboutpage() {
  return (
    <>
      <section id="Features">
        <div id="container">
          <div className="cardsforcontainer">
            <div className="card1">
              <div id="image-container"></div>
            </div>
            <div className="card1">
              <div id="text-container">
                <div id="text-head">
                  <h4>We Provide Many Features You Can Use</h4>
                </div>
                <div id="sub-contents">
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                  <br />
                  <div id="points">
                    <div id="point-mark"></div>
                    <span id="alighn">
                      &nbsp;&nbsp; Powerfull online protection.
                    </span>
                  </div>
                  <div id="points">
                    <div id="point-mark"></div>
                    <span id="alighn">
                      &nbsp;&nbsp; Internet without borders.
                    </span>
                  </div>
                  <div id="points">
                    <div id="point-mark"></div>
                    <span id="alighn">&nbsp;&nbsp; Supercharged VPN</span>
                  </div>
                  <div id="points">
                    <div id="point-mark"></div>
                    <span id="alighn">
                    
                      &nbsp;&nbsp;No specific time limits.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
