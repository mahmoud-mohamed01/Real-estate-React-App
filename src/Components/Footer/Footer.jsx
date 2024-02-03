import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="./images/logo-light.png" alt="" />
        <div className="icons">
          <FaFacebook size={25}></FaFacebook>
          <FaInstagram size={25}></FaInstagram>
          <FaLinkedin size={25}></FaLinkedin>
        </div>
      </div>

      <div className="links-box">
        <div className="link-list">
          <ul>
            <li>Home</li>
            <li> Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="link-list">
          <ul>
            <li>Carrers</li>
            <li>Community</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="search">
        <div>
          <input type="text" placeholder="search" />
          <button>Go</button>
        </div>
        <p>Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
