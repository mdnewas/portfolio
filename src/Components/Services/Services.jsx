import React from "react";
import Card from "../Card/Card";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Resume from './newascv.pdf'

import "./Services.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = {duration: 2, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
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

        <motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}
        style={{ left: "14rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Design"}
            details={"Figma, Sktech, Photoshop, Adobe, Adobe Xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
         whileInView={{left:'-4rem', top:'12rem'}}
         initial={{left:'-10rem'}}
         transition={transition}
         style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            details={"Html, Css, JavaScript, React,Node , Express, MongoDB"}
          />
        </motion.div>
        {/* third card */}
        <motion.div 
        whileInView={{left:'12rem', top:'19rem'}}
        initial={{left:'20rem'}}
        transition={transition}
        style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            details={"UI/UX Expert, and also doing lots of stuff but i can't remember right now"}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>
  );
};

export default Services;
