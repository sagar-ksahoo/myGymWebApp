import React from "react";
import "./Hero.css";
import Header from "./Header";
import hero_image from "../images/hero_image.png";
import hero_image_back from "../images/hero_image_back.png";
import Heart from "../images/heart.png";
import Calories from "../images/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <>
      <div className="hero" id="home">
        <div className="blur blur-h"></div>
        <div className="left-side">
          <Header />

          {/* The Tagline for your fitness brand*/}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? "150px" : "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>

            <span>The best Fitness Centre in Delhi</span>
          </div>

          {/*  Heading */}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>

            <div>
              <span>Ideal </span>
              <span>Body</span>
            </div>

            <div>
              <span>We will help you to shape and build your ideal body</span>
            </div>
          </div>

          {/* Figures  */}

          <div className="figures">
            <div>
              <span>
                <NumberCounter end={100} start={1} delay="4" preFix="+" />
              </span>
              <span>Expert Coaches</span>
            </div>

            <div>
              <span>
                <NumberCounter end={2500} start={2200} delay="4" preFix="+" />
              </span>
              <span>Members Joined</span>
            </div>

            <div>
              <span>
                <NumberCounter end={50} start={1} delay="4" preFix="+" />
              </span>
              <span>Training Programs</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right-side">
          <button className="btn">Join Now</button>
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={Heart} alt="heart-pic" />
            <span>Heart Rate</span>
            <span>94 BPM</span>
          </motion.div>

          {/* Hero Images */}
          <img src={hero_image} className="hero-image" alt="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={hero_image_back}
            className="hero-image-back"
            alt="hero-image-back"
          />

          {/* Calories */}
          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            className="calories"
          >
            <img src={Calories} alt="calorie-bar" />
            <div>
              <span>Calories Burned</span>
              <span>250 Kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
