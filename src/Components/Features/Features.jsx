import React from "react";
import { featured } from "../data/Data";
import "./Features.css";
function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-text">
          <h1>Search Your Next Home</h1>
          <p>Find new & featured property located in your local city.</p>
        </div>
        <div className="fetures-gird">
          {featured.map((f) => {
            return (
              <div className="feaure-card">
                <img src={f.cover} alt="" />
                <h3>{f.name}</h3>
                <p>{f.total}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
