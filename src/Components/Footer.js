import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <>
     
      <div className="footer">
        <div className="contain">
          <div className="col" id="logoportion">
            <h5>
              <div id="footlogo"></div>
            </h5>

            <li id="idi">
              <div id="footcnt">
                <span id="foothead">LaslesVPN </span>is a private virtual
                network that has unique features and has high security.
              </div>{" "}
            </li>

            <div className="col social" id="setcontents">
              <div id="figures">
                <li id="idi" className="set1"></li>
                <li id="idi" className="set2"></li>
                <li id="idi" className="set3"></li>
                <div id="watermark">
                  <p id="stylewatermark">©2020LaslesVPN</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" id="prod">
            <h5>Product</h5>
            <div>
              <li id="idi">Download </li>
              <li id="idi">Pricing</li>
              <li id="idi">Locations</li>
              <li id="idi">Server</li>
              <li id="idi">Countries</li>
              <li id="idi">Blog</li>
            </div>
          </div>
          <div className="col" id="engage">
            <h5>Engage</h5>
            <div>
              <li id="idi">LaslesVPN ? </li>
              <li id="idi">FAQ</li>
              <li id="idi">Tutorials</li>
              <li id="idi">About Us</li>
              <li id="idi">Privacy Policy</li>
              <li id="idi">Terms of Service</li>
            </div>
          </div>
          <div className="col" id="prodt">
            <h5>Earn Money</h5>
            <div>
              <li id="idi">Affiliate</li>
              <li id="idi">Become Partner</li>
            </div>
          </div>

          <div className="clearfix" />
        </div>
      </div>
     
    </>
  );
}
