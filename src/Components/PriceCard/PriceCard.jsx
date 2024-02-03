import React from "react";
import "./PriceCard.css";
import { IoMdCheckmark } from "react-icons/io";

function PriceCard({ children }) {
  return (
    <div className="price-card">
      <div className="flex price-detail">
        {children}
        <h1 className="price-type">basic</h1>
        <h2>$29</h2>
        <h4>per user, per month</h4>
      </div>
      <div className="flex price-info">
        <div className="flex">
          <div>
            <IoMdCheckmark color="green"></IoMdCheckmark>
          </div>
          <p>99.5% Uptime Guarantee</p>
        </div>
        <div className="flex">
          <div>
            <IoMdCheckmark color="green"></IoMdCheckmark>
          </div>
          <p>99.5% Uptime Guarantee</p>
        </div>
        <div className="flex">
          <div>
            <IoMdCheckmark color="green"></IoMdCheckmark>
          </div>
          <p>99.5% Uptime Guarantee</p>
        </div>
        <button className="btn">Start </button>
      </div>
    </div>
  );
}

export default PriceCard;
