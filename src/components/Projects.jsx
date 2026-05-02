import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";
import travelooImg from "../assets/Projects/traveloo.png";
import savethechickenImg from "../assets/Projects/savethechicken.png";
import whatsitImg from "../assets/Projects/whatsit.png";

const spotlightProjects = {
  Traveloo: {
    title: "traveloo",
    desc: "Introducing Traveloo – a comprehensive trip tracking platform for explorers.",
    techStack: "TypeScript, Node.js, PostgreSQL",
    link: "https://github.com/elkanybek/MVC_Travel_Planning_WebApp/",
    image: travelooImg,
  },
  "Save the Chicken": {
    title: "save the chicken",
    desc: "The player begins each level in a room with two doors: an entrance and an exit. Alongside the player is a chicken with three lives that moves unpredictably. The objective is to reach the exit while carrying the chicken, avoiding obstacles and enemies.",
    techStack: "JavaScript",
    link: "https://github.com/elkanybek/SaveTheChicken_Game/",
    image: savethechickenImg,
  },
  "WhatsIt": {
    title: "whatsit",
    desc: "Whatsit is a Al communication assistant tool that aims to help those who suffer from aphasia regain their ability to communicate fluidly.",
    techStack: "Python, OpenAI's Whisper, Meta's Llama3",
    link: "https://github.com/elkanybek/Whatsit_AI4GoodLab_Project",
    image: whatsitImg,
  },
};

// const projects = {
//   "Elkanybek Portfolio": {
//     desc: "This is my portfolio, designed using React and Vite.",
//     techStack: "React.js, Vite, Bootstrap",
//     link: "https://github.com/elkanybek/elkanybek.github.io/",
//     open: "https://elkanybek.github.io/",
//   },
// };

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ software</span>
        <a
          href="https://github.com/elkanybek"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <div>
                  {spotlightProjects[key]["desc"]}
                  <div className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </div>

              <a
                href={
                  spotlightProjects[key]["open"] ||
                  spotlightProjects[key]["link"]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">
                  {spotlightProjects[key]["title"]}
                </div>
                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key]["image"]} alt={key} />
                </div>
              </a>
              <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
              <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
      {/* <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Projects;
