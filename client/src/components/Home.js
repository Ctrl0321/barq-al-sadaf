import React from "react";
import landingImage from "../assets/landing-image.png";
import tick from "../assets/correct-mark.png";
import laptop from "../assets/laptop.png";
import lock from "../assets/lock.png";
import chart from "../assets/chart.png";
import ruby from "../assets/ruby.png";
import manWithChart from "../assets/manWithChart.png";
import document from "../assets/document.png";

const Home = () => {
  return (
    <>
      <div className="landing-page">
        <h2>BARQ AL SADAF</h2>
        <div className="landing-wording">
          <div className="landing-text">
            <h1>
              Your Trusted Partner In <br /> Project Management
            </h1>
            <p>
              At Barq Al Sadaf, we understand that successful projects require
              not only vision and ambition but also meticulous planning and
              execution. We are your trusted partner in turning your project
              dreams into reality.
            </p>
            <button>HOW IT WORKS</button>
          </div>
          <div className="landing-image">
            <img src={landingImage} alt="landing"></img>
          </div>
        </div>
      </div>
      <div className="services-container">
        <div className="welcome-text">
          <p>Welcome</p>
          <h2>Our Services</h2>
        </div>
        <div className="services">
          <div className="service">
            <img src={laptop}></img>
            <h2>Project Planning</h2>
            <p>
              Effective project planning and strategy are the foundation of
              success. We collaborate closely with you to create detailed
              project plans, ensuring your project stays on course, within
              budget, and aligned with your long-term goals
            </p>
            <button>LEARN MORE</button>
          </div>
          <div className="service">
            <img src={lock}></img>
            <h2>Risk Management</h2>
            <p>
              Uncertainties are inherent in every project, but proactive risk
              management is our specialty. We identify potential risks, analyze
              their impact, and implement strategies to protect your project
              from unexpected challenges, ensuring a smoother path to completion
            </p>
            <button>LEARN MORE</button>
          </div>

          <div className="service">
            <img src={tick}></img>
            <h2>Quality Assurance</h2>
            <p>
              Quality is paramount in every project. Our dedicated quality
              assurance team monitors and assesses every project aspect, from
              planning to completion, to ensure it meets the highest standards.
              Your satisfaction and your project's success remain our top
              priorities.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="why-choose-container">
        <div className="why-choose-text">
          <p className="gold">HOW IT WORKS</p>
          <h1>Why Choose Barq Al Sadaf?</h1>
          <p>
            Barq Al Sadaf offers a comprehensive suite of project management{" "}
            <br /> services
          </p>
        </div>
        <div className="why-choose-sub">
          <img src={chart}></img>
          <div className="why-choose-desc">
            <h2>Experience</h2>
            <p>
              With a wealth of experience in project management, we have
              encountered and solved diverse challenges, positioning us to
              handle any project's complexities.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="why-choose-sub">
          <div className="why-choose-desc">
            <h2>Dedication</h2>
            <p>
              Your project becomes our project. We are dedicated to its success
              and work tirelessly to ensure your vision becomes a reality.
            </p>
            <button>LEARN MORE</button>
          </div>
          <img src={document}></img>
        </div>
        <div className="why-choose-sub">
          <img src={ruby}></img>
          <div className="why-choose-desc">
            <h2>Tailored Solutions</h2>
            <p>
              We understand that every project is unique. Our approach is
              customized to your specific needs, ensuring you get solutions that
              fit like a glove.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
