import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const transition = { type: "spring", duration: 3 };

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">
      {/* Left side */}
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What Our cLients </span>
        <span> Say About Us </span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>

        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          {"  "}- {testimonialsData[selected].status}
        </span>
      </div>

      {/* Right side */}
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="testimonial-image"
        />

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
