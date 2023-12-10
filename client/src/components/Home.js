import React from "react";
import landingImage from "../assets/COver.png";
import tick from "../assets/correct-mark-red.png";
import laptop from "../assets/laptop-red.png";
import lock from "../assets/lock-red.png";
import chart from "../assets/chart-red.png";
import ruby from "../assets/ruby-red.png";
import manWithChart from "../assets/manWithChart-red.png";
import document from "../assets/document-red.png";
import logo from "../assets/Logo.png"

const Home = () => {
  return (
    <>
      <div className="landing-page">
        {/*<h2>BARQ AL SADAF</h2>*/}
        <img className="logo" src={logo} alt="landing"></img>
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
        <div className="why-choose-sub one">
          <img src={chart}></img>
          <div className="why-choose-desc ">
            <h2>Experience</h2>
            <p>
              With a wealth of experience in project management, we have
              encountered and solved diverse challenges, positioning us to
              handle any project's complexities.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="why-choose-sub two">
          <div className="why-choose-desc ">
            <h2>Dedication</h2>
            <p>
              Your project becomes our project. We are dedicated to its success
              and work tirelessly to ensure your vision becomes a reality.
            </p>
            <button>LEARN MORE</button>
          </div>
          <img src={document}></img>
        </div>
        <div className="why-choose-sub three">
          <img src={ruby}></img>
          <div className="why-choose-desc ">
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
      <div className="project-container">
        <h1>Let's Discuss Your Project</h1>
        <p>
          Are you ready to embark on a journey to project success? Contact us{" "}
          <br />
          today, and let’s start the conversation about how Barq Al Sadaf can{" "}
          <br />
          help you achieve your project management goals. We look forward to{" "}
          <br />
          being a part of your project’s remarkable journey.
        </p>
      </div>
      <div className="best-service-container">
        <img src={manWithChart}></img>
        <div className="best-service-wording">
          <h3>WE ARE HERE</h3>
          <h1>Best Service for You</h1>
          <p>
            At Barq al Sadaf, we understand that choosing the right project <br/>
            management service can be a critical decision. To assist you in <br/>
            making an informed choice, we offer a personalized service <br/>
            recommendation based on your specific needs and project <br/>
            requirements.
          </p>
        </div>
      </div>
      <div className="visit-us-container">
         <h1>VISIT US</h1>
      </div>
      <footer>
        <h2><span>[</span>&nbsp; CONTACT US TODAY &nbsp;<span>]</span></h2>
        <p>We are here to assist you with your project management needs.</p>
      </footer>
    </>
  );
};

export default Home;
