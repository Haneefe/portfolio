import React from "react";
import "./Work.css";
import ProjectCardData from "./WorkCardData";
import WorkCard from "./WorkCard";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imagesrc}
              placeholder={val.placeholder}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
