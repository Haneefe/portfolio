import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import React1placeholder from "../assets/react1-placeholder.webp";
import React2placeholder from "../assets/react2-placeholder.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import AnimatedTextCharacter from "./AnimatedTextChar";

const AboutContent = () => {
  //
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
       <div className="pcontainer">
        {/* <p className="line__1">Hello, I'm Haneef, a passionate React</p>
        <p className="line__2">developer with 2 years of experience in </p>
        <p className="line__3">building web and mobile react apps.</p>
        <p className="line__4">I have a strong foundation in JavaScript</p>
        <p className="line__5">I'm constantly learning and exploring</p>
       <p className="line__6">new technologies to stay up-to-date with</p>
       <p className="line__7">the latest developments in the field.</p> */}
        <p className="line__1">Hello, I'm Haneef, a passionate React dev</p>
        <p className="line__2">with 2 years of experience in building</p>
        <p className="line__3">web and mobile react applications.</p>
        <p className="line__4">I have a strong foundation in JavaScript</p>
        <p className="line__5">I'm constantly learning and exploring</p>
       <p className="line__6">new technologies to stay up-to-date</p>
       <p className="line__7">with the latest developments in the field.</p>
       </div>
       <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <LazyLoadImage className="img" src={React1} placeholderSrc={React1placeholder} alt="alt" />
          </div>
          <div className="img-stack bottom">
            <LazyLoadImage className="img" src={React2} placeholderSrc={React2placeholder} alt="alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
