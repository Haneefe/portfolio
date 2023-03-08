import React from "react";
import "./Work.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const WorkCard = (props) => {
  console.log(props)
  return (
    <div className="project-card">
      <LazyLoadImage src={props.imgsrc} placeholderSrc={props.placeholder} alt="immage" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
      
        <div className="pro-btns">
          {/* <Link to={{pathname:props.view}} target="_blank" className="btn">
            View
          </Link> */}
          <a className="btn" href={props.view} target="_blank">VIEW</a>
          <a className="btn" href={props.source} target="_blank">SOURCE</a>
          {/* <Link to="url.com" className="btn">
            Source
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
