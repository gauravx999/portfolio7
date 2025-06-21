import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Car from "../assets/projects/Car.png";
import Game1 from "../assets/projects/Game1.jpg";
import Medical from "../assets/projects/Medical.png";
import EComm from "../assets/projects/E-comm.jpg";
import Quiz from "../assets/projects/Quiz.png";
import ReactImg from "../assets/projects/React.jpeg"; // ✅ Renamed to avoid conflict

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent<strong className="yellow"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medical}
              isBlog={false}
              title="Medical"
              description="."
              ghLink="https://github.com/gauravx999/Medicalpro.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Game1}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="."
              ghLink="https://github.com/gauravx999/tic-tac-toe.git"
              demoLink="https://66d9d32221f96a2d069da3f4--wondrous-choux-7f4863.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="Quiz Website"
              description=""
              ghLink="https://github.com/gauravx999/Quizx.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Car}
              isBlog={false}
              title="Obstacle Detection Car"
              description="."
              ghLink="https://github.com/gauravx999/Obstacle-Detecting-Car.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EComm}
              isBlog={false}
              title="E-commerce Website"
              description=""
              ghLink=""
              demoLink="https://heroic-wisp-3218c8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactImg}
              isBlog={false}
              title="React Components"
              description="Coming Soon."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
