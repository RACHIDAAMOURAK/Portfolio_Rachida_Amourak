import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WEATHER from "../../Assets/Projects/weatherC++.png";
import university from "../../Assets/Projects/e-services.png";
import weather from "../../Assets/Projects/weather.png";
import bank from "../../Assets/Projects/bank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App !🌍"
              description="A Weather App built with JavaScript, CSS, and HTML.This app provides real-time weather updates for any city worldwide, featuring a clean and user-friendly interface. It was a great opportunity to work with APIs  and enhance my front-end development skills."
              ghLink="https://github.com/RachidaAmourak/Weather-App"
              demoLink="https://drive.google.com/file/d/19wlInhtaWtG4cugcQh-CvkCZDjNEsOvv/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={university}
              isBlog={false}
              
              title="Teaching Assignment Management Web Application 👩‍🎓"
              description=" A full-stack web application Developed using HTML, CSS, JavaScript, PHP, and MySQL to manage the assignment of teaching units within a university department."
              ghLink="https://github.com/RACHIDAAMOURAK/gestion-enseignements-php-app"
              demoLink="https://www.linkedin.com/posts/rachida-amourak-86b822282_php-webdevelopment-html-activity-7343584527274926080-JdHt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETSNFMBj9AQHFg711YhdgXFqSzRz25ddsc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title=" SAR BANK 🏛"
              description="Development of a bank account management application using the C programming language."
              ghLink="https://github.com/RACHIDAAMOURAK/C-Project-SAR-BANK"
              demoLink="https://www.linkedin.com/posts/rachida-amourak-86b822282_sarbank-cprogramming-bankingapp-activity-7295393256194932737-8J5U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETSNFMBj9AQHFg711YhdgXFqSzRz25ddsc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WEATHER}
              isBlog={false}
              title="Weather Application"
              description="Development of a Weather application using C++, Qt, and SQLite."
              ghLink="https://github.com/RACHIDAAMOURAK/WeatherAppQt"
              demoLink="https://drive.google.com/file/d/1CRaNFhWgE8y4tB78rRi6DB-IDwOgDHuK/view?usp=sharing"

              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
