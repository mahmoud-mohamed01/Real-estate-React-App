import React from "react";
import "./RecentlyListed.css";
import { list } from "../data/Data";
import PropertyCard from "../PropertyCard/PropertyCard";

function RecentlyListed() {
  return (
    <section className="recent-listed">
      <div className="container">
        <div className="heading">
          <h1>Recent Property Listed</h1>
          <p>Find new & featured property located in your local city.</p>
        </div>

        <div className="recent-grid">
          {list.map((place) => {
            return <PropertyCard place={place}></PropertyCard>;
          })}
        </div>
      </div>
    </section>
  );
}

export default RecentlyListed;
