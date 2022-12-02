import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <>
      <nav id="navbar">
        <ul className="menu">
          <li id="logo" >
            <div id="log"></div>
          </li>
          <li id="trigram" tabIndex={-1} title="">
            <div>☰</div>
          </li>
          <span id="responsive-menu">
            <ul className="menu" id="uid">
              <li className="menu-option">
                <a href="#Home">
                  <p>Home</p>
                </a>
              </li>
              <li className="menu-option">
                <a href="#Features">
                  <p>About</p>
                </a>
                <ul id="products"></ul>
              </li>
              <li className="menu-option">
                <a href="#Features">
                  <p>Features</p>
                </a>
              </li>
              <li className="menu-option">
                <a href="#Pricing">
                  <p>Pricing</p>
                </a>
              </li>
              <li className="menu-option">
                <a href="#Testimonial-Section">
                  <p>Testimonials</p>
                </a>
              </li>
              <li className="menu-option">
                <a href="#Help-wrapper">
                <p>Help</p></a>
              </li>
              <li id="sign">
                <p>Sign in</p>
              </li>
              <li id="sign-up">
                <button type="button" id="sup">
                  Sign Up
                </button>
              </li>
            </ul>
          </span>
        </ul>
      </nav>
    </>
  );
}
