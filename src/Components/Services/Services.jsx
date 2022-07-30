import React from "react";
import Card from "../Card/Card";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Resume from './newascv.pdf'

import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          Ipsum is simply dummy text of the printing and typesetting
        </span>
        <a href={Resume} download>

        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* first card */}

        <div style={{ left: "14rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Design"}
            details={"Figma, Sktech, Photoshop, Adobe, Adobe Xd"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            details={"Html, Css, JavaScript, React"}
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            details={"UI/UX Expert"}
          />
        </div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  );
};

export default Services;
