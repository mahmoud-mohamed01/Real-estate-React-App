import React from "react";
import "./FeaturedAgents.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import { team } from "../data/Data";

function FeaturedAgents() {
  return (
    <section className="featured-agents">
      <div className="container">
        <div className="heading">
          <h1>Our Featured Agents</h1>
          <p>Find out our featured agents located in your local city.</p>
        </div>
        <div className="agent-grid">
          {team.map((t, idx) => {
            return (
              <div className="agent-card" key={idx}>
                <button className="btn list-btn ">{t.list} Listing</button>
                <div className=" flex agent-details">
                  <div className="agent-img">
                    <img src={t.cover} alt="" />
                  </div>
                  <p>{t.address}</p>
                  <h4>{t.name}</h4>
                  <div className="flex agent-icons">
                    <FaFacebook size={20}></FaFacebook>
                    <FaInstagram size={20}></FaInstagram>
                    <FaLinkedin size={20}></FaLinkedin>
                  </div>
                  <div className="flex ">
                    <button className="btn">
                      Message
                      <MdMessage size={20}></MdMessage>
                    </button>
                    <button className="btn call-btn">
                      <BsFillTelephoneFill size={20}></BsFillTelephoneFill>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedAgents;
