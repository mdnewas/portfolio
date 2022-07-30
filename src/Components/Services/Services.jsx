import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br />
        Ipsum is simply dummy text of the printing and typesetting
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div className="cards">
        I am the right side
      </div>
    </div>
  );
};

export default Services;
