import React from "react";
import { awards } from "../data/Data";
import "./Awards.css";
import { FaAward } from "react-icons/fa6";

function Awards() {
  return (
    <section className="awards">
      <div className="container">
        <div className="heading">
          <p>Our Awards</p>
          <h1>
            Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
          </h1>
        </div>

        <div className="awards-grid">
          {awards.map((award, idx) => {
            return (
              <div className="award-item" key={idx}>
                <div className="award-icon">
                  <span>
                    <FaAward size={60}></FaAward>
                  </span>
                </div>
                <h1>{award.num}</h1>
                <p>{award.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Awards;
