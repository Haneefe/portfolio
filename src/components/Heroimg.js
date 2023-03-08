import React from "react";
import "./Heroimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import IntroImgPlaceHolder from "../assets/intro-bg-placeholder.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import backgroundVideo from "../assets/web.gif"
import TextSpan from "./TextSpan";
const Heroimg = () => {
  //
  const $name="Hi,I'M Haneef".split("");
  const $work="React Developer.".split("");
  return (
    <div className="hero">
      <div className="mask">
        {/* <LazyLoadImage className="into-img" src={IntroImg} alt="IntroImg" placeholderSrc={IntroImgPlaceHolder} height={"100%"} width={"100%"}/> */}
     <img src={backgroundVideo} className="into-img" />
      </div>
      <div className="content">
        {/* <p>Hi,I'M Haneef</p>*/}
        <p>{$name.map((letter,index)=>{
          return<TextSpan key={index}>{letter===" "?"\u00a0":letter}</TextSpan>
        })}</p>
        
       
        {/* <h1>React Developer.</h1>  */}
 <h1>{$work.map((letter,index)=>{
          return <TextSpan key={index}>{letter===" "?"\u00a0":letter}</TextSpan>
        })}</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a href="Haneef resume 2023.pdf" download="Haneef resume 2023.pdf" className="btn btn-light">
            Resume
            </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
