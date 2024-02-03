import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <nav>
          <ul className={showNav ? "mobile-nav" : "flex"}>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>services</Link>
            </li>
            <li>
              <Link to={"/places"}>places</Link>
            </li>
            <li>
              <Link to={"/prices"}>pricing</Link>
            </li>
            <li>
              <Link>contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex list">
          <h3>
            <span>0</span> My List
          </h3>
          <button>sign in</button>
        </div>

        <div className="phone-menu">
          <button
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <IoMenu size={25}></IoMenu>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
