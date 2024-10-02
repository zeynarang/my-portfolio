import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particles/ParticleVariantOne";
import CodzillaPortfolio from "../../assets/Projects/codzilla-portfolio.png";
import Codzilla from "../../assets/Projects/codzilla-project.png";
import RealEstate from "../../assets/Projects/real-estate.png";
import TravelCompany from "../../assets/Projects/travel-company.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodzillaPortfolio}
              isBlog={false}
              title="Codzilla Portfolio"
              description="A dynamic website featuring an amazing user experience and parallax scrolling effect."
              ghLink="https://github.com/zeynarang/codzilla-portfolio"
              demoLink="https://zeynarang.github.io/codzilla-portfolio/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Codzilla}
              isBlog={false}
              title="Codzilla Live"
              description="A responsive website for an IT services company, designed using HTML and SCSS for modern user experience."
              ghLink="https://github.com/zeynarang/codzilla-live"
              demoLink="https://zeynarang.github.io/codzilla-live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RealEstate}
              isBlog={false}
              title="Real Estate Advertising"
              description="A Real Estate Advertising Website that allows users to view listings of houses for sale or rent, including a gallery of images for each property."
              ghLink="https://github.com/zeynarang/real-estate-advertising"
              demoLink="https://zeynarang.github.io/real-estate-advertising/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelCompany}
              isBlog={false}
              title="Travel Company"
              description=""
              ghLink="https://github.com/zeynarang/travel-company"
              demoLink="https://zeynarang.github.io/travel-company/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
