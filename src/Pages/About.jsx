import React from "react";
import Background from "../Components/Background/Background";
import "./pages.css";

function About() {
  return (
    <div className="about">
      <Background></Background>

      <div className="container">
        <div>
          <div className="heading">
            <h1>our agency story</h1>
            <p>Check out our company story and work process</p>
          </div>

          <div className="flex">
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur a, perferendis debitis dolor animi vero quae,
              recusandae distinctio quibusdam iure placeat totam! Distinctio,
              nihil. Nam amet velit id quos sunt. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Itaque magnam ab molestiae sit
              asperiores! Expedita sit earum blanditiis ratione eveniet
              obcaecati, suscipit aut, animi dignissimos enim dicta pariatur
              illum ipsa!
            </h3>

            <img src="./images/location/city-2.png" alt="" />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default About;
