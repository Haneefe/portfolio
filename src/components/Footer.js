import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  //
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Chennai,Tamil Nadu</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9094796797
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              iamhaneefkhan@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is haneef,react developer,have experience working with react js
            and react native
          </p>
          <div className="Social">
            <a href="https://twitter.com/HaneefKhaann" target="_blank" rel="noreferrer">
            <FaTwitter
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
            </a>
           <a href="https://www.linkedin.com/in/haneef-khan-888079243/" rel="noreferrer" target="_blank">
           <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
           </a>
            
          <a href="https://github.com/Haneefe" target="_blank" rel="noreferrer"> 
             <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
