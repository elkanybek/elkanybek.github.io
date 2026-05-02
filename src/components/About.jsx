import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import me2 from "../assets/me2.jpg";

const About = () => {
  const one = (
    <p>
      I am currently a <b>Software Engineer Intern</b> at
      <a href="https://www.nbc.ca/"> National Bank of Canada</a>, where I help rebuild their banking platform using BackBase.
      Previously, I was at{" "}
      <a href="https://www.bdc.ca/en"> BDC.</a>
    </p>
  );
  const two = (
    <p>
      Outside of my professional work, I enjoy staying active and inspired through tennis and skiing, 
      unwinding with a good book, and expressing creativity through dance and content.
    </p>
  );

  const techStack = [
    "Python",
    "TypeScript",
    "C#",
    "Java",
    "Kotlin",
    "JavaScript",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are a few technologies that I enjoy using:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Elsana Kanybek" src={me2} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
