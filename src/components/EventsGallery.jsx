import React from "react";
import "../styles/EventsGallery.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import technovation from "../assets/Events/technovation_google.png";
import gemini from "../assets/Events/geminai.png";
import bdcEvent from "../assets/Events/bdc_event.png";
import conuhacksx from "../assets/Events/conuhacksx.png";
import conuhacksxMe from "../assets/Events/conuhacksx_me.png";
import graduation from "../assets/Events/graduation_jac2025.jpeg";
import bdcInternship from "../assets/Events/bdc_internship.png";
import bdcInternDay from "../assets/Events/bdc_internday.png";
import googleAI4Good from "../assets/Events/googleai4goodlab.png";
import awardFortes from "../assets/Events/award_fortes.png";
import ai4goodlab2024 from "../assets/Events/ai4goodlab2024.png";
import awsReachback from "../assets/Events/aws_reachback2026.png";
import awsYouthtech from "../assets/Events/aws_youthtech.png";
import csJac from "../assets/Events/cs_jac_group.png";
import fortesElsana from "../assets/Events/fortes_elsana.png";
import fortesGroup from "../assets/Events/fortes_group.png";
import fortesMentorship from "../assets/Events/fortes_mentorship.png";
import fortesVisibility from "../assets/Events/fortes_visibility.png";
import jachacks from "../assets/Events/jachacks.png";
import northsec from "../assets/Events/northsec.png";
import northsecGadget from "../assets/Events/northsecgadget.png";
import speakingFortes from "../assets/Events/speaking_fortes.png";

const EventsGallery = () => {
  const allArt = [
    { src: technovation, title: "Technovation Montreal at Google" },
    { src: gemini, title: "Gemini AI" },
    { src: bdcEvent, title: "BDC Event" },
    { src: conuhacksx, title: "Conuhacks X" },
    { src: conuhacksxMe, title: "Conuhacks X (Me)" },
    { src: graduation, title: "Graduation JAC 2025" },
    { src: bdcInternship, title: "BDC Internship" },
    { src: bdcInternDay, title: "BDC Intern Day" },
    { src: googleAI4Good, title: "Google AI4Good Lab" },
    { src: awardFortes, title: "Award - Fortes" },
    { src: ai4goodlab2024, title: "AI4Good Lab 2024" },
    { src: awsReachback, title: "AWS Reachback 2026" },
    { src: awsYouthtech, title: "AWS Youth Tech" },
    { src: csJac, title: "CS JAC Group" },
    { src: fortesElsana, title: "Fortes - Elsana" },
    { src: fortesGroup, title: "Fortes Group" },
    { src: fortesMentorship, title: "Fortes Mentorship" },
    { src: fortesVisibility, title: "Fortes Visibility" },
    { src: jachacks, title: "JAC Hacks" },
    { src: northsec, title: "NorthSec" },
    { src: northsecGadget, title: "NorthSec Gadget" },
    { src: speakingFortes, title: "Speaking - Fortes" }
  ];

  return (
    <div className="art-gallery-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/ events gallery</span>
      </div>
      <FadeInSection delay="200ms">
        <div className="gallery-description">
          A collection of the events I've attended.
        </div>
      </FadeInSection>
      <div className="gallery-grid">
        {allArt.map((art, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="gallery-card">
              <img src={art.src} alt={art.title} className="gallery-image" />
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default EventsGallery;
