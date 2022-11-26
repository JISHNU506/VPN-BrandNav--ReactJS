import React from "react";
import "./style.css";

export default function Featurespage() {
  return (
    <>
      <section id="Pricing">
        <div id="container">
          <h4>Choose Your Plan</h4>
          <p id="Sub-Content">
            Let's choose the package that is best for you and explore it happily
            and <br />
            cheerfully.
          </p>

          <div className="pros">
            <div className="pro">
              <div id="gift"></div>
              <div id="plans">
                <h5>Free Plan</h5>
                <div id="content">
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Unlimited Bandwitch</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Encrypted Connection</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">No Traffic Logs</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Unlimited Bandwitch</div>
                  </div>
                </div>

                <p id="cost">free</p>
                <div>
                  <button type="button" id="btn1">
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className="pro">
              {" "}
              <div id="gift"></div>
              <div id="plans">
                <h5>Standard Plan</h5>
                <div id="content">
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Unlimited Bandwitch</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Encrypted Connection</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Yes Traffic Logs</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Works on All Devices</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Connect Anyware</div>
                  </div>
                </div>
                <p id="cost">
                  $12 <span id="gap"> /&nbsp; mo</span>
                </p>
                <div>
                  <button type="button" id="btn1">
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className="pro">
              {" "}
              <div id="gift"></div>
              <div id="plans">
                <h5>Premium Plan</h5>
                <div id="content">
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Unlimited Bandwitch</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Encrypted Connection</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Yes Traffic Logs</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Works on All Devices</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Connect Anyware</div>
                  </div>
                  <div className="point-Container">
                    <div className="pointer-image"></div>
                    <div id="pointer-Content-sub">Get New Features</div>
                  </div>
                </div>
                <p id="cost">
                  $12 <span id="gap"> /&nbsp; mo</span>
                </p>
                <div>
                  <button type="button" id="btn1">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
