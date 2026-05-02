import React from "react";
import "../styles/Events.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import googleTechnovation from "../assets/Events/technovation_google.png";
import geminiAI from "../assets/Events/geminai.png";
import bdcEventImg from "../assets/Events/bdc_event.png";
import conuhacksxImg from "../assets/Events/conuhacksx.png";
import graduationJac2025Img from "../assets/Events/graduation_jac2025.jpeg";
import bdcInternship from "../assets/Events/bdc_internship.png";
import googleMe from "../assets/Events/googleai4goodlab.png";

const Events = () => {
  const events = [
    { src: googleTechnovation, title: "Technovation Montreal at Google" },
    { src: bdcEventImg, title: "BDC Event" },
    { src: conuhacksxImg, title: "Conuhacks X" },
    { src: graduationJac2025Img, title: "Graduation JAC 2025" },
    { src: bdcInternship, title: "BDC Internship" },
    { src: googleMe, title: "Google AI4Good Lab" }
  ];

  return (
    <div id="events">
      <div className="section-header">
        <span className="section-title">/ events</span>
        <Link to="/events" className="explore-link">
          Explore collection
        </Link>
      </div>
      <FadeInSection delay="200ms">
        <div className="events-description">
          A collection of the events I've attended.
        </div>
      </FadeInSection>
      <div className="events-container">
        <div className="events-grid">
          {events.map((art, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="events-card">
                <img src={art.src} alt={art.title} className="events-image" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
