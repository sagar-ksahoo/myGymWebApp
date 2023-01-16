import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
      {/* Left side */}
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What Our cLients </span>
        <span> Say About Us </span>

        <span>{testimonialsData[selected].review}</span>

        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          {"  "}- {testimonialsData[selected].status}
        </span>
      </div>

      {/* Right side */}
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="testimonial-image" />

        <div className="arrows">
          <img
            onMouseEnter={() =>
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt="left-arrow"
          />
          <img
            onMouseEnter={() =>
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
            src={rightArrow}
            alt="right-arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
