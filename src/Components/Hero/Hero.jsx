import React from "react";
import { IoSearch } from "react-icons/io5";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Search Your Next Home</h1>
          <p>Find new & featured property located in your local city.</p>
        </div>

        <form className="flex">
          <div className="form-item">
            <span>City/Street</span>
            <input type="text" placeholder="location" />
          </div>
          <div className="form-item">
            <span>Property Type</span>
            <input type="text" placeholder="Property Type" />
          </div>
          <div className="form-item">
            <span>Price Range</span>
            <input type="text" placeholder="Price Range" />
          </div>
          <div className="form-item">
            <h3>Advance Filter</h3>
          </div>
          <button className="btn">
            <IoSearch size={16}></IoSearch>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
