import React from "react";
import "./style.css";

export default function Homepag() {
  return (
    <>
      <section id="Home">
        <div id="container">
          <div className="wrapper1">
            <div className="c-head">
              <div id="text-Wrapper">
                <div id="head-wrapper">
                  <h2 id="t-hed">
                    <span id="f-wing">Want anything to be easy with</span>
                    <span id="head-wrap">&nbsp;LaslesVPN.</span>
                  </h2>
                </div>
                <div id="head-content">
                  Provide a network for all your needs with ease and fun using
                  <span id="rough-hard">LaslesVPN</span> discover interesting
                  features from us.
                </div>
                <div id="Get-start">
                  <button type="button" id="Get-button">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="c-head">
              <div id="head-image"></div>
            </div>
          </div>
        </div>
        <div id="menu-list">
          <div className="wrapper-Content">
            <section className="columns">
              <div className="column" id="menu1">
                <div className="icons">
                  <div id="icon1" className="figure-icon"></div>
                  <div className="figure-content">
                    <span className="menu-heading">90+</span>
                    <p className="span-value">Users</p>
                  </div>
                </div>
              </div>
              <div className="column" id="menu2">
                <div className="icons">
                  <div id="icon2" className="figure-icon"></div>
                  <div className="figure-content">
                    <span className="menu-heading">30+</span>
                    <p className="span-value">Locations</p>
                  </div>
                </div>
              </div>
              <div className="column" id="menu3">
                <div className="icons">
                  <div id="icon3" className="figure-icon"></div>
                  <div className="figure-content">
                    <span className="menu-heading">50+</span>
                    <p className="span-value">Servers</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
