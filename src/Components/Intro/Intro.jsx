import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
  return (
    <div className="intro">
      {/* left side */}
      <div className="left-i">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>MD NEWAS</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producing the Quality work
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>

      {/* right side */}

      <div className="right-i">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassimoji} alt="" />
        
        {/* floating div */}


        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        
        {/* blure div */}
        
        <div className="blur" style={{ background: "rgb(238,210,255 )" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
