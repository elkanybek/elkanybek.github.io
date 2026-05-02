import React from "react";
import "../styles/Projects.css";
import "../styles/Awards.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import fortesImg from "../assets/fortes.png";
import caeImg from "../assets/cae.png";
import obviaImg from "../assets/obvia.png";
import ai4goodImg from "../assets/ai4goodlab.png";

const awards = {
  "Fortes Scholarship Winner (x2) - Mar. & Nov. 2024": {
    desc: "Scholarship awarded in recognition of my success, determination, perseverance and commitment to my studies in the IT field.",
    funder: "National Bank of Canada (NBC) & Business Development Bank of Canada (BDC)",
    image: fortesImg,
    link:"https://www.fortestech.ca/"
  },
  "Next Generation Fellowship Winner - Sep. 2024 to Aug. 2025": {
    desc: "Encourage the best candidates to undertake or pursue research or research-creation activities on the societal impacts of AI and digital technologies.",
    funder: "International Observatory on the Societal Impacts of AI and Digital Technology (OBVIA)",
    image: obviaImg,
    link:"https://www.obvia.ca/en/research/calls/pbar25"
  },
  "AI4Good Lab Fellowship Winner - May to Jun. 2024": {
    desc: "Scholarship awarded in recognition of my success, determination, perseverance and commitment to my studies in the IT field.",
    funder: "Mila - Quebec Artificial Intelligence Institute & Google",
    image: ai4goodImg,
    link:"https://www.ai4goodlab.com/"
  },
  // "CAE Tech Scholarship Finalist - Feb. 2023": {
  //   desc: "This initiative encourages future technicians from various fields to start a career at CAE by offering traineeships that are integrated in the workplace.",
  //   funder: "Canadian Aviation Electronics",
  //   image: caeImg
  // }
};

const Awards = () => {
  return (
    <div id="awards">
      <div className="section-header">
        <span className="section-title">/ awards</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(awards).map((key, i) => (
            <li key={i} className={`projects-card ${key === "Custom Build PC" || key === "LED Sound Reactive Bracelet" ? "transparent-card" : ""}`}>
              <FadeInSection delay={(i + 1) * 100 + "ms"}>
                {awards[key].link ? (
                  <a
                    href={awards[key].link}
                    className="project-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {awards[key]["image"] && (
                      <div className="project-image-container">
                        <img src={awards[key]["image"]} alt={key} className="project-image" />
                      </div>
                    )}
                    {!awards[key]["image"] && (
                      <div className="card-header">
                        <div className="folder-icon">
                          <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                        </div>
                      </div>
                    )}
                    <div className="card-title">{key}</div>
                    <div className="card-desc">{awards[key]["desc"]}</div>
                    <div className="card-tech">{awards[key]["funder"]}</div>
                  </a>
                ) : (
                  <div className="project-card-link">
                    {awards[key]["image"] && (
                      <div className="project-image-container">
                        <img src={awards[key]["image"]} alt={key} className="project-image" />
                      </div>
                    )}
                    {!awards[key]["image"] && (
                      <div className="card-header">
                        <div className="folder-icon">
                          <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                        </div>
                      </div>
                    )}
                    <div className="card-title">{key}</div>
                    <div className="card-desc">{awards[key]["desc"]}</div>
                    <div className="card-tech">{awards[key]["funder"]}</div>
                  </div>
                )}
              </FadeInSection>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;
