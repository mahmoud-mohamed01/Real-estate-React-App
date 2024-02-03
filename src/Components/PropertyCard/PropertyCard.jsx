import React from "react";
import "./PropertyCard.css";
import { FaHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function PropertyCard({ place }) {
  return (
    <div className="place-card">
      <div className="place-img">
        <img src={place.cover} alt="" />
      </div>
      <div className="category flex">
        <p
          style={{
            backgroundColor:
              place.category == "For Sale"
                ? "rgba(37, 181, 121, 0.1)"
                : "rgba(255, 152, 0, 0.1)",
          }}
        >
          {place.category}
        </p>
        <FaHeart cursor={"pointer"} size={20} color="grey"></FaHeart>
      </div>

      <div className="place-location">
        <h4>{place.name}</h4>
        <p>
          <IoLocationSharp size={18}></IoLocationSharp>
          {place.location}
        </p>
      </div>

      <hr color="gray" />

      <div className="flex place-price">
        <button className="btn">{place.price}</button>
        <p>{place.type}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
