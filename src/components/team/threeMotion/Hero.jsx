import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"; // Import React Icons
import "./hero.css";

import Speech from "./Speech";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <h1 className="hTitle">
          Hey There, <br /> <span>I&apos;m Farzana Abedin</span>
        </h1>
        <div className="awards">
          <h2>Managing Director</h2>
          <p>Experienced MERN Stack Developer</p>
          <div className="socials">
            {/* Social Media Links */}
            <a
              href="https://github.com/PalashHawee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/palash-hawee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/palashhawee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/palashpaul.sangma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="hSection right">
        {/* follow*/}
        <div className="follow">
          <a href="">
            <img src="/images/youtube.png" />
          </a>
          <a href="">
            <img src="/images/facebook.png" />
          </a>
          <a href="">
            <img src="/images/instagram.png" />
          </a>
          <div className="followTextContainer">
            <div className="followText">Follow me</div>
          </div>
        </div>
        {/* BUBBlE */}
        <Speech />
        {/* certificate */}
        <div className="certificate">
          {/* <img src="/certificate.png" alt="certificate" />
          Certified Python Expert <br />
          Besant Technologies, Bengaluru  */}
        </div>
        {/* contact */}
        <a href="/#contact" className="contactLink">
          <div className="conatactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#118ccc" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Contact Me •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
