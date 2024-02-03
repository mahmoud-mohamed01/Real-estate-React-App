import React from "react";
import "./Price.css";
import PriceCard from "../PriceCard/PriceCard";

function Price() {
  return (
    <section className="price">
      <div className="container">
        <div className="heading">
          <h1>Select Your Package</h1>
          <p>Find out our prices Packages located in your local city.</p>
        </div>
        <div className="price-grid">
          <PriceCard></PriceCard>
          <PriceCard>
            <button className="btn">Best Offer</button>
          </PriceCard>
          <PriceCard></PriceCard>
        </div>
      </div>
    </section>
  );
}

export default Price;
