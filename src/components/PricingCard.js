import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = () => {
  const data = [
    {
      type: "Basic",
      price: "$100",
      duration: "-3 Days-",
      pages: "-3 Pages-",
      isFeautured: "Featured",
      isResponsive: "Responsive Design",
    },
    {
      type: "Premium",
      price: "$200",
      duration: "-5 Days-",
      pages: "-5 Pages-",
      isFeautured: "Featured",
      isResponsive: "Responsive Design",
    },
    {
      type: "Business",
      price: "$300",
      duration: "-5 Days-",
      pages: "-8 Pages-",
      isFeautured: "Featured",
      isResponsive: "Responsive Design",
    },
  ];

  return (
    <div className="pricing">
      <div className="card-container">
        {data.map((plan, index) => {
          return (
            <div className="card" key={index}>
              <h3>{plan.type}</h3>
              <span className="bar"></span>
              <p className="btc">{plan.price}</p>
              <p>{plan.duration}</p>
              <p>{plan.pages}</p>
              <p>{plan.isFeautured}</p>
              <p>{plan.isResponsive}</p>
              <Link to="/contact" className="btn">
                Purchase
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
