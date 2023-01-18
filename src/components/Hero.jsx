import React from "react";
import "./Hero.css";
import Header from "./Header";
import hero_image from "../images/hero_image.png";
import hero_image_back from "../images/hero_image_back.png";
import Heart from "../images/heart.png";
import Calories from "../images/calories.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-side">
          <Header />

          {/* The Tagline for your fitness brand*/}
          <div className="the-best-ad">
            <div className=""></div>
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
              <span>100+</span>
              <span>Expert Coaches</span>
            </div>

            <div>
              <span>5K+</span>
              <span>Members Joined</span>
            </div>

            <div>
              <span>50+</span>
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
          <div className="heart-rate">
            <img src={Heart} alt="heart-pic" />
            <span>Heart Rate</span>
            <span>94 BPM</span>
          </div>

          {/* Hero Images */}
          <img src={hero_image} className="hero-image" alt="hero-image" />
          <img
            src={hero_image_back}
            className="hero-image-back"
            alt="hero-image-back"
          />

          {/* Calories */}
          <div className="calories">
            <img src={Calories} alt="calorie-bar" />
            <div>
              <span>Calories Burned</span>
              <span>250 Kcal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
