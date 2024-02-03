import React from "react";
import "./Explore.css";
import { location } from "../data/Data";

function Explore() {
  return (
    <section className="explore">
      <div className="container">
        <div className="heading">
          <h1>Explore By Location</h1>
          <p>Find new & featured property located in your local city.</p>
        </div>
        <div className="explore-grid">
          {location.map((l, idx) => {
            return (
              <div className="explore-img" key={idx}>
                <img src={l.cover} alt="" />
                <p>{l.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Explore;
